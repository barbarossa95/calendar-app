import React from 'react';

import Link from '../ReactLink';

import './Event.scss';

const Event = ({
  event,
  position: { columnCount, columnIndex },
  editEvent,
  deleteEvent,
}) => {
  const { _id, title, start, duration } = event,
    style = {
      top: `${start * 10}px`,
      height: `${duration * 10}px`,
      width: `calc(${100 / columnCount}vw - 50px)`,
      left: `calc(${(columnIndex / columnCount) * 100}vw - ${
        40 * columnIndex
      }px)`,
    },
    editHandler = () => editEvent(`/edit?id=${_id}`),
    deleteHandler = () => deleteEvent(event);

  return (
    <div key={_id} className="event" style={style}>
      <h1 className="event__title">{title}</h1>
      <div className="event__buttons">
        <small>
          <Link title="Edit" action={editHandler}></Link>
        </small>
        <span>|</span>
        <small>
          <Link title="Delete" action={deleteHandler}></Link>
        </small>
      </div>
    </div>
  );
};

export default Event;

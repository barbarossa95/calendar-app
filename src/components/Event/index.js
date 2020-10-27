import React from 'react';

import Link from '../ReactLink';

import './Event.scss';

const Event = ({
  event,
  position: { columnCount, columnIndex },
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
    deleteHandler = () => deleteEvent(event);

  return (
    <div key={_id} className="event" style={style}>
      <h1 className="event__title">
        {title}
        <small>
          <Link title="Delete" action={deleteHandler}></Link>
        </small>
      </h1>
    </div>
  );
};

export default Event;

import React from 'react';

import './Event.scss';

const Event = ({ event, position: { columnCount, columnIndex } }) => {
  const { _id, title, start, duration } = event,
    style = {
      top: `${start * 10}px`,
      height: `${duration * 10}px`,
      width: `calc(${100 / columnCount}vw - 50px)`,
      left: `calc(${(columnIndex / columnCount) * 100}vw - ${
        40 * columnIndex
      }px)`,
    };

  return (
    <div key={_id} className="event" style={style}>
      <h1 className="event__title">{title}</h1>
    </div>
  );
};

export default Event;

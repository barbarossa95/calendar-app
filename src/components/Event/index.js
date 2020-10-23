import React, { useState } from 'react';

import './Event.scss';

const Event = ({ event }) => {
  const { _id, title, start, duration } = event,
    style = {
      height: `${(duration / 5) * 50}px`,
    };

  return (
    <div key={_id} className="event" style={style}>
      <h1 className="event__title">{title}</h1>
    </div>
  );
};

export default Event;

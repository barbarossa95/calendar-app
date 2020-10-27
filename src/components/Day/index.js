import React, { useEffect } from 'react';

import Event from '../Event';

import './Day.scss';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const Day = ({ groupedEvents, fetchEvents, deleteEvent }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  function* grid() {
    const start = 0,
      end = 9 * 60,
      step = 30;

    for (let minutes = start; minutes <= end; minutes++) {
      if (minutes % step !== 0 || minutes === end) continue;

      yield (
        <div className="grid__time" key={minutes}>
          <div className="grid__time_label">{time(minutes)}</div>
        </div>
      );
    }
  }

  function* components() {
    let i = 0,
      j = 0;

    for (let group of groupedEvents) {
      const components = [],
        columnCount = group.length;
      let columnIndex = 0;

      for (let groupItem of group) {
        if (!Array.isArray(groupItem)) {
          components.push(
            <Event
              key={j++}
              event={groupItem}
              deleteEvent={deleteEvent}
              position={{ columnCount, columnIndex }}></Event>
          );

          columnIndex++;

          continue;
        }

        components.push(
          ...groupItem.map((item) => (
            <Event
              key={j++}
              event={item}
              deleteEvent={deleteEvent}
              position={{ columnCount, columnIndex }}></Event>
          ))
        );

        columnIndex++;
      }

      yield (
        <div key={i++} className="grid__events-group">
          {components}
        </div>
      );
    }
  }

  function time(value) {
    let hours = parseInt(value / 60) + 8,
      minutes = value % 60;

    hours += hours <= 12 ? 0 : -12;

    hours = zeroPad(hours, 2);
    minutes = zeroPad(minutes, 2);

    return `${hours}:${minutes}`;
  }

  return (
    <div className="grid">
      <div className="grid__events-wrapper">{[...components()]}</div>
      {[...grid()]}
    </div>
  );
};

export default Day;

import React from 'react';

import Event from '../Event';

import './Day.scss';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const Day = ({ events, cols }) => {
  const days = [...grid()];

  function* grid() {
    const start = 0,
      end = 9 * 60,
      step = 5;

    let activeEvents = {};

    for (let minutes = start; minutes <= end; minutes++) {
      if (minutes % step !== 0 || minutes === end) continue;

      const newEvents = getNewEvents(minutes, 1),
        className =
          minutes % 30 === 0 ? 'grid__minute__half-hour' : 'grid__minute';

      activeEvents = filterActiveEvents(activeEvents, minutes);

      yield (
        <div className={className} key={minutes}>
          {minutes % 30 === 0 ? (
            <div className="grid__time">{time(minutes)}</div>
          ) : null}
          <div className="grid__events-wrapper">
            {renderEvents(newEvents, activeEvents)}
          </div>
        </div>
      );

      activeEvents = addActiveEvents(activeEvents, newEvents);
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

  function renderEvents(eventsList = [], activeEvents = {}) {
    const components = [],
      iterator = eventsList.values();
    let nextEvent = iterator.next().value;

    for (let colIndex = 1; colIndex <= cols; colIndex++) {
      if (!activeEvents[colIndex] && nextEvent) {
        components.push(<Event key={colIndex} event={nextEvent}></Event>);
      } else {
        components.push(
          <div key={colIndex} className="event event__empty"></div>
        );
      }

      nextEvent = iterator.next().value;
    }

    return components;
  }

  function getNewEvents(currentTime, step) {
    return events.filter(
      ({ start }) => start >= currentTime && start <= currentTime + step
    );
  }

  function filterActiveEvents(activeEvents, currentTime) {
    for (let colIndex in activeEvents) {
      const event = activeEvents[colIndex];

      if (!event) continue;

      const { start, duration } = event;

      if (start + duration >= currentTime) continue;

      activeEvents[colIndex] = null;
    }

    return activeEvents;
  }

  function addActiveEvents(activeEvents = {}, newEvents = []) {
    newEvents.forEach((event) => {
      let colIndex = 0;

      for (colIndex in activeEvents) {
        if (activeEvents[colIndex] === null) {
          activeEvents[colIndex] = event;

          return;
        }
      }

      activeEvents[++colIndex] = event;
    });

    return activeEvents;
  }

  return <div className="grid">{days}</div>;
};

export default Day;

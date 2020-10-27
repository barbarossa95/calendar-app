import { createSelector } from 'reselect';

// USER STATE

export const getUserState = (state) => state.user;

export const getUser = createSelector([getUserState], (state) =>
  !state.user ? null : state.user
);

export const getLoginMessage = createSelector(
  [getUserState],
  (state) => state.message || ''
);

// EVENTS STATE

export const getEventsState = ({ events }) => events;

export const getEvents = createSelector(
  [getEventsState],
  ({ events }) => events
);

export const getEventsCols = createSelector([getEvents], (events) => {
  let active = [];

  return events.reduce((cols, event) => {
    active = active.filter(
      ({ start, duration }) => start + duration >= event.start
    );
    active.push(event);

    if (active.length > cols) {
      cols = active.length;
    }

    return cols;
  }, 0);
});

export const getEventsGrouped = createSelector([getEvents], (events) => {
  const isInterseted = (event1, event2) => {
    let { start, end = null } = !Array.isArray(event1)
      ? event1
      : event1.reduce(
          (data, event) => {
            data.start < event.start && (data.start = event.start);
            data.end < event.start + event.duration &&
              (data.end = event.start + event.duration);

            return data;
          },
          {
            start: 0,
            end: 0,
          }
        );

    !end && (end = event1.start + event1.duration);

    return (
      (start < event2.start && end > event2.start) || start === event2.start
    );
  };

  return events.reduce((result, event) => {
    let pushed = false;

    result.forEach((group) => {
      const intersection = group
        .flat()
        .filter((item) => isInterseted(item, event));

      if (intersection.length === 0) return;

      if (intersection.length === group.length) {
        group.push(event);
        pushed = true;

        return false;
      }

      const index = group.findIndex((item) => !isInterseted(item, event)),
        item = group[index];

      if (Array.isArray(item)) {
        group[index] = [...item, event];
      } else {
        group[index] = [item, event];
      }

      pushed = true;

      return false;
    });

    if (!pushed) {
      result.push([event]);
    }

    return result;
  }, []);
});

export const getEventFromRoute = (state) => {
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  const id = getParameterByName('id');

  return state.events.events.find((e) => e._id == id);
};

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
  const isInterseted = (event1, event2) =>
    event1.start < event2.start &&
    event1.start + event1.duration > event2.start;

  return events.reduce((result, event, index) => {
    let pushed = false;

    result.forEach((group) => {
      const intersection = group.filter((item) => isInterseted(item, event));

      if (intersection.length === 0) return;

      if (intersection.length === group.length) {
        group.push(event);
        pushed = true;

        return false;
      }

      const index = group.findIndex((item) => !isInterseted(item, event)),
        item = group[index];

      group[index] = [item, event];
      pushed = true;

      return false;
    });

    if (!pushed) {
      result.push([event]);
    }

    return result;
  }, []);
});

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

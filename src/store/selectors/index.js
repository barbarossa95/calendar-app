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

const events = [
  { _id: '1', start: 20, duration: 5, title: 'хуй' },
  { _id: '2', start: 20, duration: 199, title: 'хуй1' },
  { _id: '3', start: 20, duration: 99, title: 'хуй2' },
  { _id: '4', start: 26, duration: 60, title: 'title 2' },
  {
    _id: '5',
    start: 100,
    duration: 11,
    title: 'titletitletitletitletitletitletitletitletitle',
  },
  { _id: '6', start: 340, duration: 11, title: 'title' },
  { _id: '7', start: 490, duration: 11, title: 'title' },
];

export const getEventsState = (state) => {
  return {
    events,
  };
};

export const getEvents = createSelector([getEventsState], (state) => {
  return state.events;
});

export const getEventsCols = createSelector([getEventsState], (state) => {
  let active = [];

  return events.reduce((cols, event) => {
    debugger;
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

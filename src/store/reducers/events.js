import * as at from '../actionTypes/events';

const initialState = {
  events: [],
};

const handler = {
  [at.ADD_EVENT](state, { event }) {
    const events = [...state.events, event];
    return {
      ...state,
      events,
    };
  },

  [at.FETCH_EVENTS](state, { events }) {
    return {
      ...state,
      events,
    };
  },

  [at.CLEAR_EVENTS]() {
    return initialState;
  },
};

export default (state = initialState, action) =>
  handler[action.type] ? handler[action.type](state, action) : state;

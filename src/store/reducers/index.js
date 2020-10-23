import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import events from './events';
import user from './user';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    events,
    user,
  });

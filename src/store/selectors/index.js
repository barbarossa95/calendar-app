import { createSelector } from 'reselect';

export const getUserState = (state) => state.user;

export const getLoginMessage = createSelector(
  [getUserState],
  (state) => state.message || ''
);

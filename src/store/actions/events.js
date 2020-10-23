import axios from '../../configs/axios';

import * as at from '../actionTypes/events';
import { AUTH_FAIL } from '../actionTypes/user';

export const fetchEvents = () => async (dispatch, getState) => {
  try {
    const {
        user: { token = '' },
      } = getState(),
      res = await axios.get('/events', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    dispatch({
      type: at.CLEAR_EVENTS,
    });
    dispatch({
      type: at.FETCH_EVENTS,
      events: res.data,
    });
  } catch (e) {
    if (e.request.status !== 200) {
      console.error(e);
    }
    if (e.request.status === 401) {
      localStorage.setItem('token', '');
      dispatch({
        type: AUTH_FAIL,
      });
    }
  }
};

export const addEvent = (event) => async (dispatch, getState) => {
  try {
    const {
        user: { token = '' },
      } = getState(),
      {
        data: {
          event: { _id: key },
        },
      } = await axios.post('/events', event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    dispatch({
      type: at.ADD_EVENT,
      event: {
        ...event,
        key,
      },
    });
  } catch (e) {
    if (e.request.status !== 200) {
      console.error(e);
    }
    if (e.request.status === 401) {
      localStorage.setItem('token', '');
      dispatch({
        type: AUTH_FAIL,
      });
    }
  }
};

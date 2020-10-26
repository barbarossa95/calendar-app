import axios from '../../config/axios';

import * as at from '../actionTypes/events';
import { AUTH_FAIL } from '../actionTypes/user';

export const fetchEvents = () => async (dispatch, getState) => {
  try {
    // const {
    //     user: { token = '' },
    //   } = getState(),
    //   res = await axios.get('/events', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });

    dispatch({
      type: at.CLEAR_EVENTS,
    });

    const events = [
      { _id: '1', start: 20, duration: 5, title: 'foo' },
      { _id: '2', start: 20, duration: 199, title: 'foo1' },
      { _id: '3', start: 20, duration: 99, title: 'foo2' },
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

    dispatch({
      type: at.FETCH_EVENTS,
      events,
      // events: res.data,
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

import axios from '../../config/axios';

import { push } from 'connected-react-router';

import * as at from '../actionTypes/user';
import { PAGE_HOME, PAGE_LOGIN } from '../../helpers/constants';

import { CLEAR_EVENTS } from '../actionTypes/events';

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: at.LOGIN_REQUEST,
    });

    const response = await axios.post('/auth/login', {
        username,
        password,
      }),
      {
        data: { token, user },
      } = response;

    localStorage.setItem('token', token);

    dispatch({
      type: at.LOGIN_SUCCESS,
      token,
      user,
    });

    dispatch(push(PAGE_HOME));
  } catch (error) {
    dispatch({
      type: at.LOGIN_FAIL,
      message: error.response.data.message,
    });

    throw error;
  }
};

export const logout = () => async (dispatch) => {
  localStorage.setItem('token', '');

  dispatch({
    type: CLEAR_EVENTS,
  });
  dispatch({
    type: at.LOGOUT,
  });
  dispatch(push(PAGE_LOGIN));
};

export const checkAuth = () => async (dispatch, getState) => {
  try {
    const {
        user: { token = '' },
      } = getState(),
      response = await axios.get('/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      {
        data: { user },
      } = response;

    dispatch({
      type: at.FETCH_USER,
      user,
    });
  } catch (error) {
    logout()(dispatch);
  }
};

export const register = () => async (dispatch) => {
  try {
    const response = await axios.get('/auth/register', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      {
        data: { token, user },
      } = response;

    localStorage.setItem('token', token);

    dispatch({
      type: at.LOGIN_SUCCESS,
      token,
      user,
    });

    dispatch(push(PAGE_HOME));
  } catch (error) {
    logout()(dispatch);
  }
};

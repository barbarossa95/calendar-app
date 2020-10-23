import * as at from '../actionTypes/user';

const initialState = {
  token: localStorage.getItem('token') || '',
  user: null,
  message: null,
  loading: false,
};

const handler = {
  [at.LOGIN_REQUEST](state) {
    return {
      ...state,
      message: `Loading`,
      loading: true,
    };
  },
  [at.LOGIN_SUCCESS](state, { token, user }) {
    return {
      ...state,
      message: `Welcome, ${user.name}!`,
      token,
      user,
      loading: false,
    };
  },
  [at.LOGIN_FAIL](state, { message }) {
    return {
      ...state,
      token: null,
      user: null,
      message,
      loading: false,
    };
  },
  [at.AUTH_FAIL](state) {
    return {
      ...state,
      user: null,
      token: null,
      message: 'Unauthorized access!',
    };
  },
  [at.LOGOUT](state) {
    return {
      ...state,
      user: null,
      token: null,
      message: null,
    };
  },
  [at.FETCH_USER](state, { user }) {
    return {
      ...state,
      user,
    };
  },
};

export default (state = initialState, action) =>
  handler[action.type] ? handler[action.type](state, action) : state;

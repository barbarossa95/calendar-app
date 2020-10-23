import { push } from 'connected-react-router';

export const go = (path) => (dispatch) => {
  dispatch(push(path));
};

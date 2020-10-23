import { connect } from 'react-redux';

import { login } from '../store/actions/user';
import { go } from '../store/actions/navigation';

import { getLoginMessage } from '../store/selectors';

import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => ({
    message: getLoginMessage(state)
});

const mapDispatchToProps = { login, go };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

import { connect } from 'react-redux';

import { login } from '../store/actions/user';

import LoginForm from '../components/LoginForm';

const mapStateToProps = () => ({
});

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

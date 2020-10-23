import { connect } from 'react-redux';

import { register } from '../store/actions/user';
import { go } from '../store/actions/navigation';

import { getLoginMessage } from '../store/selectors';

import RegisterForm from '../components/RegisterForm';

const mapStateToProps = (state) => ({
    message: getLoginMessage(state)
});

const mapDispatchToProps = { register, go };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

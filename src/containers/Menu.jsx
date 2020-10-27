import { connect } from 'react-redux';

import { getUser } from '../store/selectors';
import { logout } from '../store/actions/user';
import { go } from '../store/actions/navigation';

import Menu from '../components/TopMenu';

const mapStateToProps = (state) => ({
    user: getUser(state)
});

const mapDispatchToProps = { logout, go };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
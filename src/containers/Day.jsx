import { connect } from 'react-redux';

import { login } from '../store/actions/user';

import DayComp from '../components/Day';

const mapStateToProps = () => ({
});

const mapDispatchToProps = { login };

return connect(mapStateToProps,mapDispatchToProps)(DayComp)
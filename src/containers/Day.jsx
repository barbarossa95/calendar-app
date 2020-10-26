import { connect } from 'react-redux';

import { login } from '../store/actions/user';
import { fetchEvents } from '../store/actions/events';

import DayComp from '../components/Day';
import { getEvents, getEventsCols, getEventsGrouped } from '../store/selectors';

const mapStateToProps = (state) => ({
    cols: getEventsCols(state),
    events: getEvents(state),
    groupedEvents: getEventsGrouped(state)
});

const mapDispatchToProps = { login, fetchEvents };

export default connect(mapStateToProps,mapDispatchToProps)(DayComp)
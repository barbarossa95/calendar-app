import { connect } from 'react-redux';

import { fetchEvents, deleteEvent } from '../store/actions/events';

import DayComp from '../components/Day';
import { getEventsGrouped } from '../store/selectors';

const mapStateToProps = (state) => ({
    groupedEvents: getEventsGrouped(state)
});

const mapDispatchToProps = { fetchEvents, deleteEvent };

export default connect(mapStateToProps,mapDispatchToProps)(DayComp)
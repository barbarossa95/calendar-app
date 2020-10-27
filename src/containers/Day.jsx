import { connect } from 'react-redux';

import { fetchEvents, deleteEvent } from '../store/actions/events';
import { go } from '../store/actions/navigation';

import DayComp from '../components/Day';
import { getEventsGrouped } from '../store/selectors';

const mapStateToProps = (state) => ({
    groupedEvents: getEventsGrouped(state)
});

const mapDispatchToProps = { fetchEvents, deleteEvent, go };

export default connect(mapStateToProps,mapDispatchToProps)(DayComp)
import { connect } from 'react-redux';

import { fetchEvents } from '../store/actions/events';

import DayComp from '../components/Day';
import { getEventsGrouped } from '../store/selectors';

const mapStateToProps = (state) => ({
    groupedEvents: getEventsGrouped(state)
});

const mapDispatchToProps = { fetchEvents };

export default connect(mapStateToProps,mapDispatchToProps)(DayComp)
import { connect } from 'react-redux';

import EventForm from '../components/EventForm';

import { go } from '../store/actions/navigation';
import {editEvent} from '../store/actions/events';

import {getEventFromRoute} from '../store/selectors';

const mapStateToProps = (state) => ({
    event: getEventFromRoute(state)
});

const mapDispatchToProps = { post:editEvent , go};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
import { connect } from 'react-redux';

import EventForm from '../components/EventForm';

import { go } from '../store/actions/navigation';
import {addEvent} from '../store/actions/events';

const mapStateToProps = () => ({
});

const mapDispatchToProps = { post:addEvent , go};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
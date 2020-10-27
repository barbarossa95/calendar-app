import React from 'react';
import EditEvent from '../containers/EditEvent';

import requireAuth from '../hoc/requireAuth';

const Add = () => (<EditEvent></EditEvent>);

export default requireAuth(Add);
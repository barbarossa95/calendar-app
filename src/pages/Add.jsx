import React from 'react';
import AddEvent from '../containers/AddEvent';

import requireAuth from '../hoc/requireAuth';

const Add = () => (<AddEvent></AddEvent>);

export default requireAuth(Add);
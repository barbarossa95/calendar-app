import React from 'react';
import Menu from '../containers/Menu';
import Day from '../containers/Day';

import requireAuth from '../hoc/requireAuth';

const Home = () => (
    <main>
      <Menu />
      <Day />
    </main>
  );

export default requireAuth(Home);
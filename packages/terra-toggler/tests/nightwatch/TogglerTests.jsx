/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const TogglerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/toggler-tests/default">Toggler - Default</Link></li>
      <li><Link to="/tests/toggler-tests/animated">Toggler - Animated</Link></li>
      <li><Link to="/tests/toggler-tests/open">Toggler - Open</Link></li>
    </ul>
  </div>
);

export default TogglerTests;
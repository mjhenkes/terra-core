/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TogglerTests from './TogglerTests';

// Test Cases
import DefaultToggler from './DefaultToggler';
import AnimatedToggler from './AnimatedToggler';
import OpenToggler from './OpenToggler';

const routes = (
  <div>
    <Route path="/tests/toggler-tests" component={TogglerTests} />
    <Route path="/tests/toggler-tests/default" component={DefaultToggler} />
    <Route path="/tests/toggler-tests/animated" component={AnimatedToggler} />
    <Route path="/tests/toggler-tests/open" component={OpenToggler} />
  </div>
);

export default routes;
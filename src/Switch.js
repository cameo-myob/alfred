/* eslint-disable react/prop-types */
import React from 'react';
import { startsWithSegment } from 'router5-helpers';
import { withRoute } from 'react-router5';

function Switch(prop) {
  console.log(prop);
  const { route, modules, routeTo } = prop;
  const { name } = route;
  const testRoute = startsWithSegment(name);
  let Component = '';

  Object.keys(modules).forEach((key) => {
    if (testRoute(key)) {
      Component = modules[`${key}`].component;
    }
  });
  return <Component routeTo={routeTo} />;
}

export default withRoute(Switch);

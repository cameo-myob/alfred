/* eslint-disable react/prop-types */
import React from 'react';
import { startsWithSegment } from 'router5-helpers';
import { withRoute } from 'react-router5';

function Switch({
  route, modules, routeTo, router,
}) {
  const { name } = route;
  const testRoute = startsWithSegment(name);
  let Component = '';

  Object.keys(modules).forEach((key) => {
    if (testRoute(key)) {
      Component = modules[`${key}`].component;
    }
  });
  return <Component routeTo={routeTo} router={router} />;
}

export default withRoute(Switch);

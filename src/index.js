import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router5';

import initializeRouter from './initializeRouter';
import App from './App';
import Home from './components/Home';
import StartHere from './components/StartHere';
import About from './components/About';

async function main() {
  const routes = [
    {
      name: 'home', label: 'Home', component: Home, path: '/',
    },
    {
      name: 'start-here', label: 'StartHere', component: StartHere, path: '/start-here',
    },
    {
      name: 'about', label: 'About', component: About, path: '/about',
    },
  ];

  const modules = {};
  routes.forEach((route) => {
    modules[route.name] = {
      component: route.component,
      label: route.label,
      path: route.path,
    };
  });

  const router = initializeRouter(routes);

  const Main = (
    <RouterProvider router={router}>
      <App router={router} modules={modules} routes={routes} />
    </RouterProvider>
  );

  ReactDOM.render(Main, document.getElementById('root'));
}

main();

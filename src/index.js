import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router5';

import initializeRouter from './initializeRouter';
import AppBase from './App';
import Home from './components/Home';
import StartHere from './components/StartHere';
import About from './components/About';

async function main() {
  const routes = [
    {
      name: 'home', label: 'Home', component: Home, path: '/home',
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
  const App = (
    <RouterProvider router={router}>

      <AppBase
        router={router}
        modules={modules}
        routes={routes}
      />

    </RouterProvider>
  );
  // Do not render anything if inside an iFrame
  if (window === window.parent) {
    router.start(() => {
      ReactDOM.render(App, document.getElementById('root'));
    });
  }
}

main();

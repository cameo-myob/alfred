import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

export default function initializeRouter(routes) {
  const router = createRouter(routes, {
    defaultRoute: '/',
  });
  // Plugins
  router.usePlugin(
    browserPlugin(
      {
        useHash: true,
      },
    ),
  );
  return router;
}

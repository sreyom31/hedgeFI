import { Router } from 'express';
import accumulateRoute from './accumulate.route';
import claimRoute from './claim.route';
import investRoute from './invest.route';
import divestRoute from './divest.route';

const router = Router();

const defaultRoutes = [
  { path: '/accumulate', route: accumulateRoute },
  { path: '/claim', route: claimRoute },
  { path: '/invest', route: investRoute },
  { path: '/divest', route: divestRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

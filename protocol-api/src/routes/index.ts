import { Router } from 'express';
import userRoute from './user.route';
import protocolRoute from './protocol.route';
import liquidityRoute from './liquidity.route';

const router = Router();

const defaultRoutes = [
  { path: '/user', route: userRoute },
  { path: '/protocol', route: protocolRoute },
  { path: '/liquidity', route: liquidityRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

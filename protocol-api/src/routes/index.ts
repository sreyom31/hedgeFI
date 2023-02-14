import { Router } from 'express';
import userRoute from './user.route';
import protocolRoute from './protocol.route';

const router = Router();

const defaultRoutes = [
  { path: '/user', route: userRoute },
  { path: '/protocol', route: protocolRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

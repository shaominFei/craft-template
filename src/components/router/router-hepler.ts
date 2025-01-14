import { routerConfig } from '@/components/router/router-config';

export const getRouterByRole = () => {
  const router = Object.values(routerConfig).map((value) => value);
  return router;
};

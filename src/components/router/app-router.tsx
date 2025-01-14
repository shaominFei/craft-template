import { getRouterByRole } from '@/components/router/router-hepler';
import { Layout } from '@/components/ui/layouts/layout';
import { Route, Routes } from 'react-router';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {getRouterByRole().map((router) => {
          return <Route key={router.path} path={router.path} element={router.element}></Route>;
        })}
      </Route>
    </Routes>
  );
};

import { FC, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { StoreContext } from '../store/StoreContext';
import { ROUTES } from './RoutesConstants';

const PrivateRoutes: FC = () => {
  const context = useContext(StoreContext);
  const isAuth = context?.user !== null ? true : false;

  return <>{isAuth ? <Outlet /> : <Navigate to={`${ROUTES.HOME}`} />}</>;
};

export default PrivateRoutes;

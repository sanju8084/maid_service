import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // const { currentUser } = useSelector((state) => state.user);

  if (currentUser === undefined) {
    return null;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;

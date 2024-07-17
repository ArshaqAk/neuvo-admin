
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated:', isAuthenticated);

  return isAuthenticated ? <Element /> : <Navigate to="/" />;
};

export default PrivateRoute;
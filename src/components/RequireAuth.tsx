import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

interface RequireAuthProps {
  children: React.ReactElement;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;

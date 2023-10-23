import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const UserProtectedRoute = ({ children }) => {
  const { loading, isAuth } = useSelector((state) => state.user);
  if (loading === true) {
    if (isAuth === false) {
      return <Navigate to="/login" replace />;
    }
  }
  return children;
};

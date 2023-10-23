import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

export const ShopProtectedRoute = ({ children }) => {
  const { isLoading, isShop } = useSelector((state) => state.shop);

  if (isLoading === true) {
    return <Loader />;
  } else {
    if (isShop === false) {
      return <Navigate to={`/shop-login`} replace />;
    }
  }
  return children;
};

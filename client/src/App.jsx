import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  HomePage,
  SignupPage,
  ActivationPage,
  ProductsPage,
  TopWatched,
  EventsPage,
  FaqPage,
  ProductDetailPage,
  ProfilePage,
  CheckOutPage,
} from "./Routes/UserRoutes";
import {
  // ShopHomePage,
  ShopSignInPage,
  ShopSignUpPage,
  ShopPage,
  ShopActivationPage,
  DashboardPage,
  CreateProduct,
  ShopAllProductsPage,
  CreateEventPage,
  ShopGetAllEventPage,
} from "./Routes/ShopRoutes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Store from "./redux/store/Store";
import { loadUser } from "./redux/actions/User";
import { UserProtectedRoute } from "./Routes/UserProtectedRoute";

import { loadShop } from "./redux/actions/Shop";
import { ShopProtectedRoute } from "./Routes/ShopProtectedRoute";

function App() {
  // Load user on app start up if not logged in already and store is empty (first time) or the token has expired

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadShop());
  }, []);

  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route
            path="/shop/activation/:activation_token"
            element={<ShopActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailPage />} />
          <Route path="/best-selling" element={<TopWatched />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route
            path="/profile"
            element={
              <UserProtectedRoute>
                <ProfilePage />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <UserProtectedRoute>
                <CheckOutPage />
              </UserProtectedRoute>
            }
          />

          <Route path="/shop-login" element={<ShopSignInPage />} />
          <Route path="/shop-create" element={<ShopSignUpPage />} />
          <Route
            path="/shop/:shop_id"
            element={
              <ShopProtectedRoute>
                <ShopPage />
              </ShopProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ShopProtectedRoute>
                <DashboardPage />
              </ShopProtectedRoute>
            }
          />
          {/* Create Product Route */}
          <Route
            path="/dashboard-create-product"
            element={
              <ShopProtectedRoute>
                <CreateProduct />
              </ShopProtectedRoute>
            }
          />
          {/* Getting All Product Route */}
          <Route
            path="/dashboard-shop-all-products"
            element={
              <ShopProtectedRoute>
                <ShopAllProductsPage />
              </ShopProtectedRoute>
            }
          />
          <Route
            path="/dashboard-create-event"
            element={
              <ShopProtectedRoute>
                <CreateEventPage />
              </ShopProtectedRoute>
            }
          />
          <Route
            path="/dashboard-get-all-events"
            element={
              <ShopProtectedRoute>
                <ShopGetAllEventPage />
              </ShopProtectedRoute>
            }
          />
        </Routes>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </>
    </>
  );
}

export default App;

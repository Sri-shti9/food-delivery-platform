import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import CartPage from "./components/CartPage";
import Payment from "./Pages/Payment";
import Menu from "./components/Menu";
import AddFood from "./Admin/AddFood";

const PrivateRoute = ({ children, isAuth }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

const AppRoutes = ({ cartProps, isAuth, setIsAuth }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Auth setIsAuth={setIsAuth} />} />
      <Route
        path="/home"
        element={
          <PrivateRoute isAuth={isAuth}>
            <Home addToCart={cartProps.addToCart} />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute isAuth={isAuth}>
            <CartPage {...cartProps} />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoute isAuth={isAuth}>
            <Payment />
          </PrivateRoute>
        }
      />
      <Route
        path="/menus"
        element={
          <PrivateRoute isAuth={isAuth}>
            <Menu />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-food"
        element={
          <PrivateRoute isAuth={isAuth}>
            <AddFood/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
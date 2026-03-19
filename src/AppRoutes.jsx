import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import CartPage from "./components/CartPage";
import Payment from "./Pages/Payment";


const AppRoutes = ({ cartProps }) => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Auth />} />

      <Route path="/home" element={<Home addToCart={cartProps.addToCart} />} />

      <Route path="/cart" element={<CartPage {...cartProps} />} />

      <Route path="/payment" element={<Payment />} />

    </Routes>
  );
};

export default AppRoutes;
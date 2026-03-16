import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Chefs from "./components/Chefs";
import OrderSection from "./components/OrderSection";
import ReviewsPage from "./components/ReviewsPage";
import Menu from "./components/Menu";
import CartPage from "./components/CartPage";

// Pages
import LunchBox from "./Pages/LunchBox";
import About from "./Pages/About";
import Delivery from "./Pages/Delivery";
import Contacts from "./Pages/Contacts";
import Menus from "./Pages/Menus";
import Payment from "./Pages/Payment";
import Login from "./Pages/Login";
import Auth from "./Pages/Login";


// ✅ Home page
const Home = ({ addToCart }) => {
  return (
    <>
      <Hero />
      <Menu addToCart={addToCart} />
      <Chefs />
      <ReviewsPage />
      <OrderSection />
      <Footer />
    </>
  );
};

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist = cart.find(i => i.id === item.id);

    if (exist) {
      setCart(cart.map(i =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const increaseQty = (id) => {
    setCart(cart.map(i =>
      i.id === id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    ));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(i =>
          i.id === id
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    );
  };

  return (
    <Router>

      <Navbar cartCount={cart.length} />

      <Routes>

        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeItem={removeItem}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />

     
        <Route path="/payment" element={<Payment />} />

        <Route path="/lunchbox" element={<LunchBox />} />
        <Route path="/menus" element={<Menus addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Login" element={<Auth />} />  

      </Routes>

    </Router>
  );
};

export default App;
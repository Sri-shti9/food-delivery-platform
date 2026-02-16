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

// Pages
import LunchBox from "./Pages/LunchBox";
import About from "./Pages/About";
import Delivery from "./Pages/Delivery";
import Contacts from "./Pages/Contacts";
import Menus from "./Pages/Menus";


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

  // ✅ Cart state
  const [cart, setCart] = useState([]);

  // ✅ Add to cart function
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>

      {/* Navbar gets cart count */}
      <Navbar cartCount={cart.length} />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        {/* Other pages */}
        <Route path="/lunchbox" element={<LunchBox />} />
        <Route
          path="/menus"
          element={<Menus addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>

    </Router>
  );
};

export default App;

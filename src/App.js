import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import AppRoutes from "./AppRoutes";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isAuth, setIsAuth] = useState(false); 

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

  return (
    <Router>
      {isAuth && <Navbar cartCount={cart.length} />}

      <AppRoutes
        cartProps={{
          cart,
          addToCart,
          setCart
        }}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
    </Router>
  );
};

export default App;
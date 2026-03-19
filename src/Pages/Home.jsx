import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Chefs from "../components/Chefs";
import ReviewsPage from "../components/ReviewsPage";
import OrderSection from "../components/OrderSection";
import Footer from "../components/Footer";

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

export default Home;
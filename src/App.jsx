import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner.jsx";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <Banner />
      <ProductList
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={isInCart}
      />
      <Footer />
    </div>
  );
};
export default App;

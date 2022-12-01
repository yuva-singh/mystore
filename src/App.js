import React from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Product from "./Components/Pages/Product/Products";
import Contact from "./Components/Pages/Contact/Contact";
import SingleProduct from "./Components/Pages/Product/SingleProduct";
import Cart from "./Components/Pages/Cart/Cart";
import NotFound from "./Components/Pages/Error/NotFound";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}
export default App;

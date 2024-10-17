import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import CartList from "./pages/cartList";

function App() {


  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductList/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartList/>} />
      </Routes>
    </>
  );
}

export default App

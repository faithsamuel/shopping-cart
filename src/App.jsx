import { Route, Routes, Navigate } from "react-router-dom";
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import CartList from "./pages/cartList";

function App() {


  return (
    <>
         <Routes>
        {/* Redirect from "/" to "/products" */}
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </>
  );
}

export default App


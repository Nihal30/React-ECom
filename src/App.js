import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import ProductDetail from "./features/product-list/components/ProductDetail";
import ProductList from "./features/product-list/components/ProductList";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOut  />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage  />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

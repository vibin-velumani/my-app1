import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter.jsx";
import Product from "./components/Products.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/counter" element={<Counter />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

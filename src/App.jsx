import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <h1>Inventory Tracking System</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;

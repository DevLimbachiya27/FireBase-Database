import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

import { TextField, Button, Box, Typography } from "@mui/material";

function ProductForm() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({ name: "", category: "", price: "", stock: "" });
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "20px auto" }}>
      <Typography variant="h5" gutterBottom>
        Add Product
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Stock"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          margin="normal"
        />

        <Button variant="contained" type="submit" fullWidth>
          Add Product
        </Button>
      </form>
    </Box>
  );
}

export default ProductForm;

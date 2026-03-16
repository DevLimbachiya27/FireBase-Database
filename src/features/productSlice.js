import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase";
import { ref, push, onValue, update, remove } from "firebase/database";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { dispatch }) => {
    const productsRef = ref(db, "products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.keys(data).map((id) => ({
        id,
        ...data[id]
      }));
      dispatch(setProducts(list));
    });
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const productsRef = ref(db, "products");
    await push(productsRef, product);
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, product }) => {
    const productRef = ref(db, `products/${id}`);
    await update(productRef, product);
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const productRef = ref(db, `products/${id}`);
    await remove(productRef);
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, actions) {
      const newProducts = actions.payload;

      const newProductsIndex = state.products.find(
        (item) => item.id === newProducts.id
      );

      if (newProductsIndex) {
        newProducts.quantity++;
        newProducts.totalPrice += newProducts.Price;
      } else {
        state.products.push({
          id: newProducts.id,
          name: newProducts.Name,
          price: newProducts.Price,
          quantity: 1,
          imgURL: newProducts.imgURL,
          totalPrice: newProducts.Price,
          starRatings: newProducts.starRatings,
        });
      }

      state.totalPrice += newProducts.Price;
      state.totalQuantity++;
    },

    deleteToCart(state, actions) {
      const deleteProduct = actions.payload;

      const itemIndex = state.products.find(
        (data) => data.id === deleteProduct.id
      );

      if (itemIndex) {
        state.totalQuantity -= itemIndex.quantity;
        state.totalPrice -= itemIndex.price;
        state.products = state.products.filter(
          (data) => data.id !== deleteProduct.id
        );
      }
    },

    addQuantityFromCart(state, actions) {
      const data = actions.payload;
      const findItem = state.products.find((item) => item.id === data.id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice = (findItem.quantity * findItem.price).toFixed(2);
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },

    DecreaseQuantityFromCart(state, actions) {
      const data = actions.payload;
      const findItem = state.products.find((item) => item.id === data.id);
      if (findItem) {
        findItem.quantity--;
        findItem.totalPrice = (findItem.quantity * findItem.price).toFixed(2);
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      }
    },

    emptyCart(state, actions) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  deleteToCart,
  addQuantityFromCart,
  DecreaseQuantityFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;

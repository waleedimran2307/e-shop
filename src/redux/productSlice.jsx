import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchData: "",
  filteredData: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, actions) {

      state.products = actions.payload;
    },

    setFilterData(state, actions) {
      state.searchData = actions.payload;

      state.filteredData = state.products.filter((item) =>
        item.Name.toLowerCase().includes(state.searchData.toLowerCase())
      );
    },

    setStarRatingsProduct(state, actions) {
      const newdata = actions.payload;
      state.products = state.products.map((product) =>
        product.id === newdata.id ? { ...product, ...newdata } : product
      );
    },
  },
});

export const { setProducts, setFilterData, setStarRatingsProduct } =
  productSlice.actions;

export default productSlice.reducer;

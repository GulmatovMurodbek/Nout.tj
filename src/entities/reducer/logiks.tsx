"use client";
import { createSlice } from "@reduxjs/toolkit";
import { getBrendByID, getCategory, getProductById, getProducts } from "../api/api";

const initialState = {
  brend: [],
  products:[],
  info:[],
  brendById:[],
  loading: false,
};

export const logiks = createSlice({
  name: "nout.tj",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.brend = action.payload;
    });
    builder.addCase(getCategory.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getProducts.pending,(state)=>
    {
     state.loading=true
    })
    builder.addCase(getProducts.fulfilled,(state,action)=>
    {
      state.loading=false
      state.products=action.payload
    })
    builder.addCase(getProducts.rejected,(state)=>
    {
      state.loading=false
    })
    builder.addCase(getProductById.pending,(state)=>
    {
    state.loading=true
    })
    builder.addCase(getProductById.fulfilled,(state,action)=>
    {
      state.info=action.payload
      state.loading=false
    })
    builder.addCase(getProductById.rejected,(state)=>
    {
      state.loading=false
    })
    builder.addCase(getBrendByID.pending,(state)=>
    {
     state.loading=true
    } )
    builder.addCase(getBrendByID.fulfilled,(state,action)=>
    {
    state.brendById=action.payload
    state.loading=false
    })
    builder.addCase(getBrendByID.rejected,(state)=>
    {
      state.loading=false
    })
  },
});
export default logiks.reducer;
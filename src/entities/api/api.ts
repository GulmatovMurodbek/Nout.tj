import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let api="http://localhost:3001"
export const getCategory = createAsyncThunk("get/getCategory", async () => {
    const { data } = await axios.get(`${api}/Brend`);
    return data;
 });

 export const getProducts=createAsyncThunk("get/getProduct",async()=>
{
    const {data}=await axios.get(`${api}/products`)
    return data
})
export const getProductById=createAsyncThunk("get/getProductById",async(id:string)=>
{
    const {data}=await axios.get(`${api}/product/${id}`)
    return data
})
export const getBrendByID=createAsyncThunk("get/getBrendByID",async(id:string)=>
{
    const {data}=await axios.get(`${api}/brend/${id}`)
    return data
})
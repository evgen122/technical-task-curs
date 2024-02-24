import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65d7503d27d9a3bc1d7ab788.mockapi.io/Advert";

export const fetchCar = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchCar = (async) => {
//   const response = axios.get("/");
//   return response.data;
// };

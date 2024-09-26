// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../components/Navbar/NavbarSlice"; // Import the counter slice

const store = configureStore({
  reducer: {
    appSection: navbarReducer, // Add the counter slice reducer
  },
});

export default store;

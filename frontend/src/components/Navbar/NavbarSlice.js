// src/features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const NavbarSlice = createSlice({
  name: "appSection",
  initialState: { value: "home" }, // Initial state of the app
  reducers: {
    home: (state) => {
      state.value = "home"; // Safely mutate the state
    },
    search: (state) => {
      state.value = "search"; // Safely mutate the state
    },
    discover: (state) => {
      state.value = "discover"; // Safely mutate the state
    },
    reels: (state) => {
      state.value = "reels"; // Safely mutate the state
    },
    messages: (state) => {
      state.value = "messages"; // Safely mutate the state
    },
    notifications: (state) => {
      state.value = "notifications"; // Safely mutate the state
    },
    create: (state) => {
      state.value = "create"; // Safely mutate the state
    },
    profile: (state) => {
      state.value = "profile"; // Safely mutate the state
    },
    more: (state) => {
      state.value = "more"; // Safely mutate the state
    },
  },
});

export const {
  home,
  search,
  discover,
  reels,
  messages,
  notifications,
  create,
  profile,
  more,
} = NavbarSlice.actions;

export default NavbarSlice.reducer;

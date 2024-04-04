import { create } from "zustand";
import { createUserSlice } from "./slice/userSlice";

export const useBoundStore = create((...a) => ({
  ...createUserSlice(...a)
}));


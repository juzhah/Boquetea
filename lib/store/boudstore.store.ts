import { create } from "zustand";
import { createSearchSlice } from "./search/search.store";

export const useBoundStore = create((...a) => ({
  ...createSearchSlice(...a),
}));

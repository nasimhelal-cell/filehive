// store.ts
import { action, Action, createStore } from "easy-peasy";

export interface StoreModel {
  gridView: string;
  updateGridView: Action<StoreModel, string>;
}

export const store = createStore<StoreModel>({
  gridView: "grid",
  updateGridView: action((state, payload) => {
    state.gridView = payload;
  }),
});

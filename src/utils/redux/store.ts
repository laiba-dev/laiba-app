import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MenuReducer from "./reducers/MenuReducer";

export const AppStore = configureStore({
  reducer: combineReducers({
    menu: MenuReducer,
  }),
  preloadedState: {},
  devTools: true,
});

export type AppState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = ReturnType<typeof AppStore.dispatch>;

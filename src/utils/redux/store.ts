import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducers, { authInitialState } from "./reducers/AuthReducer";
import MenuReducer, { menuInitialState } from "./reducers/MenuReducer";

export const AppStore = configureStore({
  reducer: combineReducers({
    menu: MenuReducer,
    auth: AuthReducers,
  }),
  preloadedState: {
    auth: authInitialState,
    menu: menuInitialState,
  },
  devTools: true,
});

export type AppState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = ReturnType<typeof AppStore.dispatch>;

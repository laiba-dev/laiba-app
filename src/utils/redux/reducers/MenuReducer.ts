import { PayloadAction } from "@reduxjs/toolkit";
import { MENU_SET_SELECTED } from "../constants/MenuConstants";

export type MenuState = {
  selectedMenu: string;
};

const initialState: MenuState = {
  selectedMenu: "Dashboard",
};

const MenuReducer = (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case MENU_SET_SELECTED:
      const newSelectedMenu: MenuState = {
        ...state,
        selectedMenu: action.payload,
      };
      return newSelectedMenu;
    default:
      return state;
  }
};

export default MenuReducer;

import { Dispatch } from "@reduxjs/toolkit";
import { MENU_SET_SELECTED } from "../constants/MenuConstants";

export const setSelectedAction = (selectedMenu: string) => {
  return {
    type: MENU_SET_SELECTED,
    payload: selectedMenu,
  };
};

export const setSelectedMenu = (selectedMenu: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setSelectedAction(selectedMenu));
  };
};

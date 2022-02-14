import React from "react";
import { Text } from "../Typography";
import DropdownItem from "./DropdownItem";
import { color } from "../Color";
import DropdownContent from "../DropdownContent";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../utils/redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { AppState } from "../../utils/redux/store";

export default function Header({ setCollapsed }: { setCollapsed: () => void }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: AppState) => state.auth);

  function logout() {
    dispatch(logoutAction());
    navigate("/login");
  }

  return (
    <div className="header">
      <div style={{ cursor: "pointer", paddingTop: "4px" }}>
        {setCollapsed && (
          <img
            src="/images/ci_hamburger.png"
            alt="Sidebar Toggle"
            width="24px"
            height="24px"
            onClick={setCollapsed}
          />
        )}
      </div>
      {auth.user.nama ? (
        <div className="dropdown">
          <div style={{ padding: "20px", cursor: "pointer" }}>
            <Text color={color.text}>{"Hai, " + auth.user.nama}</Text>
          </div>
          <DropdownContent>
            <DropdownItem text={"Logout"} action={logout} />
          </DropdownContent>
        </div>
      ) : (
        <div style={{ padding: "20px", cursor: "pointer" }}>
          <Text color={color.text}>Login</Text>
        </div>
      )}
    </div>
  );
}

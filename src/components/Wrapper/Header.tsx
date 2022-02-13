import React from "react";
import { Text } from "../Typography";
import DropdownItem from "./DropdownItem";
import { color } from "../Color";
import DropdownContent from "../DropdownContent";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../utils/redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";

export default function Header({
  setCollapsed,
  name,
}: {
  setCollapsed: () => void;
  name: string;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      {name ? (
        <div className="dropdown">
          <div style={{ padding: "20px", cursor: "pointer" }}>
            <Text color={color.text}>{"Hai, " + name}</Text>
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

import React from "react";
import { Text } from "../Typography";
import { color } from "../Color";

export default function SidebarItem({ icon, text, active, onSelected }: {icon: string, text: string, active: boolean, onSelected: () => void}) {
  return (
    <div
      className="sidebar-item"
      style={{
        background: active ? color.secondary : undefined,
      }}
      onClick={onSelected}
    >
      <div style={{ height: "24px" }}>
        <img src={icon} alt="Sidebar Item Icon" />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Text color="white">{text}</Text>
      </div>
    </div>
  );
}

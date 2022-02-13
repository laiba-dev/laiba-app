import React from "react";
import { Text } from "../Typography";

export default function DropdownItem({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <div className="header-dropdown-item" onClick={action}>
      <Text>{text}</Text>
    </div>
  );
}

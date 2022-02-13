import React from "react";

export default function DropdownContent({
  children,
}: {
  children: JSX.Element;
}) {
  return <div className="dropdown-content">{children}</div>;
}

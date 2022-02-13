import React from "react";
import { shadow } from "./Color";

export default function Card({ children }: { children: JSX.Element  }) {
  return (
    <div
      style={{
        width: "inherit",
        height: "inherit",
        padding: "20px",
        borderRadius: "4px",
        background: "white",
        boxShadow: shadow,
      }}
    >
      {children}
    </div>
  );
}

import React from "react";
import { Text } from "../Typography";

export default function LoadingScreen() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Loading...</Text>
    </div>
  );
}

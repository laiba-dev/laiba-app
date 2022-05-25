import React from "react";
import Button from "../../components/Button";
import { Heading1, Text } from "../../components/Typography";
import { color } from "../../components/Color";

export default function SignIn() {
  function signInWithGithub() {
    window.location.href = `${process.env.REACT_APP_API_URL}/api/authorize/github`;
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color.primary,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Heading1 color="white">LAIBA</Heading1>
      <Text color="white">Learning Application in Balanced Assessment</Text>
      <Button text="Login Dengan Github" onClick={signInWithGithub} />
    </div>
  );
}

import React from "react";
import Button from "../../components/Button";
import { Heading1, Text } from "../../components/Typography";
import { color } from "../../components/Color";
import { randomString } from "../../utils/RandomHelper";

export default function SignIn() {
  function signInWithGithub() {
    const state = randomString(30);

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_REDIRECT_URI}&scope=${process.env.REACT_APP_GITHUB_SCOPE}&state=${state}&allow_signup=true`;
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

import React, { useState } from "react";
import Router from "./router";
import styled from "styled-components";

const InputField = styled.input``;
const Button = styled.button``;

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [ID, setID] = useState("");
  const [PW, setPassword] = useState("");
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const handleLogin = () => {
    const validID = "user";
    const validPW = "qwer1234@";

    if (ID === validID && PW === validPW) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Login failed.Try Again.");
    }
  };

  if (isLoggedIn) {
    return <Router />;
  }

  return (
    <>
      <InputField
        type="text"
        placeholder="ID"
        value={ID}
        onChange={(e) => setID(e.target.value)}
      />
      <InputField
        type={show ? "text" : "password"}
        placeholder="Password"
        value={PW}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleLogin}>로그인</Button>
    </>
  );
}
export default Login;

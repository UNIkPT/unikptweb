import React, { useState } from "react";
import Router from "./router";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import styled from "styled-components";
import {
  Flex,
  Box,
  Input,
  Button,
  Text,
  Center,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Iconbox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 20px;
`;
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
    <Box display="flex" flexDirection={"column"} alignItems="center">
      <>
        <Text
          color="black"
          fontWeight="bold"
          letterSpacing="wide"
          fontSize="4xl"
          my="5">
          로그인
        </Text>
        <Box
          color="gray.500"
          fontWeight="semibold"
          fontSize="xs"
          textTransform="uppercase"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          mx="20"
          pt="10"
          pb="5"
          borderY="1px"
          gap={4}
          borderColor={"gray.200"}>
          <Box>
            <Input
              variant="Filled"
              bg="gray.200"
              mb="3"
              type="text"
              placeholder="ID"
              value={ID}
              onChange={(e) => setID(e.target.value)}
            />
            <Input
              bg="gray.200"
              variant="Filled"
              placeholder="password"
              type={show ? "text" : "password"}
              value={PW}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button px="20" onClick={handleLogin}>
            로그인
          </Button>
          <Text>회원가입</Text>
          <Text>아이디/비밀번호 찾기</Text>
        </Box>
        <Box color="gray.500" fontWeight="semibold" fontSize="xs">
          <Text my="5">SNS 계정으로 로그인</Text>
          <Iconbox>
            <AiFillGoogleCircle size="40">google</AiFillGoogleCircle>
            <RiKakaoTalkFill size="40">kakao</RiKakaoTalkFill>
          </Iconbox>
        </Box>
      </>
    </Box>
  );
}
export default Login;

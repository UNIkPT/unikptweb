import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Textprompt = () => {
  const [inputValue, setInputValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue) {
      // Add the input value to the message list
      setMessageList([inputValue, ...messageList]);
      setInputValue(""); // Clear the input field after submitting
    }
  };

  return (
    <Box>
      {/* Buttons */}
      <Box
        bg="#ECECF1"
        mt="40px"
        ml="32px"
        mb="30px"
        width={"446px"}
        height={"83px"}
        borderRadius={"20px"}
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Flex>
          <Button
            m="10px"
            mt="auto"
            mb="auto"
            borderRadius="15px"
            width="200px"
            height="60px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#B095FF"
            bg="white"
            fontWeight="bold"
            _hover={{
              color: "#B095FF",
              bg: "white",
              fontWeight: "bold",
            }}
            _active={{
              color: "#B095FF",
              bg: "white",
              fontWeight: "bold",
            }}>
            Text
          </Button>
          <Spacer />
          <Button
            m="10px"
            mt="auto"
            mb="auto"
            borderRadius="15px"
            width="200px"
            height="60px"
            bg="#ECECF1" // Change the background color
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{
              color: "#B095FF",
              bg: "white",
              fontWeight: "bold",
            }}
            _active={{
              color: "#B095FF",
              bg: "white",
              fontWeight: "bold",
            }}>
            Image
          </Button>
        </Flex>
      </Box>

      {/* Message List */}
      <Box
        mt="auto"
        mr="10px" // Push messages to the right
        ml="32px"
        height="860px"
        overflowY="auto"
        display="flex"
        flexDirection="column-reverse" // Reverse the order
        alignItems="flex-end" // Align items to the right
      >
        {messageList.map((message, index) => (
          <Box
            key={index}
            mb="20px"
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Box
              bg="#F2EFFF"
              borderRadius={"20px"}
              padding="10px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                maxWidth: "1000px", // Set max width to 1000px
                width: "auto", // Allow it to expand based on content
              }}>
              <p>{message}</p>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Input Box */}
      <Box
        mt="20px"
        ml="32px"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <InputGroup>
          <Input
            focusBorderColor="#DFD1DE"
            borderRadius={"50px"}
            width="100%"
            height="84px"
            bg="white"
            placeholder="메시지를 입력하세요"
            value={inputValue}
            onChange={handleInputChange}
          />
          <InputRightElement>
            <Button
              mr="40px"
              mt="40px"
              bg="white"
              color="#B095FF"
              fontWeight={"semibold"}
              onClick={handleSubmit}
              size="lg"
              _hover={{
                bg: "white",
                color: "#A083D5",
              }}>
              전송
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Textprompt;

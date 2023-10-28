import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import {
  Progress,
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  useDisclosure,
  Text,
  Drawer,
  DrawerContent,
  Image,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import logo from "./imgs/unikpt.png";
import uni from "./imgs/lv1.png";
import chart from "./imgs/chart.png";
import Textprompt from "./pages/Textprompt";

// Sidebar의 링크 항목 배열
const LinkItems = [
  { name: "community", icon: FiHome },
  { name: "Settings", icon: FiSettings },
];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" bg="#fcfcfc">
        <Textprompt />
      </Box>
    </Box>
  );
}

// Sidebar의 링크 항목을 렌더링하는 컴포넌트
function SidebarContent({ onClose, ...rest }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "270px" }}
      pos="fixed"
      h="full"
      overflowY="auto" // 스크롤 추가
      {...rest}>
      <Box bg={useColorModeValue("#BEADFA")} borderRight="0px" h="144px">
        <Flex h="30" alignItems="center" mx="" justifyContent="space-between">
          <Image width="146px" src={logo} alt="logo" ml="12px" mt="6px" />
          <CloseButton
            color="white"
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Text
          color="white"
          fontWeight={"bold"}
          fontSize={"20px"}
          mt="33px"
          ml="12px">
          :Unlock Your Creativity
        </Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image width="126px" src={uni} mx="70px" mt="70px" mb="10px"></Image>
      </Box>
      <Box pl="12px" borderBottom="1px solid #DBDBDB">
        <Badge
          variant="subtle"
          colorScheme="yellow"
          borderRadius={"10px"}
          px="10px">
          Lv.1
        </Badge>
        <Text
          mt="10px"
          mb="14px"
          fontSize="32px"
          color="#8B8177"
          fontWeight={"600"}>
          User Id
        </Text>
      </Box>
      <Box fontSize={"13px"} fontWeight={"600"} mt="17px" mx="12px">
        <Flex>
          <Text>진도율</Text>
          <Spacer />
          <Text color="red">D-7</Text>
        </Flex>
        <Progress
          mt="21px"
          value={20}
          colorScheme="purple"
          borderRadius={"10px"}
        />
        <Text mt="30px">평균점수</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image width="146px" src={chart} ml="12px" mt="40px" mb="60px" />
        </Box>
      </Box>
      <Box>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
}

// Sidebar의 링크 항목을 렌더링하는 컴포넌트
function NavItem({ icon, children, ...rest }) {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#BEADFA",
          color: "white",
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
}

// 모바일 네비게이션을 렌더링하는 컴포넌트
function MobileNav({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
}
const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

// AppBar.js
import React from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";

export const AppBar = () => {
  return (
    <Box bg={"primary.main"} w="100%" p={4} color="white">
      <Flex gap={2} alignItems="center">
        <Text fontSize="2xl" ml="20%" fontWeight={"bold"}>
          Analytics
        </Text>
        <Spacer />
        <InputGroup w="20%">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="primary.main" />
          </InputLeftElement>
          <Input placeholder="Search..." />
        </InputGroup>
        <Button color={"primary.main"} variant="outline">
          Login
        </Button>
        <IconButton variant="text" color="white">
          <BellIcon fontSize="24px" />
        </IconButton>
      </Flex>
    </Box>
  );
};

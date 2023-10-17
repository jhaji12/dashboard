// Sidebar.js
import React from "react";
import { Box, Link, Stack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      bg="gray.700"
      w="200px"
      color="white"
      h="100vh"
      p={4}
      display="flex"
      flexDirection="column"
    >
      <Stack spacing={4}>
        <Link>Dashboard</Link>
        <Link>Analytics</Link>
        <Link>Reports</Link>
        <Link>Settings</Link>
      </Stack>
    </Box>
  );
};

export default Sidebar;

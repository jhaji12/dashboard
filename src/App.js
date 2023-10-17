import { Box, Flex } from "@chakra-ui/react";
import Dashboard from "./Views/Dashboard";
import { AppBar } from "./Containers/AppBar";
import SideBar from "./Containers/SideBar";

const App = () => {
  return (
    <Box minH="100vh">
      <AppBar />
      <Flex>
        <SideBar />
        <Flex flexGrow={1}>
          <Dashboard />
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;

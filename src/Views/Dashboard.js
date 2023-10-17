// Dashboard.js
import React from "react";
import {
  Avatar,
  Flex,
  Text,
  Spacer,
  Stack,
  SimpleGrid,
  Box,
  Progress,
  Table,
  Td,
  Tr,
  Thead,
  Th,
  Tbody,
  UnorderedList,
  ListItem,
  Button,
  useTheme,
  IconButton,
} from "@chakra-ui/react";
import { AppBar } from "../Containers/AppBar";
import { Card } from "../Components/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
} from "recharts";
import SideBar from "../Containers/SideBar";

const data = [
  {
    title: "Card 1",
    information: "+220%",
    avatarSrc: "https://bit.ly/dan-abramov",
  },
  {
    title: "Card 2",
    information: "+180%",
    avatarSrc: "https://bit.ly/code-beast",
  },
  {
    title: "Card 3",
    information: "+150%",
    avatarSrc: "https://bit.ly/sage-adebayo",
  },
  {
    title: "Card 4",
    information: "+200%",
    avatarSrc: "https://bit.ly/prosper-baba",
  },
];

const graphData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
];

const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box>
      <SimpleGrid
        w="100%"
        templateColumns="repeat(4, 1fr)"
        p={4}
        gap={4}
        bgColor={"primary.main"}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            minW={200}
            p={3}
            mb={14}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack spacing={1}>
              <Text fontWeight="bold" fontSize="md" color="blue.500">
                {item.title}
              </Text>
              <Text fontSize="lg" color={"success.main"}>
                {item.information}
              </Text>
            </Stack>
            <Avatar size="md" name="User" src={item.avatarSrc} />
          </Card>
        ))}
      </SimpleGrid>

      <Flex mt={-16} w="100%" h="100%" gap={4} p={4} flexDir="column">
        <Flex gap={4} w="100%" h="100%">
          <Card w="60%" h={400} p={5}>
            <Text textAlign="center" fontSize="xl" fontWeight="bold" mb={4}>
              Traffic Channel
            </Text>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  align="left"
                  wrapperStyle={{
                    marginBottom: "16px",
                    left: 6,
                    top: -5,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke={theme.colors.primary.main}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke={theme.colors.success.main}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card w="40%" h={400} p={5}>
            <Text textAlign="center" fontSize="xl" fontWeight="bold" mb={4}>
              Distribution
            </Text>
            <Flex w="100%">
              <Flex
                w="75%"
                direction="column"
                justify="center"
                align="center"
                mr={6}
              >
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={50}
                      fill="#8884d8"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Flex>
              <Flex direction="column" justify="center">
                <Text fontSize="lg" fontWeight={"bold"} textAlign="left" mb={2}>
                  Key Points:
                </Text>
                <UnorderedList>
                  <ListItem>
                    <b>Point 1:</b> Some information about point 1.
                  </ListItem>
                  <ListItem>
                    <b>Point 2:</b> Some information about point 2.
                  </ListItem>
                </UnorderedList>
                <Button mt={12}>See all</Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>
        <Flex h="100%" w="100%" gap={4}>
          <Card h={210} w="40%">
            <Text textAlign="center" fontSize="xl" fontWeight="bold" my={4}>
              Social Media Data
            </Text>
            <Box mt={4} w="100%" px={4}>
              <Text fontSize="lg" mb={2}>
                Facebook
              </Text>
              <Progress w="100%" value={80} mb={4} colorScheme={"blue"} />
              <Text fontSize="lg" mb={2}>
                Twitter
              </Text>
              <Progress w="100%" value={50} colorScheme={"blue"} />
            </Box>
          </Card>
          <Card w="60%" h={210}>
            <Text textAlign="center" fontSize="xl" fontWeight="bold" my={4}>
              Tabular Data
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Platform</Th>
                  <Th>Sessions</Th>
                  <Th>Users</Th>
                  <Th>Conversion</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Facebook</Td>
                  <Td>2000</Td>
                  <Td>1500</Td>
                  <Td>75%</Td>
                </Tr>
                <Tr>
                  <Td>Twitter</Td>
                  <Td>1500</Td>
                  <Td>1000</Td>
                  <Td>66.67%</Td>
                </Tr>
                {/* Add more rows as needed */}
              </Tbody>
            </Table>
          </Card>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Dashboard;

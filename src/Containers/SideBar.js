import { Box, Button, VStack, Spacer } from "@chakra-ui/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const useStyles = () => ({
  button: {
    padding: "22px 11px",
    margin: "2px 17px",
    width: "calc(250px - 34px)",
    textAlign: "left",
    justifyContent: "left",
    borderRadius: "8px",
  },
  icon: {
    height: 24,
    width: 24,
  },
});

const SideBar = (props) => {
  const styles = useStyles();

  const menu = [
    {
      icon: <HomeOutlinedIcon style={styles.icon} />,
      text: "Home",
      link: "/home",
      spacing: 2,
    },
    {
      icon: <BuildOutlinedIcon style={styles.icon} />,
      text: "Development",
      link: "/development",
      spacing: 2,
    },
    {
      icon: <AutoGraphOutlinedIcon style={styles.icon} />,
      text: "Analytics Tools",
      link: "/analytics-tools",
      spacing: 2,
    },
    {
      icon: <HandshakeOutlinedIcon style={styles.icon} />,
      text: "Partnerships",
      link: "/partnerships",
      spacing: 2,
    },
    {
      icon: <DataSaverOffOutlinedIcon style={styles.icon} />,
      text: "Data",
      link: "/data",
      spacing: 2,
    },
    {
      icon: <AutoStoriesOutlinedIcon style={styles.icon} />,
      text: "Forum & Learnings",
      link: "/forum-Learnings",
      spacing: 2,
    },
    {
      icon: <HelpOutlineOutlinedIcon style={styles.icon} />,
      text: "Support",
      link: "/support",
      spacing: 2,
    },
  ];

  return (
    <VStack
      bg="white"
      w="230px"
      h="calc(100vh - 80px)"
      bgColor={"white"}
      borderRadius="0 10px 0 0"
      mt={-12}
      zIndex={100}
    >
      <Box pt={4} w="100%" borderRadius={10}>
        {menu.map((tab, i) => (
          <Box key={i} w="100%">
            <Button
              variant={
                "/" + window.location.pathname.split("/")[2] === tab.link
                  ? "menuSolid"
                  : "menu"
              }
              sx={styles.button}
              display="flex"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                color={
                  "/" + window.location.pathname.split("/")[2] === tab.link
                    ? "#ffffff"
                    : "#616161"
                }
              >
                {tab.icon}
              </Box>
              <Box ml={tab.spacing}>{tab.text}</Box>
            </Button>
          </Box>
        ))}
      </Box>
    </VStack>
  );
};

export default SideBar;

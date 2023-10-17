import { Box, useTheme } from "@chakra-ui/react";

const useStyles = (theme) => ({
  outlined: {
    border: `1px solid ${theme.colors.primary.lighter}`,
    boxShadow: `${theme.shadow.shadow1}`,
  },
  naked: {
    border: "none",
    boxShadow: "none",
  },
  filled: {
    border: "none",
    boxShadow: `${theme.shadow.shadow1}`,
  },
  mde: {
    boxShadow: `${theme.shadow.shadow12}`,
  },
});

export const Card = ({ variant = "outlined", children, ...props }) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const cardStyles = { ...(styles[variant] || {}) };

  return (
    <Box style={cardStyles} borderRadius="12px" bg="white" {...props}>
      {children}
    </Box>
  );
};

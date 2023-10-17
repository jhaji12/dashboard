import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = (props) => {
  return (
    <ChakraButton variant="primary" size="md" {...props}>
      {props.children}
    </ChakraButton>
  );
};

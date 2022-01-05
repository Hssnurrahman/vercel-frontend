import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

interface ButtonProps {
  text?: string;
  width?: string | undefined;
  onClick?: () => Promise<void> | void | undefined;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, onClick, width }) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      bgColor={colorMode === "light" ? "white" : "white"}
      _hover={{
        bgColor: colorMode === "light" ? "gray.600" : "gray.700",
        border: "1px gray solid",
        color: colorMode === "light" ? "white" : "white",
      }}
      border={colorMode === "light" ? "1px gray solid" : "1px white solid"}
      colorScheme="blackAlpha"
      color={colorMode === "light" ? "gray" : "black"}
      _focus={{ focus: "none" }}
      onClick={onClick}
      w={width}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;

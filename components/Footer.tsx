import {
  Container,
  Divider,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <HStack>
        {colorMode === "light" && (
          <Image src="/vercel.svg" alt="Logo" boxSize="100px" />
        )}
        {colorMode === "dark" && (
          <Image src="/images/vercel-light.svg" alt="Logo" boxSize="100px" />
        )}
        <Spacer />
        <Text>Copyright &copy; 2021 Vercel Inc. All rights reserved</Text>
        <Spacer />
        <Icon
          as={FaGithub}
          color={colorMode === "light" ? "gray.400" : "gray.200"}
          cursor={"pointer"}
          _hover={{ color: colorMode === "light" ? "black" : "gray.300" }}
        />
        <Divider orientation="vertical" h={5} />
        <Icon
          as={FaTwitter}
          color={colorMode === "light" ? "gray.400" : "gray.200"}
          cursor={"pointer"}
          _hover={{ color: colorMode === "light" ? "black" : "gray.300" }}
        />
      </HStack>
    </Container>
  );
};

export default Footer;

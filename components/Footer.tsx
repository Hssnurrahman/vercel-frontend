import {
  Container,
  Divider,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <HStack>
        <Image src="/vercel.svg" alt="Logo" boxSize="100px" />
        <Spacer />
        <Text>Copyright &copy; 2021 Vercel Inc. All rights reserved</Text>
        <Spacer />
        <Icon
          as={FaGithub}
          color="gray.400"
          cursor="pointer"
          _hover={{ color: "black" }}
        />
        <Divider orientation="vertical" h={5} />
        <Icon
          as={FaTwitter}
          color="blue.400"
          cursor="pointer"
          _hover={{ color: "black" }}
        />
      </HStack>
    </Container>
  );
};

export default Footer;

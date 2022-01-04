import {
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
  const { colorMode } = useColorMode();

  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      {!isSmallerThan480 && (
        <HStack>
          {colorMode === "light" && (
            <Image src="/vercel.svg" alt="Logo" boxSize="100px" />
          )}
          {colorMode === "dark" && (
            <Image src="/images/vercel-light.svg" alt="Logo" boxSize="100px" />
          )}
          <Spacer />
          <Text>Copyright &copy; 2022 Vercel Inc. All rights reserved</Text>
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
      )}
      {isSmallerThan480 && (
        <Flex d={"flex"} flexDirection={"column"} alignItems={"center"}>
          <HStack>
            {colorMode === "light" && (
              <Image src="/vercel.svg" alt="Logo" boxSize="100px" />
            )}
            {colorMode === "dark" && (
              <Image
                src="/images/vercel-light.svg"
                alt="Logo"
                boxSize="100px"
              />
            )}
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
          <Text fontSize={{ sm: "sm" }} mb={2}>
            Copyright &copy; 2022 Vercel Inc. All rights reserved
          </Text>
        </Flex>
      )}
    </Container>
  );
};

export default Footer;

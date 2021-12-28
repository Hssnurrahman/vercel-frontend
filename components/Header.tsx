import {
  Avatar,
  Badge,
  Container,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  Tooltip,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack w="100%" alignItems="stretch" m={3} borderColor="gray.300">
        <HStack spacing={3}>
          {colorMode === "light" && (
            <Image src="/vercel.svg" alt="Vercel" boxSize="100px" />
          )}
          {colorMode === "dark" && (
            <Image
              src="/images/vercel-light.svg"
              alt="Vercel"
              boxSize="100px"
            />
          )}
          <Text
            fontSize={35}
            color={colorMode === "light" ? "gray.100" : "gray.500"}
          >
            /
          </Text>
          <Avatar
            size="sm"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
          <Text>Hassan Ur Rahman</Text>
          <Badge p={1} borderRadius={6}>
            Hobby
          </Badge>
          {/* <VStack
            d="flex"
            spacing={0}
            borderRadius={5}
            p={1}
            _hover={{
              bgColor:  colorMode === "light" ? "gray.200" : "gray.500",
            }}
            cursor="pointer"
            onClick={() => {
              console.log("Icon Clicked");
            }}
          >
            <ChevronUpIcon />
            <ChevronDownIcon />
          </VStack> */}
          <Spacer />
          <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Feedback
          </Text>
          <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Changelog
          </Text>
          <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Support
          </Text>
          <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Docs
          </Text>
          <Tooltip
            label="hssnurrahman"
            fontSize="sm"
            hasArrow
            bg="gray.600"
            arrowSize={8}
          >
            <Avatar
              size="sm"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />
          </Tooltip>
          <Icon
            as={colorMode === "light" ? FaMoon : FaSun}
            cursor={`pointer`}
            color={`gray`}
            w={5}
            h={5}
            _hover={{ color: "gray.400" }}
            onClick={toggleColorMode}
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Header;

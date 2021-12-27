import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Container,
  HStack,
  Image,
  Spacer,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack w="100%" alignItems="stretch" m={3} borderColor="gray.300">
        <HStack spacing={3}>
          <Image src="/vercel.svg" alt="Vercel" boxSize="100px" />
          <Text fontSize={35} color="gray.100">
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
          <VStack
            d="flex"
            spacing={0}
            borderRadius={5}
            p={2}
            _hover={{
              bgColor: "gray.200",
            }}
            cursor="pointer"
            onClick={() => {
              console.log("Icon Clicked");
            }}
          >
            <ChevronUpIcon />
            <ChevronDownIcon />
          </VStack>
          <Spacer />
          <Text
            cursor="pointer"
            color="gray.500"
            _hover={{ color: "gray.600" }}
          >
            Feedback
          </Text>
          <Text
            cursor="pointer"
            color="gray.500"
            _hover={{ color: "gray.600" }}
          >
            Changelog
          </Text>
          <Text
            cursor="pointer"
            color="gray.500"
            _hover={{ color: "gray.600" }}
          >
            Support
          </Text>
          <Text
            cursor="pointer"
            color="gray.500"
            _hover={{ color: "gray.600" }}
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
        </HStack>
      </VStack>
    </Container>
  );
};

export default Header;

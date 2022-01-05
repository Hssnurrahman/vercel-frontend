import { Icon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub } from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";

const Projects = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <VStack alignItems="stretch" spacing={5} mt={5}>
      <HStack spacing={5}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Search Projects"
            focusBorderColor={colorMode === "light" ? "gray.700" : "gray.100"}
          />
        </InputGroup>
        <ButtonComponent
          text="New Project"
          onClick={() => {
            router.push("/new");
          }}
        />
      </HStack>
      <HStack spacing={5}>
        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.600"}
          p={4}
          borderRadius={10}
          boxShadow="lg"
          cursor="pointer"
          _hover={{ bgColor: colorMode === "light" ? "gray.50" : "gray.700" }}
          onClick={() => {}}
        >
          <HStack>
            <Image src="./images/react-logo.svg" alt="React" boxSize={`35px`} />
            <VStack d="flex" alignItems="flex-start" spacing={0}>
              <Text fontWeight="semibold">vercel-frontend</Text>
              <Text>hssan.dev</Text>
            </VStack>
          </HStack>
          <Text mt={5}>
            Merge pull request #11 from Hssnurrahman/fix/some-errors
          </Text>
          <HStack
            d="flex"
            alignItems="center"
            justifyContent="flex-start"
            mt={6}
          >
            <Text>4d ago via</Text>
            <Icon
              as={FaGithub}
              w={5}
              h={5}
              color={colorMode === "light" ? "gray.400" : "gray.200"}
              _hover={{ color: colorMode === "light" ? "black" : "gray.300" }}
            />
          </HStack>
        </Box>
        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.600"}
          p={4}
          borderRadius={10}
          boxShadow="lg"
          cursor="pointer"
          _hover={{ bgColor: colorMode === "light" ? "gray.50" : "gray.700" }}
          onClick={() => {}}
        >
          <HStack>
            <Image src="./images/react-logo.svg" alt="React" boxSize={`35px`} />
            <VStack d="flex" alignItems="flex-start" spacing={0}>
              <Text fontWeight="semibold">vercel-frontend</Text>
              <Text>hssan.dev</Text>
            </VStack>
          </HStack>
          <Text mt={5}>
            Merge pull request #11 from Hssnurrahman/fix/some-errors
          </Text>
          <HStack
            d="flex"
            alignItems="center"
            justifyContent="flex-start"
            mt={6}
          >
            <Text>4d ago via</Text>
            <Icon
              as={FaGithub}
              w={5}
              h={5}
              color={colorMode === "light" ? "gray.400" : "gray.200"}
              _hover={{ color: colorMode === "light" ? "black" : "gray.300" }}
            />
          </HStack>
        </Box>
        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.600"}
          p={4}
          borderRadius={10}
          boxShadow="lg"
          cursor="pointer"
          _hover={{ bgColor: colorMode === "light" ? "gray.50" : "gray.700" }}
          onClick={() => {}}
        >
          <HStack>
            <Image src="./images/react-logo.svg" alt="React" boxSize={`35px`} />
            <VStack d="flex" alignItems="flex-start" spacing={0}>
              <Text fontWeight="semibold">vercel-frontend</Text>
              <Text>hssan.dev</Text>
            </VStack>
          </HStack>
          <Text mt={5}>
            Merge pull request #11 from Hssnurrahman/fix/some-errors
          </Text>
          <HStack
            d="flex"
            alignItems="center"
            justifyContent="flex-start"
            mt={6}
          >
            <Text>4d ago via</Text>
            <Icon
              as={FaGithub}
              w={5}
              h={5}
              color={colorMode === "light" ? "gray.400" : "gray.200"}
              _hover={{ color: colorMode === "light" ? "black" : "gray.300" }}
            />
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Projects;

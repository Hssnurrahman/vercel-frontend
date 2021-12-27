import { AddIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <VStack alignItems="stretch" spacing={5} mt={5}>
      <HStack spacing={5}>
        <Input type="text" placeholder="Search Projects" />
        <Button
          _hover={{
            bgColor: "white",
            border: "1px gray solid",
            color: "gray",
          }}
          border="1px gray solid"
          leftIcon={<AddIcon w={3} h={3} />}
          colorScheme="blackAlpha"
        >
          New Project
        </Button>
      </HStack>
      <HStack spacing={5}>
        <Box
          bg="gray.100"
          p={4}
          borderRadius={10}
          boxShadow="lg"
          cursor="pointer"
          _hover={{ bgColor: "gray.50" }}
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
              vertical-align={`middle`}
              as={FaGithub}
              w={5}
              h={5}
              color="gray.400"
              cursor="pointer"
              _hover={{ color: "black" }}
            />
          </HStack>
        </Box>
        <Box
          bg="gray.100"
          p={4}
          borderRadius={10}
          boxShadow="lg"
          cursor="pointer"
          _hover={{ bgColor: "gray.50" }}
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
              vertical-align={`middle`}
              as={FaGithub}
              w={5}
              h={5}
              color="gray.400"
              cursor="pointer"
              _hover={{ color: "black" }}
            />
          </HStack>
        </Box>
        <Box
          bg="gray.100"
          p={4}
          borderRadius={10}
          boxShadow="lg"
          cursor="pointer"
          _hover={{ bgColor: "gray.50" }}
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
              vertical-align={`middle`}
              as={FaGithub}
              w={5}
              h={5}
              color="gray.400"
              cursor="pointer"
              _hover={{ color: "black" }}
            />
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default Projects;

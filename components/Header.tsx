import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Container,
  HStack,
  Image,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Container maxW={{ lg: "container.lg", md: "container.md" }}>
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
          <Avatar
            size="sm"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
        </HStack>
        <Tabs colorScheme="gray" defaultIndex={0}>
          <TabList>
            <Tab
              _hover={{
                bgColor: "gray.200",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Overview
            </Tab>
            <Tab
              _hover={{
                bgColor: "gray.200",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Integrations
            </Tab>
            <Tab
              _hover={{
                bgColor: "gray.200",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Activity
            </Tab>
            <Tab
              _hover={{
                bgColor: "gray.200",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Domains
            </Tab>
            <Tab
              _hover={{
                bgColor: "gray.200",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Usage
            </Tab>
            <Tab
              _hover={{
                bgColor: "gray.200",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Settings
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default Header;

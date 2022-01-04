import {
  Container,
  Spacer,
  // Tab,
  // TabList,
  // TabPanel,
  // TabPanels,
  // Tabs,
  // useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

const Dashboard = () => {
  // const { colorMode } = useColorMode();

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack alignItems="stretch" minH={`100vh`}>
        <Header />
        {/* <Tabs isFitted colorScheme="gray" defaultIndex={0}>
          <TabList>
            <Tab
              _focus={{ focus: "none" }}
              _hover={{
                bgColor: colorMode === "light" ? "gray.200" : "gray.500",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Overview */}
        {/* </Tab> */}
        {/* <Tab
              isDisabled
              _hover={{
                bgColor: colorMode === "light" ? "gray.200" : "gray.500",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Integrations
            </Tab>
            <Tab
              isDisabled
              _hover={{
                bgColor: colorMode === "light" ? "gray.200" : "gray.500",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Activity
            </Tab>
            <Tab
              isDisabled
              _hover={{
                bgColor: colorMode === "light" ? "gray.200" : "gray.500",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Domains
            </Tab>
            <Tab
              isDisabled
              _hover={{
                bgColor: colorMode === "light" ? "gray.200" : "gray.500",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Usage
            </Tab>
            <Tab
              isDisabled
              _hover={{
                bgColor: colorMode === "light" ? "gray.200" : "gray.500",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              Settings
            </Tab> */}
        {/* </TabList>
          <TabPanels>
            <TabPanel>
              
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
            <TabPanel>
              <p>five!</p>
            </TabPanel>
          </TabPanels>
        </Tabs> */}
        <Projects />
        <Spacer />
        <Footer />
      </VStack>
    </Container>
  );
};

export default Dashboard;

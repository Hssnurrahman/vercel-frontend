import { AddIcon } from "@chakra-ui/icons";
import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack alignItems="stretch">
        <Header />
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
        <Projects />
        <Footer />
      </VStack>
    </Container>
  );
};

export default Dashboard;

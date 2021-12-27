import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <VStack spacing={5}>
      <HStack>
        <Box bg="gray.50" p={4}>
          Project
        </Box>
        <Box bg="gray.100" p={4}>
          Project
        </Box>
        <Box bg="gray.100" p={4}>
          Project
        </Box>
      </HStack>
    </VStack>
  );
};

export default Projects;

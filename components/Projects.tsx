import {
  Box,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import ButtonComponent from "./ButtonComponent";

const Projects = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  // const [userId, setUserId]: any = React.useState("");

  const [userProjects, setUserProjects]: any = React.useState();

  React.useEffect(() => {
    const fetchUserProjects = async () => {
      const jwtToken = localStorage.getItem("jwt");

      const response = await fetch(`http://localhost:1337/api/projects`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          accept: "application/vnd.github.v3+json",
        },
      });
      const data = await response.json();

      const projects = data.data.filter(
        (project: any) =>
          project.attributes.userId === project.attributes.userId
      );

      setUserProjects(projects);
    };

    fetchUserProjects();
  }, []);

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
      <Flex
        d={"flex"}
        flexWrap={"wrap"}
        alignItems="stretch"
        justifyContent={"space-between"}
      >
        {userProjects &&
          userProjects.map((project: any) => {
            // setUserId(project.attributes.userId);
            return (
              <Box
                w={"31%"}
                key={project.id}
                bg={colorMode === "light" ? "gray.100" : "gray.600"}
                p={4}
                mb={6}
                borderRadius={10}
                boxShadow="lg"
                cursor="pointer"
                _hover={{
                  bgColor: colorMode === "light" ? "gray.50" : "gray.700",
                }}
                onClick={() => {}}
              >
                <HStack>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <VStack d="flex" alignItems="flex-start" spacing={0}>
                    {project && (
                      <Text fontWeight="semibold">
                        {project.attributes.name}
                      </Text>
                    )}
                    <Text>hssan.dev</Text>
                  </VStack>
                </HStack>
                <Text mt={5} noOfLines={1}>
                  {project.attributes.commit}
                </Text>
                <HStack
                  d="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  mt={6}
                >
                  <Text>{moment(project.attributes.updatedAt).fromNow()}</Text>
                </HStack>
              </Box>
            );
          })}
      </Flex>
    </VStack>
  );
};

export default Projects;

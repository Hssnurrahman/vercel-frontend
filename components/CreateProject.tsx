import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

const CreateProject = () => {
  const { colorMode } = useColorMode();

  const router = useRouter();

  const [userRepositories, setUserRepositories]: any = React.useState([]);

  React.useEffect(() => {
    const fetchUserRepositories = async () => {
      const accessToken = localStorage.getItem("accesstoken");

      const response = await fetch(
        `https://api.github.com/user/repos?per_page=10&sort=updated&type=owner`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: "application/vnd.github.v3+json",
          },
        }
      );
      const data = await response.json();

      setUserRepositories(data);
    };

    fetchUserRepositories();
  }, []);

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack alignItems={"stretch"} minH={`100vh`}>
        <Header />
        <Text
          fontSize={{
            lg: "sm",
            md: "medium",
            sm: "x-large",
            xl: "3xl",
            "2xl": "4xl",
          }}
          fontWeight={"bold"}
        >{`Let's build something new.`}</Text>
        <Text py={1}>
          To deploy a new Project, import an existing Git Repository.
        </Text>

        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.600"}
          p={4}
          boxShadow={"lg"}
          borderRadius={10}
        >
          <VStack>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Import Git Repositry
            </Text>
            <HStack>
              <Select
                placeholder="Select Option"
                focusBorderColor={
                  colorMode === "light" ? "gray.700" : "gray.100"
                }
              >
                <option value="addGithubAccount">+ Add Github Account</option>
              </Select>
              <InputGroup>
                <InputLeftElement>
                  <SearchIcon
                    color={colorMode === "light" ? "gray.300" : "gray.500"}
                  />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search Projects"
                  focusBorderColor={
                    colorMode === "light" ? "gray.700" : "gray.100"
                  }
                />
              </InputGroup>
            </HStack>
            <Flex
              flexWrap={"wrap"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={5}
            >
              {userRepositories &&
                userRepositories.map((repo: any) => {
                  return (
                    <Box
                      key={repo.id}
                      w={{ lg: "48%", md: "85%", sm: "98%" }}
                      border={
                        colorMode === "light"
                          ? "1px gray solid"
                          : "1px white solid"
                      }
                      borderRadius={10}
                      m={2}
                      p={2}
                    >
                      <HStack spacing={2}>
                        <Image
                          src="./images/react-logo.svg"
                          alt="React"
                          boxSize={`35px`}
                        />
                        <Text
                          isTruncated
                          w={{
                            lg: "8rem",
                            md: "17rem",
                            sm: "7.5rem",
                            xl: "11rem",
                            "2xl": "11rem",
                          }}
                          fontSize={{
                            lg: "sm",
                            md: "medium",
                            sm: "sm",
                            xl: "medium",
                            "2xl": "medium",
                          }}
                        >
                          {repo.name}
                        </Text>
                        <Text>•</Text>
                        <Text
                          fontSize={{
                            lg: "sm",
                            md: "medium",
                            sm: "sm",
                            "2xl": "sm",
                          }}
                        >
                          {moment(repo.updated_at).fromNow()}
                        </Text>
                        <Spacer />
                        <Button
                          bgColor={colorMode === "light" ? "white" : "white"}
                          _hover={{
                            bgColor:
                              colorMode === "light" ? "gray.600" : "gray.700",
                            border: "1px gray solid",
                            color: colorMode === "light" ? "white" : "white",
                          }}
                          border={
                            colorMode === "light"
                              ? "1px gray solid"
                              : "1px white solid"
                          }
                          colorScheme="blackAlpha"
                          color={colorMode === "light" ? "gray" : "black"}
                          _focus={{ focus: "none" }}
                          onClick={() => {
                            router.push(`/new/import/${repo.name}`);
                          }}
                        >
                          Import
                        </Button>
                      </HStack>
                    </Box>
                  );
                })}
            </Flex>
          </VStack>
        </Box>
        <Spacer />
        <Footer />
      </VStack>
    </Container>
  );
};

export default CreateProject;

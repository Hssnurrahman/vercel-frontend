import { Icon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Link,
  Text,
  Tooltip,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { FaCodeBranch, FaFolder, FaGithub, FaInfoCircle } from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";
import Header from "./Header";

const ImportProject = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const repoName = router.query.repoName;

  const [userRepositry, setUserRepositry]: any = React.useState();

  const [userCommit, setUserCommit]: any = React.useState();

  // * Get Project Data

  const [projectName, setProjectName]: any = React.useState("");

  const [setProjectRootDirectory]: any = React.useState("");

  const [projectBuildCommand, setProjectBuildCommand]: any = React.useState("");

  const [setProjectOutputDirectory]: any = React.useState("");

  const [projectInstallCommand, setProjectInstallCommand]: any =
    React.useState("");

  React.useEffect(() => {
    const fetchUserRepositories = async () => {
      const accessToken = localStorage.getItem("accesstoken");
      const userName = localStorage.getItem("username");

      const response = await fetch(
        `https://api.github.com/repos/${userName}/${repoName}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: "application/vnd.github.v3+json",
          },
        }
      );
      const data = await response.json();

      setUserRepositry(data);
    };

    const fetchCommit = async () => {
      const accessToken = localStorage.getItem("accesstoken");
      const userName = localStorage.getItem("username");

      const response = await fetch(
        `https://api.github.com/repos/${userName}/${repoName}/commits`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: "application/vnd.github.v3+json",
          },
        }
      );
      const data = await response.json();

      setUserCommit(data[0].commit.message);

      // console.log(data[0].commit.message);
    };

    fetchUserRepositories();
    fetchCommit();
  }, [repoName]);

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack alignItems="stretch" spacing={5} mt={5}>
        <Header />
        <Text
          fontSize={{
            lg: "x-large",
            md: "medium",
            sm: "x-large",
            xl: "3xl",
            "2xl": "4xl",
          }}
          fontWeight={"bold"}
        >{`You're Almost Done.`}</Text>
        <Text py={1}>
          Please follow the steps to configure your Project and deploy it.
        </Text>
        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.600"}
          p={7}
          boxShadow={"lg"}
          borderRadius={10}
        >
          <HStack spacing={6} d={"flex"} alignItems={"flex-start"}>
            <VStack w={"23rem"} spacing={5}>
              <Box
                w={"20rem"}
                bg={colorMode === "light" ? "gray.300" : "gray.700"}
                p={4}
                boxShadow={"lg"}
                borderRadius={10}
              >
                <HStack spacing={6}>
                  <Icon
                    as={FaGithub}
                    color={colorMode === "light" ? "gray.700" : "gray.200"}
                    cursor={"pointer"}
                    _hover={{
                      color: colorMode === "light" ? "black" : "gray.300",
                    }}
                  />
                  {userRepositry && (
                    <Text fontSize={{ "2xl": "xl", xl: "md" }}>
                      {userRepositry.name}
                    </Text>
                  )}
                </HStack>
              </Box>
              <Divider />
              <Box
                w={"20rem"}
                bg={colorMode === "light" ? "gray.300" : "gray.700"}
                p={4}
                boxShadow={"lg"}
                borderRadius={10}
              >
                <VStack d={"flex"} alignItems={"flex-start"} spacing={3}>
                  <Text
                    fontSize={{ "2xl": "md", xl: "md" }}
                    fontWeight={"semibold"}
                  >
                    GIT REPOSITRY
                  </Text>

                  <HStack spacing={3}>
                    <Icon
                      as={FaGithub}
                      color={colorMode === "light" ? "gray.700" : "gray.200"}
                      cursor={"pointer"}
                      _hover={{
                        color: colorMode === "light" ? "black" : "gray.300",
                      }}
                    />
                    {userRepositry && (
                      <Link
                        href={`https://github.com/${userRepositry.full_name}`}
                        isExternal
                      >
                        <Text fontWeight={"semibold"} cursor={"pointer"}>
                          {userRepositry.full_name}
                        </Text>
                      </Link>
                    )}
                  </HStack>
                  <HStack spacing={3}>
                    <Icon
                      as={FaCodeBranch}
                      color={colorMode === "light" ? "gray.700" : "gray.200"}
                      cursor={"pointer"}
                      _hover={{
                        color: colorMode === "light" ? "black" : "gray.300",
                      }}
                    />
                    {userRepositry && (
                      <Text>{userRepositry.default_branch}</Text>
                    )}
                  </HStack>
                  <HStack spacing={3}>
                    <Icon
                      as={FaFolder}
                      color={colorMode === "light" ? "gray.700" : "gray.200"}
                      cursor={"pointer"}
                      _hover={{
                        color: colorMode === "light" ? "black" : "gray.300",
                      }}
                    />
                    <Text>./</Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
            <VStack>
              <Box
                w={"35rem"}
                bg={colorMode === "light" ? "gray.300" : "gray.700"}
                p={4}
                boxShadow={"lg"}
                borderRadius={10}
              >
                <VStack d={"flex"} alignItems={"flex-start"} spacing={3}>
                  <Text
                    fontSize={{ "2xl": "2xl", xl: "md" }}
                    fontWeight={"semibold"}
                  >
                    Configure Project
                  </Text>
                  <InputGroup>
                    <InputLeftAddon
                      w={"10rem"}
                      bg={colorMode === "light" ? "gray.200" : "gray.500"}
                    >
                      <Text>Name</Text>
                    </InputLeftAddon>
                    <Input
                      type="text"
                      placeholder="Project Name"
                      _hover={{
                        border:
                          colorMode === "light"
                            ? "1px solid gray"
                            : "1px solid red.300",
                      }}
                      focusBorderColor={
                        colorMode === "light" ? "gray.700" : "gray.100"
                      }
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon
                      bg={colorMode === "light" ? "gray.200" : "gray.500"}
                      w={"10rem"}
                    >
                      <Text>Root Directory</Text>
                    </InputLeftAddon>
                    <Input
                      type="text"
                      placeholder="Root Directory"
                      _hover={{
                        border:
                          colorMode === "light"
                            ? "1px solid gray"
                            : "1px solid red.300",
                      }}
                      focusBorderColor={
                        colorMode === "light" ? "gray.700" : "gray.100"
                      }
                      defaultValue={"./"}
                      isDisabled
                      onChange={(e) => setProjectRootDirectory(e.target.value)}
                    />
                  </InputGroup>
                  <Accordion w={"33rem"} allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton _focus={{ focus: "none" }}>
                          <Box flex="1" textAlign="left">
                            Build and Output Settings
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel py={4}>
                        <VStack spacing={3}>
                          <InputGroup>
                            <InputLeftAddon
                              w={"10rem"}
                              bg={
                                colorMode === "light" ? "gray.200" : "gray.500"
                              }
                            >
                              <Text>Build Command</Text>
                            </InputLeftAddon>
                            <Input
                              type="text"
                              placeholder="`npm run build` or `yarn build`"
                              _hover={{
                                border:
                                  colorMode === "light"
                                    ? "1px solid gray"
                                    : "1px solid red.300",
                              }}
                              focusBorderColor={
                                colorMode === "light" ? "gray.700" : "gray.100"
                              }
                              value={projectBuildCommand}
                              onChange={(e) =>
                                setProjectBuildCommand(e.target.value)
                              }
                            />
                            <Tooltip
                              label={
                                "The command your frontend framework provides for compiling your code."
                              }
                              fontSize="sm"
                              hasArrow
                              bg="gray.600"
                              color={
                                colorMode === "light" ? "gray.200" : "gray.300"
                              }
                              arrowSize={8}
                            >
                              <InputRightAddon
                                bg={
                                  colorMode === "light"
                                    ? "gray.200"
                                    : "gray.500"
                                }
                              >
                                <Icon as={FaInfoCircle} />
                              </InputRightAddon>
                            </Tooltip>
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon
                              w={"10rem"}
                              bg={
                                colorMode === "light" ? "gray.200" : "gray.500"
                              }
                            >
                              <Text>Output Directory</Text>
                            </InputLeftAddon>
                            <Input
                              type="text"
                              placeholder="Output Directory"
                              _hover={{
                                border:
                                  colorMode === "light"
                                    ? "1px solid gray"
                                    : "1px solid red.300",
                              }}
                              focusBorderColor={
                                colorMode === "light" ? "gray.700" : "gray.100"
                              }
                              defaultValue={"Default Directory"}
                              isDisabled
                              // value={projectOutputDirectory}
                              onChange={(e) =>
                                setProjectOutputDirectory(e.target.value)
                              }
                            />
                            <Tooltip
                              label={
                                "The directory in which your compiled frontend will be located."
                              }
                              fontSize="sm"
                              hasArrow
                              bg="gray.600"
                              color={
                                colorMode === "light" ? "gray.200" : "gray.300"
                              }
                              arrowSize={8}
                            >
                              <InputRightAddon
                                bg={
                                  colorMode === "light"
                                    ? "gray.200"
                                    : "gray.500"
                                }
                              >
                                <Icon as={FaInfoCircle} />
                              </InputRightAddon>
                            </Tooltip>
                          </InputGroup>
                          <InputGroup>
                            <InputLeftAddon
                              w={"10rem"}
                              bg={
                                colorMode === "light" ? "gray.200" : "gray.500"
                              }
                            >
                              <Text>Install Command</Text>
                            </InputLeftAddon>
                            <Input
                              type="text"
                              placeholder="`npm install` or `yarn install`"
                              _hover={{
                                border:
                                  colorMode === "light"
                                    ? "1px solid gray"
                                    : "1px solid red.300",
                              }}
                              focusBorderColor={
                                colorMode === "light" ? "gray.700" : "gray.100"
                              }
                              value={projectInstallCommand}
                              onChange={(e) =>
                                setProjectInstallCommand(e.target.value)
                              }
                            />
                            <Tooltip
                              label={`The command that is used to install your Project's software dependencies. If you donot need to install dependencies, override this field and leave it empty.`}
                              fontSize="sm"
                              hasArrow
                              bg="gray.600"
                              color={
                                colorMode === "light" ? "gray.200" : "gray.300"
                              }
                              arrowSize={8}
                            >
                              <InputRightAddon
                                bg={
                                  colorMode === "light"
                                    ? "gray.200"
                                    : "gray.500"
                                }
                              >
                                <Icon as={FaInfoCircle} />
                              </InputRightAddon>
                            </Tooltip>
                          </InputGroup>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>

                    {/* <AccordionItem>
                      <h2>
                        <AccordionButton _focus={{ focus: "none" }}>
                          <Box flex="1" textAlign="left">
                            Environment Variables
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel py={4}>
                        <VStack spacing={3}>
                          <HStack>
                            <InputGroup>
                              <InputLeftAddon
                                bg={
                                  colorMode === "light"
                                    ? "gray.200"
                                    : "gray.500"
                                }
                              >
                                <Text>Name</Text>
                              </InputLeftAddon>
                              <Input
                                type="text"
                                placeholder="Default Name"
                                _hover={{
                                  border:
                                    colorMode === "light"
                                      ? "1px solid gray"
                                      : "1px solid red.300",
                                }}
                                focusBorderColor={
                                  colorMode === "light"
                                    ? "gray.700"
                                    : "gray.100"
                                }
                              />
                            </InputGroup>
                            <InputGroup>
                              <InputLeftAddon
                                bg={
                                  colorMode === "light"
                                    ? "gray.200"
                                    : "gray.500"
                                }
                              >
                                <Text>Value</Text>
                              </InputLeftAddon>
                              <Input
                                type="text"
                                placeholder="I9455D654FG"
                                _hover={{
                                  border:
                                    colorMode === "light"
                                      ? "1px solid gray"
                                      : "1px solid red.300",
                                }}
                                focusBorderColor={
                                  colorMode === "light"
                                    ? "gray.700"
                                    : "gray.100"
                                }
                              />
                            </InputGroup>
                            <ButtonComponent
                              text="Add"
                              onClick={async () => {
                                const jwtToken = localStorage.getItem("jwt");

                                try {
                                  const { data } = await axios.post(
                                    "http://localhost:1337/api/evs",

                                    {
                                      data: {
                                        name: "my article",
                                        value: "my super article content",
                                      },
                                    },
                                    {
                                      headers: {
                                        Authorization: "Bearer " + jwtToken,
                                      },
                                    }
                                  );

                                  console.log(data);
                                } catch (error) {
                                  console.error(error);
                                }
                              }}
                            />
                          </HStack>
                          <Table variant="striped" colorScheme="blackAlpha">
                            <Thead>
                              <Tr>
                                <Th>Name</Th>
                                <Th>Value</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                              </Tr>
                              <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                              </Tr>
                              <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem> */}
                  </Accordion>
                  <ButtonComponent
                    text="Deploy"
                    onClick={async () => {
                      const jwtToken = localStorage.getItem("jwt");

                      try {
                        const response = await fetch(
                          `http://localhost:1337/api/users/me`,
                          {
                            headers: {
                              Authorization: `Bearer ${jwtToken}`,
                              accept: "application/vnd.github.v3+json",
                            },
                          }
                        );

                        const data = await response.json();

                        // const userId = data.id;

                        await axios.post(
                          "http://localhost:1337/api/projects",

                          {
                            data: {
                              name: projectName,
                              buildCommand: projectBuildCommand,
                              installCommand: projectInstallCommand,
                              repoName: userRepositry && userRepositry.name,
                              commit: userCommit,
                              userId: data.id,
                            },
                          },
                          {
                            headers: {
                              Authorization: "Bearer " + jwtToken,
                            },
                          }
                        );

                        router.push("/dashboard");
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                    width="100%"
                  />
                </VStack>
              </Box>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default ImportProject;

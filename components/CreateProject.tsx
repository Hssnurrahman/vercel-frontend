import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
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
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const CreateProject = () => {
  const { colorMode } = useColorMode();

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack alignItems={"stretch"} minH={`100vh`}>
        <Header />
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
        >{`Let's build something new.`}</Text>
        <Text py={1}>
          To deploy a new Project, import an existing Git Repository or get
          started with one of our Templates.
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
            <HStack spacing={5}>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={6}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={5}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
            </HStack>
            <HStack spacing={5}>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={6}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={5}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
            </HStack>
            <HStack spacing={5}>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={6}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={5}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
            </HStack>
            <HStack spacing={5}>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={6}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={5}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
            </HStack>
            <HStack spacing={5}>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={6}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
              <Box
                border={
                  colorMode === "light" ? "1px gray solid" : "1px white solid"
                }
                borderRadius={10}
                m={2}
                p={2}
              >
                <HStack spacing={5}>
                  <Image
                    src="./images/react-logo.svg"
                    alt="React"
                    boxSize={`35px`}
                  />
                  <Text>vercel-frontend • 16h ago</Text>
                  <Spacer />
                  <Button
                    bgColor={colorMode === "light" ? "white" : "white"}
                    _hover={{
                      bgColor: colorMode === "light" ? "gray.600" : "gray.700",
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
                  >
                    Import
                  </Button>
                </HStack>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Spacer />
        <Footer />
      </VStack>
    </Container>
  );
};

export default CreateProject;

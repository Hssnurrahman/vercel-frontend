import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRouter } from "next/router";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [userData, setUserData]: any = React.useState();

  const router = useRouter();

  React.useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      const accessToken = localStorage.getItem("accesstoken");

      const response = await fetch(`https://api.github.com/user`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await response.json();

      setUserData(data);
    };

    fetchAuthenticatedUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    router.push("/signup");
  };

  return (
    <Container
      maxW={{ lg: "container.lg", md: "container.md", sm: "container.sm" }}
    >
      <VStack w="100%" alignItems="stretch" m={3} borderColor="gray.300">
        <HStack spacing={3}>
          {colorMode === "light" && (
            <Image src="/vercel.svg" alt="Vercel" boxSize="100px" />
          )}
          {colorMode === "dark" && (
            <Image
              src="/images/vercel-light.svg"
              alt="Vercel"
              boxSize="100px"
            />
          )}
          {/* <Text
            fontSize={35}
            color={colorMode === "light" ? "gray.100" : "gray.500"}
          >
            /
          </Text> */}
          {/* {userData && (
            <Avatar
              size="sm"
              name="Ryan Florence"
              src={`${userData.avatar_url}`}
            />
          )}
          {userData && <Text>{`${userData.name}`}</Text>}
          <Badge p={1} borderRadius={6}>
            Hobby
          </Badge> */}
          {/* <VStack
            d="flex"
            spacing={0}
            borderRadius={5}
            p={1}
            _hover={{
              bgColor:  colorMode === "light" ? "gray.200" : "gray.500",
            }}
            cursor="pointer"
            onClick={() => {
              console.log("Icon Clicked");
            }}
          >
            <ChevronUpIcon />
            <ChevronDownIcon />
          </VStack> */}
          <Spacer />
          {/* <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Feedback
          </Text>
          <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Changelog
          </Text>
          <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Support
          </Text>
          <Text
            cursor="pointer"
            color={colorMode === "light" ? "gray.500" : "gray.300"}
            _hover={{ color: colorMode === "light" ? "gray.600" : "gray.400" }}
          >
            Docs
          </Text> */}
          {/* {userData && (
            <Tooltip
              label={`${userData.name}`}
              fontSize="sm"
              hasArrow
              bg="gray.600"
              color={colorMode === "light" ? "gray.200" : "gray.300"}
              arrowSize={8}
            >
              <Avatar
                size="sm"
                name="Ryan Florence"
                src={`${userData.avatar_url}`}
              />
            </Tooltip>
          )} */}
          <Menu>
            <MenuButton
              _focus={{ focus: "none" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <Text fontSize={{ sm: "sm" }}>{userData && userData.name}</Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
          <Icon
            as={colorMode === "light" ? FaMoon : FaSun}
            cursor={`pointer`}
            color={`gray`}
            w={5}
            h={5}
            _hover={{ color: "gray.400" }}
            onClick={toggleColorMode}
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Header;

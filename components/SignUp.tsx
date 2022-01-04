import {
  Button,
  HStack,
  Icon,
  Image,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

const SignUp = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack>
      <HStack
        d={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        spacing={4}
      >
        {colorMode === "light" && (
          <Image src="./vercel.svg" alt="Vercel" boxSize={"100px"} />
        )}
        {colorMode === "dark" && (
          <Image
            src="./images/vercel-light.svg"
            alt="Vercel"
            boxSize={"100px"}
          />
        )}
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
      <Link
        href="https://vercel-back-end.herokuapp.com/api/connect/github"
        passHref
      >
        <Button
          bgColor={colorMode === "light" ? "gray" : "white"}
          _hover={{
            bgColor: colorMode === "light" ? "white" : "gray.700",
            border: "1px gray solid",
            color: colorMode === "light" ? "gray" : "white",
          }}
          border={colorMode === "light" ? "1px gray solid" : "1px white solid"}
          colorScheme="blackAlpha"
          color={colorMode === "light" ? "white" : "black"}
          _focus={{ focus: "none" }}
        >
          <Icon as={FaGithub} /> &nbsp; Continue With Github
        </Button>
      </Link>
    </VStack>
  );
};

export default SignUp;

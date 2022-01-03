import {
  Button,
  HStack,
  Icon,
  Image,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

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
      <Button>Continue With Github</Button>
    </VStack>
  );
};

export default SignUp;

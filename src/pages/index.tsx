import { useState } from "react";
import { Flex, Box, Link, useColorModeValue } from "@chakra-ui/react";

export default function Page() {
  const [animation, setAnimation] = useState("");

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
        bg={useColorModeValue("white", "gray.700")}
        animation={animation}
      >
        <Flex justifyContent="center">
          <Link
            href="/exercise/question-1"
            _hover={{ color: "blue.500", textDecoration: "underline" }}
            fontSize="xl"
          >
            問題 1 に進む
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

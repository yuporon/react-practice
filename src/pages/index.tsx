import { Box, Center, Link, Stack } from "@chakra-ui/react";

export default function Page() {
  return (
    <Center pt={20}>
      <Stack spacing={4}>
        <Box fontSize="2xl" fontWeight="bold">
          ここから練習問題を選択してください
        </Box>
        <Stack width={500}>
          <Box>
            <Link
              href="/exercise/question-1"
              _hover={{ color: "blue.500", textDecoration: "underline" }}
            >
              練習問題
            </Link>
          </Box>
          <Box>
            <Link
              href="/exercise/todo-app"
              _hover={{ color: "blue.500", textDecoration: "underline" }}
            >
              TodoList 演習
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Center>
  );
}

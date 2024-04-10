import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

type TodoCreationFormProps = {
  onCreateTodo: (title: string) => void;
};

export function TodoCreationForm({ onCreateTodo }: TodoCreationFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const [titleError, setTitleError] = useState<string | undefined>(undefined);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (titleRef.current === null) {
          return;
        }
        // TODO: 入力された値でタスクを作成する処理を実装してください https://github.com/Ryochike/react-practice/issues/10
        onCreateTodo("TODO");
      }}
    >
      <HStack gap={2} align="start">
        <FormControl isInvalid={!!titleError}>
          <Input ref={titleRef} size="sm" placeholder="Learn React" />
          <FormErrorMessage>{titleError}</FormErrorMessage>
        </FormControl>
        <Button type="submit" size="sm">
          追加
        </Button>
      </HStack>
    </form>
  );
}

import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";
import { UseTodoListReturn } from "../TodoList/useTodoList";

type TodoCreationFormProps = Pick<UseTodoListReturn, "onCreateTodo">;

export function TodoCreationForm({ onCreateTodo }: TodoCreationFormProps) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState<string | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateTitle = useCallback((inputTitle: string) => {
    return inputTitle.trim().length > 0;
  }, []);

  const handleValidation = useCallback(
    (inputTitle: string) => {
      if (!validateTitle(inputTitle)) {
        setTitleError("タイトルを入力してください");
        inputRef.current?.focus();
      } else {
        setTitleError(undefined);
      }
    },
    [validateTitle]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTitle = e.target.value;
      setTitle(newTitle);
      handleValidation(newTitle);
    },
    [handleValidation]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validateTitle(title)) {
        onCreateTodo({ title: title.trim() });
        setTitle("");
      }
    },
    [title, onCreateTodo]
  );

  return (
    <form onSubmit={handleSubmit}>
      <HStack gap={2} align="start">
        <FormControl isInvalid={!!titleError}>
          <Input
            size="sm"
            placeholder="Learn React"
            value={title}
            onChange={handleChange}
            ref={inputRef}
          />
          <FormErrorMessage>{titleError}</FormErrorMessage>
        </FormControl>
        <Button type="submit" size="sm">
          追加
        </Button>
      </HStack>
    </form>
  );
}

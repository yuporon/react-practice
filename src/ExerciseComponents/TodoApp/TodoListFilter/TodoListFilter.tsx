import { FormControl, FormHelperText, FormLabel, HStack, Input, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import type { UseTodoListFilterReturn } from "./useTodoListFilter";
import type { TodoFilterStatus } from "./TodoListFilter.type"
import { ChangeEvent, ChangeEventHandler } from "react";
export type TodoListFilterProps = UseTodoListFilterReturn;

export function TodoListFilter({
  query,
  status,
  handleFilterStatusChange,
  handleQueryChange,
}: TodoListFilterProps) {
  return (
    <VStack>
      <FormControl>
        <Input
          type='text'
          value={query}
          onChange={(e) =>
            handleQueryChange(e.target.value)
          }
        />
      </FormControl>
      <FormControl as='fieldset'>
        <RadioGroup
          value={status}
          onChange={(value) =>
            handleFilterStatusChange(value)
          }
        >
          <HStack spacing='24px'>
            <Radio value='all'>全て</Radio>
            <Radio value='active'>未完了</Radio>
            <Radio value='completed'>完了</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </VStack>
  );
}

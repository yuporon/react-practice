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
          defaultValue='all'
          value={status}
          onChange={(e) =>
            handleFilterStatusChange(e)
          }
        >
          <HStack spacing='24px'>
            <Radio value='all'>all</Radio>
            <Radio value='active'>active</Radio>
            <Radio value='completed'>completed</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </VStack>
  );
}

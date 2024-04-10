import { VStack } from "@chakra-ui/react";
import type { UseTodoListFilterReturn } from "./useTodoListFilter";

export type TodoListFilterProps = UseTodoListFilterReturn;

/**
 * @see https://github.com/Ryochike/react-practice/issues/7
 */
export function TodoListFilter({
  query,
  status,
  handleFilterStatusChange,
  handleQueryChange,
}: TodoListFilterProps) {
  return (
    <VStack>
      <p>検索フィルタのUIを実装してください</p>
    </VStack>
  );
}

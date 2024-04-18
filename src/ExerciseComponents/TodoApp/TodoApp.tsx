import { Box, VStack } from "@chakra-ui/react";
import { useTodoList } from "./TodoList/useTodoList";
import { useTodoListFilter } from "./TodoListFilter/useTodoListFilter";
import { TodoList } from "./TodoList/TodoList";
import { TodoListFilter } from "./TodoListFilter/TodoListFilter";
import { TodoCreationForm } from "./TodoCreationForm/TodoCreationForm";

export function TodoApp() {
  const todoListFilter = useTodoListFilter();
  const { todoList, onToggleTodo, onCreateTodo, onDeleteTodo } = useTodoList();

  return (
    <Box as="main" p={4} maxWidth={300} mx="auto">
      <VStack gap={4} align="start">
        <TodoListFilter {...todoListFilter} />
        <TodoCreationForm onCreateTodo={onCreateTodo} />
        <TodoList
          todoList={todoList}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          query={todoListFilter.query}
          status={todoListFilter.status}
        />
      </VStack>
    </Box>
  );
}

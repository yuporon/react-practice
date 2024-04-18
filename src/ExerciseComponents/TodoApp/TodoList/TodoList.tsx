import { Button, Checkbox, HStack, List, ListItem } from "@chakra-ui/react";
import { Todo } from "../Todo.type";
import type { TodoFilterStatus } from "../TodoListFilter/TodoListFilter.type";
import { UseTodoListReturn } from "./useTodoList";

type TodoListProps = {
  query: string;
  status: TodoFilterStatus;
} & Pick<UseTodoListReturn, "todoList" | "onToggleTodo" | "onDeleteTodo">;

export function TodoList({
  todoList,
  query,
  status,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) {
  const regex = new RegExp(query, "i");
  const filteredTodoList = todoList.filter((todo: Todo) => {
    const isQueryMatch = query === "" || regex.test(todo.title);
    switch (status) {
      case "all":
        return todo && isQueryMatch;
      case "active":
        return !todo.completed && isQueryMatch;
      case "completed":
        return todo.completed && isQueryMatch;
      default:
        return false;
    }
  });

  if (filteredTodoList.length === 0) {
    return <p>タスクがありません。</p>;
  }

  return (
    <List spacing={2} w="100%">
      {filteredTodoList.map((todo) => {
        return (
          <ListItem key={todo.id}>
            <HStack justify="space-between">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => {
                  onToggleTodo({
                    id: todo.id,
                  });
                }}
              >
                {todo.title}
              </Checkbox>
              <Button
                size="xs"
                onClick={() => {
                  onDeleteTodo({
                    id: todo.id,
                  });
                }}
              >
                削除
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}

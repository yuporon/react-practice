import { Button, Checkbox, HStack, List, ListItem } from "@chakra-ui/react";
import { Todo } from "../Todo.type";
import type { TodoFilterStatus } from "../TodoListFilter/TodoListFilter.type"
import { useTodoList } from "./useTodoList";

type TodoListProps = {
  query: string;
  status: TodoFilterStatus;
};

export function TodoList({ query, status}: TodoListProps) {
  const { todoList, toggleTodo, deleteTodo } = useTodoList();
  const regex = new RegExp(query, 'i')
  const filteredTodoList = todoList.filter((todo: Todo) => {
    const isQueryMatch = query === '' || regex.test(todo.title)
    switch (status) {
      case 'all':
        return todo && isQueryMatch
      case 'active':
        return !todo.completed && isQueryMatch
      case 'completed':
        return todo.completed && isQueryMatch
      default:
        return false
    }
  })

  if (filteredTodoList.length === 0) {
    return (
      <p>タスクがありません。</p>
    )
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
                  toggleTodo({
                    id: todo.id,
                  });
                }}
              >
                {todo.title}
              </Checkbox>
              <Button
                size="xs"
                onClick={() => {
                  deleteTodo({
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

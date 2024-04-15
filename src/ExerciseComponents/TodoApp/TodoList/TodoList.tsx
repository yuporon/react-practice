import { Button, Checkbox, HStack, List, ListItem } from "@chakra-ui/react";
import { Todo } from "../Todo.type";
import type { TodoFilterStatus } from "../TodoListFilter/TodoListFilter.type"

type TodoListProps = {
  todoList: Todo[];
  query: string;
  status: TodoFilterStatus;
};

export function TodoList({ todoList, query, status}: TodoListProps) {
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


  return (
    <>
      {filteredTodoList.length === 0 ? (
        <p>タスクがありません。</p>
      ) : (
        <List spacing={2} w="100%">
          {filteredTodoList.map((todo) => {
            return (
              <ListItem key={todo.id}>
                <HStack justify="space-between">
                  <Checkbox
                    isChecked={todo.completed}
                    onChange={() => {
                      alert("実装してください");
                    }}
                  >
                    {todo.title}
                  </Checkbox>
                  <Button
                    size="xs"
                    onClick={() => {
                      alert("実装してください");
                    }}
                  >
                    削除
                  </Button>
                </HStack>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
}

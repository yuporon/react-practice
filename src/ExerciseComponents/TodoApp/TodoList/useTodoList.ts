import { useCallback, useReducer } from "react";
import { reducer, initialState } from "./TodoList.reducer";

export function useTodoList() {
  const [{ todoList }, dispatch] = useReducer(reducer, initialState);

  const onToggleTodo = useCallback(({ id }: { id: number }) => {
    dispatch({
      type: "toggle",
      payload: {
        id,
      },
    });
  }, []);

  const onCreateTodo = useCallback(({ title }: { title: string }) => {
    dispatch({
      type: "create",
      payload: {
        title,
      },
    });
  }, []);

  const onDeleteTodo = useCallback(({ id }: { id: number }) => {
    dispatch({
      type: "delete",
      payload: {
        id,
      },
    });
  }, []);

  return {
    todoList,
    onToggleTodo,
    onCreateTodo,
    onDeleteTodo,
  };
}

export type UseTodoListReturn = ReturnType<typeof useTodoList>;

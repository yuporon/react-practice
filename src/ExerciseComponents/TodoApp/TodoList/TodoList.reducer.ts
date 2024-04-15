import { createTodoFixture, defaultTodoList } from "../Todo.fixture";
import { Todo } from "../Todo.type";

type TodoListState = {
  todoList: Todo[];
};

type TodoListAction =
  | {
      type: "toggle";
      payload: {
        id: number;
      };
    }
  | {
      type: "create";
      payload: {
        title: string;
      };
    }
  | {
      type: "delete";
      payload: {
        id: number;
      };
    };

export const initialState: TodoListState = {
  todoList: defaultTodoList,
};

export const reducer = (
  state: TodoListState,
  action: TodoListAction
): TodoListState => {
  switch (action.type) {
    case "toggle":
      const newStateForToggle = {
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      return newStateForToggle;
    case "create":
      // TODO: 作成ロジックを実装してください https://github.com/Ryochike/react-practice/issues/10
      return state;
    case "delete":
      const newStateForDelete = {
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
      return newStateForDelete;
    default:
      return state;
  }
};

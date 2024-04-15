// ヒント：以下の import を使用すると良いでしょう
import { useState } from "react";
import { TodoFilterStatus, isTodoFilterStatus } from "./TodoListFilter.type";

export function useTodoListFilter() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<TodoFilterStatus>("all")

  const handleQueryChange = (query: string) => {
    setQuery(query)
  };
  const handleFilterStatusChange = (status: string) => {
    if (isTodoFilterStatus(status)) {
      setStatus(status)
    }
  };

  return {
    query,
    status,
    handleFilterStatusChange,
    handleQueryChange,
  };
}

export type UseTodoListFilterReturn = ReturnType<typeof useTodoListFilter>;

// ヒント：以下の import を使用すると良いでしょう
// import { useState } from "react";
// import { TodoFilterStatus, isTodoFilterStatus } from "./TodoListFilter.type";

export function useTodoListFilter() {
  // TODO: 状態で管理するようにしてください https://github.com/Ryochike/react-practice/issues/7
  const query = "";
  const status = "all";

  const handleQueryChange = (query: string) => {
    // TODO: 検索文字列入力時の処理を実装してください https://github.com/Ryochike/react-practice/issues/7
  };
  const handleFilterStatusChange = (status: string) => {
    // TODO: ステータス入力時の処理を実装してください https://github.com/Ryochike/react-practice/issues/7
  };

  return {
    query,
    status,
    handleFilterStatusChange,
    handleQueryChange,
  };
}

export type UseTodoListFilterReturn = ReturnType<typeof useTodoListFilter>;

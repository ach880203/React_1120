import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  // 투두리스트 검색
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        className="searchbar"
        onChange={onChangeSearch}
        //onClick={(e) => setSearch(e.target.value)}
        //  const onChangeSearch = (e) => {
        //setSearch(e.target.value);}
        //위에 코드 안만들고 이것도 가능
        placeholder="검색어를 입력하세요..."
      />

      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

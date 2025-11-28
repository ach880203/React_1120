import React, { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onsubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onkeydown = (e) => {
    if(e.keyCode == 13){
        onsubmit();
    }
  }
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 👍👍</h4>
      <div className="editor_wrapper">
        <input
          onChange={onChangeContent}
          ref={inputRef}
          value={content}
          onKeyDown={onkeydown}
          placeholder="새로운 Todo..."
        />

        <button onClick={onsubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;

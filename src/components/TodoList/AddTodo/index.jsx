import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AddTodoSection,
  AddTodoText,
  InputRow,
  TodoInput,
  AddButton,
} from "./style";
import { addTodo } from "../todolistSlice";

/**
 * AddTodo Component
 * @description 用於新增待辦事項的組件，包含輸入框與按鈕。
 * @param {Object} props - 組件的屬性。
 * @param {React.RefObject<HTMLElement>} props.contentRef - 滾動內容容器的引用，用於滾動到最底部。
 * @param {React.RefObject<HTMLElement>} props.scrollbarRef - 自定義滾動條滑塊的引用。
 * @param {number} props.thumbHeight - 自定義滾動條的滑塊高度。
 * @returns {JSX.Element} - 新增待辦事項的組件。
 */

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  /**
   * 處理新增待辦按鈕
   * @description 新增待辦事項並滾動至最底部
   */
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }

    // 新增待辦事項
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setInputValue("");

  };

  /**
   * 處理按下 Enter 鍵事件
   * @param {KeyboardEvent} e - 鍵盤事件
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <AddTodoSection>
      <AddTodoText>Add to list</AddTodoText>
      <InputRow>
        <TodoInput
          placeholder=""
          maxLength={50}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <AddButton onClick={handleAddTodo}>
          <span className="vertical-line"></span>
          <span className="horizontal-line"></span>
        </AddButton>
      </InputRow>
    </AddTodoSection>
  );
};

export default AddTodo;
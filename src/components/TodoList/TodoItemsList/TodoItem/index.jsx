import React, { forwardRef } from "react";
import {
  TodoItemContainer,
  Checkbox,
  ItemText,
  DeleteButton,
} from "./style";

/**
 * TodoItem Component
 * @description 用於渲染單個待辦事項項目，包含完成狀態切換與刪除功能。
 * @param {Object} props - 組件的屬性。
 * @param {string|number} props.id - 待辦事項的唯一標識符。
 * @param {string} props.text - 待辦事項的文字內容。
 * @param {boolean} props.completed - 待辦事項是否完成的狀態。
 * @param {Function} props.onToggle - 當用戶點擊完成狀態切換按鈕時觸發的回調函數。
 * @param {Function} props.onDelete - 當用戶點擊刪除按鈕時觸發的回調函數。
 * @param {React.RefObject} ref - 提供給外部的引用，用於操作此項目。
 * @returns {JSX.Element} - 待辦事項的視圖。
 */

const TodoItem = forwardRef(({ id, text, completed, onToggle, onDelete }, ref) => {
  return (
    <TodoItemContainer
      id={`todo-${id}`}
      className={completed ? "completed" : ""}
      ref={ref}
    >
      {/* 狀態切換按鈕 */}
      <Checkbox onClick={onToggle}>
        <i className={`bi ${completed ? "bi-check-square" : "bi-square"}`}></i>
      </Checkbox>
      {/* 待辦事項文字內容 */}
      <ItemText $completed={completed}>{text}</ItemText>
      {/* 刪除按鈕 */}
      <DeleteButton onClick={onDelete}>
        <i className="bi bi-x"></i>
      </DeleteButton>
    </TodoItemContainer>
  );
});

export default TodoItem;

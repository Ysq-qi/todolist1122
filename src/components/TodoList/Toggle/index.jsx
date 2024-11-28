import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMoveDoneToEnd, resetMoveDoneToEnd } from "../../TodoList/todolistSlice";
import { 
  ToggleSection,
  ToggleText, 
  ToggleSwitch, 
  Slider, 
  ToggleLabel 
} from "./style";

/**
 * Toggle Component
 * @description 用於切換是否將已完成的待辦事項移動到列表底部的開關組件。
 * @returns {JSX.Element} - 切換排序的開關組件。
 */

const Toggle = () => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.todolist.moveDoneToEnd);
  const todos = useSelector((state) => state.todolist.todos);

  /**
   * 切換待辦事項排序方式
   * @description 調用 Redux Action `toggleMoveDoneToEnd`，切換是否將已完成的事項移動到列表底部。
   */
  const handleToggle = () => {
    dispatch(toggleMoveDoneToEnd()); // 切換排序狀態
    
    // 檢查是否有已完成的待辦事項
    const hasCompletedTodos = todos.some((todo) => todo.completed);
  
    // 如果沒有已完成的事項，1 秒後重置狀態
    if (!hasCompletedTodos) {
      setTimeout(() => {
        dispatch(resetMoveDoneToEnd());
      }, 500);
    }
  };

  return (
    <ToggleSection>
      <ToggleText>Move done things to end?</ToggleText>
      <ToggleSwitch onClick={handleToggle}>
        <Slider $isChecked={isChecked} />
        <ToggleLabel $isChecked={isChecked} />
      </ToggleSwitch>
    </ToggleSection>
  );
};

export default Toggle;
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo, resetScrollFlag  } from "../todolistSlice";
import TodoItem from "./TodoItem";
import { 
  TodoItemsListContainer,
  ContentContainer,
  ScrollbarTrack, 
  ScrollbarThumb 
  } from "./style";
import {
  updateThumbHeight,
  updateThumbPosition,
  checkOverflow,
  handleDragStart,
  handleDragMove,
  handleDragEnd,
  scrollToBottom,
} from "../../../utils/scroll";

/**
 * TodoItemsList Component
 * @description 用於顯示待辦事項列表，支持自定義滾動條與操作功能。
 * @returns {JSX.Element}
 */

const TodoItemsList = (() => {
  const todos = useSelector((state) => state.todolist.todos); // 獲取待辦事項
  const scrollToBottomFlag = useSelector((state) => state.todolist.scrollToBottom);
  const dispatch = useDispatch();

  const contentRef = useRef(null); // 滾動內容容器
  const scrollbarRef = useRef(null); // 滾動條滑塊

  const [thumbHeight, setThumbHeight] = useState(50); // 自定義滾動條高度
  const [isOverflowing, setIsOverflowing] = useState(false); // 是否需要滾動條

  // ==========================
  // 滾動條邏輯
  // ==========================

  useEffect(() => {
    // 檢查是否需要滾動條並更新滾動條高度與位置
    checkOverflow(contentRef, setIsOverflowing);
    updateThumbHeight(contentRef, setThumbHeight);
    updateThumbPosition(contentRef, scrollbarRef, thumbHeight);

    const resizeListener = () => {
      checkOverflow(contentRef, setIsOverflowing);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [todos, thumbHeight]);

  useEffect(() => {
    const thumb = scrollbarRef.current;

    thumb.addEventListener("mousedown", (e) => handleDragStart(e, scrollbarRef));
    document.addEventListener("mousemove", (e) =>
      handleDragMove(e, contentRef, scrollbarRef, thumbHeight)
    );
    document.addEventListener("mouseup", () => handleDragEnd(scrollbarRef));

    return () => {
      thumb.removeEventListener("mousedown", (e) => handleDragStart(e, scrollbarRef));
      document.removeEventListener("mousemove", (e) =>
        handleDragMove(e, contentRef, scrollbarRef, thumbHeight)
      );
      document.removeEventListener("mouseup", () => handleDragEnd(scrollbarRef));
    };
  }, [thumbHeight]);

  useEffect(() => {
    if (scrollToBottomFlag) {
      scrollToBottom(contentRef, scrollbarRef, thumbHeight);
      dispatch(resetScrollFlag()); // 重置滾動開關
    }
  }, [scrollToBottomFlag, thumbHeight, dispatch]);

  // ==========================
  // 刪除與切換功能
  // ==========================

  /**
   * 刪除待辦事項
   * @param {string} id 待辦事項的 ID
   */
  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  /**
   * 切換待辦事項完成狀態
   * @param {string} id 待辦事項的 ID
   */
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  // ==========================
  // 渲染組件
  // ==========================

  return (
    <TodoItemsListContainer>
      <ContentContainer
        ref={contentRef}
        onScroll={() => updateThumbPosition(contentRef, scrollbarRef, thumbHeight)}
        $hasContent={todos.length > 0} 
      >
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => handleToggleTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ContentContainer>
      <ScrollbarTrack $isVisible={isOverflowing}>
        <ScrollbarThumb ref={scrollbarRef} $thumbHeight={thumbHeight} />
      </ScrollbarTrack>
    </TodoItemsListContainer>
  );
});

export default TodoItemsList;
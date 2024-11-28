import { createSlice } from '@reduxjs/toolkit';
import { calculateProgress } from "../../utils/progress";

/**
 * 初始狀態
 * @type {Object}
 * @property {Array<Object>} todos - 待辦事項的數組。
 * @property {number} progress - 進度條的百分比進度，範圍 0-100。
 * @property {boolean} moveDoneToEnd - 是否將已完成事項移到列表底部。
 * @property {boolean} scrollToBottom - 控制滾動到最底部的開關。
 */

const initialState = {
  todos: [],
  progress: 0,
  moveDoneToEnd: false,
  scrollToBottom: false,
};

const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    /**
     * 新增待辦事項
     * @description 向待辦事項列表中添加新的待辦事項，並打開滾動到底部的開關。
     * @param {Object} state - 當前的 Redux 狀態。
     * @param {Object} action - 包含新增待辦事項數據的 action 對象。
     * @param {Object} action.payload - 新增待辦事項的數據。
     * @param {string|number} action.payload.id - 待辦事項的唯一標識。
     * @param {string} action.payload.text - 待辦事項的內容。
     * @param {boolean} action.payload.completed - 初始完成狀態。
     */
      addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.scrollToBottom = true;
      todolistSlice.caseReducers.setProgress(state);
    },
    
    /**
     * 切換待辦事項完成狀態
     * @description 更改指定待辦事項的完成狀態。
     * @param {Object} state - 當前的 Redux 狀態。
     * @param {Object} action - 包含待辦事項 ID 的 action 對象。
     * @param {string|number} action.payload - 要切換完成狀態的待辦事項 ID。
     */
      toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    
      // 更新進度條
      todolistSlice.caseReducers.setProgress(state);
    
      // 檢查是否還有完成的事項
      const hasCompletedTodos = state.todos.some((todo) => todo.completed);
      if (!hasCompletedTodos) {
        // 如果所有完成的事項被取消選中，將排序方式重置
        state.moveDoneToEnd = false;
        state.todos = state.todos.slice().sort((a, b) => a.id - b.id); // 重置回默認順序
      }
    },
    
    /**
     * 刪除待辦事項
     * @description 根據 ID 從待辦事項列表中移除指定項目。
     * @param {Object} state - 當前的 Redux 狀態。
     * @param {Object} action - 包含待刪除事項 ID 的 action 對象。
     * @param {string|number} action.payload - 要刪除的待辦事項 ID。
     */
      removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      
      // 更新進度條
      state.progress = calculateProgress(state.todos);
      
      // 檢查是否還有完成的事項
      const hasCompletedTodos = state.todos.some((todo) => todo.completed);
      if (!hasCompletedTodos) {
        // 如果所有完成的事項被刪除，將排序方式重置
        state.moveDoneToEnd = false;
        state.todos = state.todos.slice().sort((a, b) => a.id - b.id); // 重置回默認順序
      }
    },
    
   /**
     * 設置進度條
     * @description 根據待辦事項列表更新完成進度百分比。
     * @param {Object} state - 當前的 Redux 狀態。
    */
      setProgress: (state) => {
      state.progress = calculateProgress(state.todos);
    },

    /**
     * 重置滾動開關
     * @description 將滾動到底部的開關設置為 false。
     * @param {Object} state - 當前的 Redux 狀態。
     */
      resetScrollFlag: (state) => {
      state.scrollToBottom = false;
    },

    /**
     * 切換是否將完成的事項移動到列表底部
     * @description 切換排序方式，已完成事項移至底部或按新增順序排列。
     * @param {Object} state - 當前的 Redux 狀態。
     */
      toggleMoveDoneToEnd: (state) => {
      state.moveDoneToEnd = !state.moveDoneToEnd;
    
      if (state.moveDoneToEnd) {
        state.todos = state.todos.slice().sort((a, b) => a.completed - b.completed || a.id - b.id);
      } else {
        state.todos = state.todos.slice().sort((a, b) => a.id - b.id);
      }
    },
  
    /**
     * 重置 moveDoneToEnd 狀態
     * @description 將 moveDoneToEnd 設置為 false。
     * @param {Object} state - 當前的 Redux 狀態。
     */
      resetMoveDoneToEnd: (state) => {
        state.moveDoneToEnd = false;
        state.todos = state.todos.slice().sort((a, b) => a.id - b.id);
      },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  setProgress,
  toggleMoveDoneToEnd,
  sortTodos,
  resetScrollFlag,
  resetMoveDoneToEnd, 
} = todolistSlice.actions;

export default todolistSlice.reducer;

import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '../pages/home/homeSlice';
import todolistReducer from '../components/TodoList/todolistSlice';

// 將多個reducer組合
const rootReducer = combineReducers({
  home: homeReducer,
  todolist: todolistReducer,
});

export default rootReducer;
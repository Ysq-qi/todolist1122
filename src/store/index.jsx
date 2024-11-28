import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import throttle from "../utils/throttle";
import { loadState, saveState } from "./persistState";

const preloadedState = loadState(); // 加載本地保存的狀態

// 配置 Redux Store
const store = configureStore({
  reducer: rootReducer,
  preloadedState, // 將已加載的狀態作為初始狀態
});

// 訂閱狀態變化，並限制保存狀態的頻率
store.subscribe(
  throttle(() => {
    saveState({
      todolist: store.getState().todolist,
    });
  }, 1000)
);

export default store;

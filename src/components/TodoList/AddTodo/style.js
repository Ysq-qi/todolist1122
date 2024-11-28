import styled from 'styled-components';

export const AddTodoSection = styled.div`
  margin-top: auto; /* 自動將其推向容器底部 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: flex-start; /* 左對齊 */
  justify-content: center; /* 垂直居中 */
  width: 100%; /* 寬度佔滿父容器 */
  height: 100px; /* 長度100px */
`;

export const AddTodoText = styled.div`
  font-size: 18.5px; /* 字體大小 */
  font-family: "Arial", sans-serif; /* 使用無襯線字體 */
  color: #9aa3bc; /* 字體顏色 */
  margin-bottom: 8px; /* 與輸入行之間的距離 */
`;

export const InputRow = styled.div`
  display: flex; /* 將輸入框和按鈕排成一行 */
  align-items: center; /* 垂直居中對齊 */
  justify-content: flex-start; /* 靠左對齊 */
  width: 100%; /* 父容器寬度 */
`;

export const TodoInput = styled.input`
  width: 375px; /* 輸入框寬度 */
  height: 54px; /* 輸入框高度 */
  border: #e0e0e0; /* 邊框顏色 */
  border-radius: 4px; /* 圓角 */
  padding: 0 10px; /* 內邊距確保文字不貼邊 */
  font-size: 22px; /* 字體大小 */
  color: #333; /* 輸入框文字顏色 */
  outline: none; /* 移除點擊時的邊框高亮 */
  margin-right: 5.5px; /* 與按鈕之間的間距 */
`;

export const AddButton = styled.div`
  width: 65.5px; /* 按鈕寬度 */
  height: 54px; /* 按鈕高度 */
  background-color: #788fd2; /* 按鈕背景色 */
  border-radius: 5px; /* 圓角 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  cursor: pointer;

  /* 十字圖案 */
  .vertical-line,
  .horizontal-line {
    position: absolute;
    background-color: #ffffff; /* 十字顏色 */
  }

  .vertical-line {
    width: 3px; /* 垂直線寬度 */
    height: 20px; /* 垂直線高度 */
  }

  .horizontal-line {
    width: 20px; /* 水平線寬度 */
    height: 3px; /* 水平線高度 */
  }
`;
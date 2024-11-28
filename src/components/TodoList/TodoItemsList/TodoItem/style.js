import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 445px;
  height: 58px;
  background-color: #ffffff; /* 白色背景 */
  border-radius: 4px; /* 圓角 */
  padding: 0 16px; /* 左右內邊距 */
  margin-bottom: 10px; /* 每個項目的間距 */
  margin-top: 5px; /* 每個項目的間距 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加輕微陰影 */
  border-left: 5.5px solid #7a8cc8; /* 左邊邊框顏色和寬度 */
`;

export const Checkbox = styled.div`
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  i {
    width: 100%; /* 填滿父容器 */
    height: 100%; /* 填滿父容器 */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px; /* 圓角 */

    /* 根據 className 設置背景和外框樣式 */
    &.bi-check-square {
      font-size: 28px; /* 圖標大小 */
      background-color: #7293cc; /* 背景色 */
      color: #ffffff; /* 勾選的白色部分 */
      border-radius: 5px; /* 圓角 */
    }

    &.bi-square {
      font-size: 24px; /* 圖標大小 */
      background-color: #ffffff; /* 背景色為白色 */
      border: 1.5px solid #cdcdd0; /* 外框顏色 */
      color: transparent; /* 沒有內部顏色 */
    }
  }
`;

export const ItemText = styled.span`
  flex: 1; /* 占據中間空間 */
  margin: 20px; /* 與左右元素間距 */
  font-size: 17.5px;
  font-family: "Poppins", sans-serif;
  color: #9298ba; /* 字體顏色 */
  text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
`;

export const DeleteButton = styled.button`
  width: 25px; /* 按鈕寬度 */
  height: 25px; /* 按鈕高度 */
  border: none; /* 移除按鈕邊框 */
  background: none; /* 無背景色 */
  cursor: pointer; /* 滑鼠懸停時顯示手型 */
  display: flex; /* Flex 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  transition: color 0.3s ease, background-color 0.3s ease; /* 添加過渡效果 */
  border-radius: 100%; /* 圓角 */

  i {
    font-size: 25px; /* 圖標大小 */
    color: #9aa3bc; /* 初始顏色為灰色 */
    font-weight: bold; /* 字體加粗 */
    border-radius: 50%; /* 使按鈕圓滑 */
  }

  &:hover {
    i {
      color: #ffffff; /* 滑鼠懸停時的文字顏色 */
    }
    background-color: #7a8cc8; /* 滑鼠懸停時的背景顏色 */
  }
`;
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 父容器高度設置為視窗高度 */
  margin: 0;
  padding: 0;
`;

export const TodolistContainer = styled.div`
  width: 520px;
  height: 700px;
  background: linear-gradient(to bottom, #eef7fe, #ececff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 52px 45px 20px 30px; /* 上、右、下、左 */
  position: relative; /* 確保子元素可以使用絕對定位 */
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column; /* 確保 HeaderText 和 HeaderSubText 的原始布局維持垂直排列 */
`;

export const HeaderText = styled.h1`
  font-size: 30px; /* 標題大小 */
  font-family: "Arial", sans-serif; /* 使用無襯線字體 */
  color: #7a8cc8; /* 標題文字顏色 */
  margin: 0; /* 清除多餘的預設外邊距 */
`;

export const HeaderSubText = styled.p`
  font-size: 13px; /* 副標文字大小 */
  font-family: "Arial", sans-serif; /* 使用無襯線字體 */
  color: #a5afc0; /* 副標文字顏色 */
  margin: 7px 0px -3px 5px; /* 上、右、下、左 */
`;

export const Divider = styled.div`
  width: 445px; /* 分隔線長度 */
  height: 1.8px; /* 分隔線寬度 */
  background-color: #b5c1d1; /* 分隔線顏色 */
  margin: 15px 0 10px 0; /* 上: 15px, 右: 0, 下: 10px, 左: 0 */
  align-self: flex-start; /* 確保分隔線從容器左側對齊開始 */
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 277px;
  overflow-y: scroll; /* 強制顯示滾動條 */
  padding: 0;
  margin: 0;
  box-sizing: border-box; /* 確保內邊距不影響尺寸 */

  /* 自定義滾動條樣式 */
  &::-webkit-scrollbar {
    width: 6px; /* 滾動條寬度 */
  }
  &::-webkit-scrollbar-thumb {
    background: #cdd3f5; /* 滾動條顏色 */
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent; /* 滾動條背景透明 */
  }
`;

export const ToggleSection = styled.div`
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: flex-end; /* 子元素靠右對齊 */
  width: 450px; /* 整體容器寬度 */
  height: 30px; /* 整體容器高度 */
  margin: 0; /* 無外邊距 */
  padding: 0; /* 無內邊距 */
`;

export const ToggleText = styled.div`
  width: 190px; /* 文本部分寬度 */
  height: 30px; /* 文本部分高度 */
  font-family: "Arial", sans-serif; /* 使用無襯線字體 */
  font-size: 16px; /* 字體大小 */
  color: #9aa3bc; /* 字體顏色 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: flex-start; /* 靠左對齊 */
  margin: 0px 0.5px 0px 0px; /* 上、右、下、左 */
  padding: 0px 0.5px 0.5px 0px; /* 上、右、下、左 */
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 39px; /* 外部按鈕寬度 */
  height: 22px; /* 外部按鈕高度 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  margin: 0px 14px 0px 0px; /* 上、右、下、左 */

  /* 隱藏原始的 checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* 自定義滑動條 */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff; /* 初始背景色 */
    border-radius: 11px; /* 圓角樣式，為高度的一半 */
    transition: 0.4s;
  }

  /* 滑塊樣式 */
  .slider:before {
    position: absolute;
    content: "";
    height: 18px; /* 白色滑塊高度 */
    width: 18px; /* 白色滑塊寬度 */
    left: 2px; /* 確保滑塊在左側邊緣內對齊 */
    bottom: 2px; /* 確保滑塊在垂直方向內對齊 */
    background-color: #ccd3f4; /* 滑塊顏色 */
    border-radius: 50%; /* 滑塊圓形 */
    transition: 0.4s;
  }

  /* 當切換按鈕被選中時的效果 */
  input:checked + .slider {
    background-color: #7a8cc8; /* 選中後背景色 */
  }

  input:checked + .slider:before {
    transform: translateX(20px); /* 滑塊向右移動，剛好對應外部寬度 */
  }
`;

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
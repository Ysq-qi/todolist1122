import styled from 'styled-components';

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
  height: 21px; /* 外部按鈕高度 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  margin: 0px 14px 1.5px 0px; /* 上、右、下、左 */
  cursor: pointer; /* 鼠標變為指針 */
`;

export const Slider = styled.div`
  position: relative;
  width: 100%; /* 滑塊背景寬度與父容器一致 */
  height: 100%; /* 滑塊背景高度與父容器一致 */
  background-color: ${({ $isChecked }) => ($isChecked ? '#7a8cc8' : '#ffffff')};
  border-radius: 11px; /* 圓角樣式 */
  transition: background-color 0.4s; /* 平滑過渡背景色 */

  /* 小圓形滑塊 */
  &:before {
    content: "";
    position: absolute;
    height: 17.5px; /* 白色滑塊高度 */
    width: 16.5px; /* 白色滑塊寬度 */
    left: ${({ $isChecked }) => ($isChecked ? '20px' : '2px')};
    bottom: 1.8px; /* 確保滑塊在垂直方向內對齊 */
    background-color: ${({ $isChecked }) => ($isChecked ? '#ffffff' : '#ccd3f4')};
    border-radius: 50%; /* 滑塊圓形 */
    transition: left 0.4s, background-color 0.4s; /* 平滑過渡位置和顏色 */
  }
`;

export const ToggleLabel = styled.span`
  font-family: 'Arial', sans-serif; /* 字體樣式 */
  font-size: 14px; /* 字體大小 */
  color: ${({ $isChecked }) => ($isChecked ? '#7a8cc8' : '#9aa3bc')};
  transition: color 0.4s; /* 平滑過渡文字顏色 */
`;

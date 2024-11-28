import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 450px; /* 容器寬度 */
  height: 50px; /* 容器高度 */
  padding: 0 5px 0 0; /* 上、右、下、左 */
`;

export const ProgressLabel = styled.span`
  font-size: 18px; /* 調整字體大小 */
  font-family: "Arial", sans-serif; /* 字體樣式 */
  color: #8996b9; /* 字體顏色 */
  width: 35px; /* 寬度固定 */
  text-align: center; /* 文字置中 */
  margin-right: 13px; /* 與進度條間距 */
  margin-top: 1.5px; /* 與進度條間距 */
  line-height: 50px; /* 垂直居中對齊 */
`;

export const DynamicProgressBar = styled.div`
  width: 100%;
  height: 14px; /* 進度條高度 */
  background-color: #fffeff; /* 更新進度條背景顏色 */
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #96aef4; /* 更新填充顏色 */
  border-radius: 10px;
  transition: width 0.3s ease;
`;
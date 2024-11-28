
import styled from "styled-components";

/* 滾動容器 */
export const TodoItemsListContainer = styled.div`
 position: relative; /* 確保滾動條相對於自己定位 */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 277px; /* 設定內容高度 */
  overflow-y: auto; /* 開啟垂直滾動 */
  margin-right: -45px; /* 負邊距讓滾動條超出容器的 padding 限制 */
  padding-right: 45px; /* 保留內部空間，確保內容不被滾動條遮擋 */
  box-sizing: content-box; /* 確保寬度和 padding 分開計算 */
  overflow: hidden; /* 隱藏超出容器的所有內容 */
`;

/* 內容容器 */
export const ContentContainer = styled.div`
  overflow-y: ${({ $hasContent }) => ($hasContent ? "scroll" : "hidden")};
  height: 100%;
  box-sizing: content-box; /* 確保寬度和 padding 分開計算 */

  /* 隱藏原生滾動條 */
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none; /* 隱藏原生滾動條 */
  }
`;

/* 自定義滾動條的外殼 */
export const ScrollbarTrack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px; /* 滾動條寬度 */
  height: 100%;
  background: transparent; /* 背景透明 */
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;

/* 滾動條滑塊 */
export const ScrollbarThumb = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: ${({ $thumbHeight }) => $thumbHeight || 50}px;
  background: #cdd3f5; /* 滑塊顏色 */
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s;
  user-select: none; /* 禁用文字選中 */

  &:hover {
    background: #aab2e1; /* 滑鼠懸停時變色 */
  }
`;
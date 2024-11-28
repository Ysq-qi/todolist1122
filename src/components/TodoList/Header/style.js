import styled from "styled-components";

export const HeaderContainer = styled.div`
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

import styled from 'styled-components';

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
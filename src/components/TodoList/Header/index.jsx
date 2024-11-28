import React from "react";
import { HeaderContainer, HeaderText, HeaderSubText } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Todo List</HeaderText>
      <HeaderSubText>Add things to do</HeaderSubText>
    </HeaderContainer>
  );
};

export default Header;
import React from 'react';
import { TodolistContainer } from './style';
import Header from './Header';
import Divider from './Divider';
import ProgressBar from './ProgressBar';
import TodoItemsList from './TodoItemsList';
import Toggle from './Toggle';
import AddTodo from './AddTodo';

const TodoList = () => {
  return (
    <TodolistContainer>
      <Header />
      <Divider />
      <ProgressBar />
      <TodoItemsList />
      <Divider />
      <Toggle />
      <AddTodo />
    </TodolistContainer>
  );
};

export default TodoList;

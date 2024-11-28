import React from 'react';
import { 
  HomeContainer,
} from './style';
import TodoList from "../../components/TodoList";

const Home = () => {
  return (
  <HomeContainer>
    <TodoList />
  </HomeContainer> 
  );
};

export default Home;
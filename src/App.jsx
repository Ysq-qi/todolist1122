import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/style'
import Home from './pages/home';

const App = () => {
    return (
      <>
        <GlobalStyles />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </>
    );
  };

  export default App;
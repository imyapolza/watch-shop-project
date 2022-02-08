import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Cart" element={<Cart />} exact />
      </Routes>
    </div>
  );
}

export default App;

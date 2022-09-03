
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Pages from './pages/Pages';




function App() {
  return (
        <Routes>
          <Route path="/" element={<Pages />}/>
        </Routes>

  );
}

export default App;

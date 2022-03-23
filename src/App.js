/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Routes, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import FormsWinners from './Components/FormsWinners';
import MainChart from './Pages/MainChart';
import SelectCategorias from './Pages/SelectCategorias';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainChart />} />
          <Route path="FormsWinners" element={<SelectCategorias />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

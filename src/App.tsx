import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './Components/NavigationBar';
import { WelcomePage } from './Pages/WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="home" element={<WelcomePage></WelcomePage>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './Components/NavigationBar';
import { WelcomePage } from './Pages/WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SellerPage } from './Pages/SellerPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="home" element={<WelcomePage></WelcomePage>}/>
        <Route path="sellers" element={<SellerPage></SellerPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

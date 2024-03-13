import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './Components/NavigationBar';
import { WelcomePage } from './Pages/WelcomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SellerPage } from './Pages/SellerPage';
import { ProductPage } from './Pages/ProductPage';
import { PageNotFoundPage } from './Pages/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
      <Routes>
        <Route path="home" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="sellers" element={<SellerPage></SellerPage>}></Route>
        <Route path="products" element={<ProductPage></ProductPage>}></Route>
        <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
        <Route path="*" element={<PageNotFoundPage></PageNotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

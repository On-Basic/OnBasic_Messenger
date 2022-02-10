import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from 'Pages/LoginPage';
import MainPage from 'Pages/MainPage';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<LoginPage />} />
                <Route exact path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
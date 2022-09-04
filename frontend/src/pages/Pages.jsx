import React from 'react';
// import HomeCarousel from '../components/HomeCarousel';
import Navbar from '../components/Navbar';
import Home from './Home';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Pages() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
       
    );
}

export default Pages;
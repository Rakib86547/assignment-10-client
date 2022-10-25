import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/Footer/Footer';
import Header from '../pages/share/Header/Header';
import LeftSideNav from '../pages/share/LeftSideNav/LeftSideNav';
import main from './Main.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='home-container px-4'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
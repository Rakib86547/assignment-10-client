import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/Footer/Footer';
import Header from '../pages/share/Header/Header';
import LeftSideNav from '../pages/share/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-[1fr 3fr]'>
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
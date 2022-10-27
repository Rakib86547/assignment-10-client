import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../assest/logo-1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Header.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUser, } from "react-icons/fa";
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='' bg='dark' variant='dark'>
                <Container>
                    <Link to='/' className='flex'>
                        <img className='w-[30px] mr-1' src={logo1} alt="" />
                        Developer Zone
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/blog">Blog</Link>
                        </Nav>
                        <Nav>
                            {user?.uid ?
                                <>
                                    <span className='name'>{user?.displayName}</span>
                                    <button className='logout-btn' variant="outline-warning" onClick={handleLogOut}>Logout</button>
                                </>
                                :
                                <>
                                    <Link to='/signup'>
                                        <Button variant="outline-info">Sign Up</Button></Link>
                                    <Link to='/login'>
                                        <Button className='ms-2' variant="outline-warning">Login</Button>
                                    </Link>
                                </>

                            }

                            <Link>
                                {
                                    user?.photoURL ? <img className='image-header' style={{ width: '30px' }} src={user?.photoURL} alt="" />
                                        :
                                        <FaUser></FaUser>
                                }
                            </Link>
                        </Nav>

                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
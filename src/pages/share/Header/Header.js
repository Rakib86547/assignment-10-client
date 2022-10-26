import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../assest/logo-1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Header.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

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
                    <Navbar.Brand href="#home" className='flex'>
                        <img className='w-[30px] mr-1' src={logo1} alt="" />
                        Developer Zone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/">Courses</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/blog">Blog</Link>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <img src={user?.photoURL} className='w-[30px]' alt="" />
                                        <button onClick={handleLogOut} variant='outline-danger'>Logout</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/signup'>
                                            <Button variant="outline-info">Sign Up</Button></Link>
                                        <Link to='/login'>
                                            <Button className='ms-2' variant="outline-warning">Login</Button>
                                        </Link>
                                        <FaUserAlt className='text-white mt-2 ml-2'></FaUserAlt>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
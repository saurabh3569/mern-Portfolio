import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

const Header = () => {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem("token")
        navigate('/')
    }

    const loginHandler = () => {
        navigate('/login')
    }

    return (
        <Navbar className='navbarMain' expand="lg">
            <Container>
                <Link className='navbar-brand' to="/">SM</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/projects">Projects</Link>
                        <Link className='nav-link' to="/contact">contact</Link>

                        <NavDropdown title='welcome' id="basic-nav-dropdown">
                            {token &&
                                <>
                                    <Link className='dropdown-item' to="/addproject">Add Projects</Link>
                                    <Link className='dropdown-item' to="/allproject">All Projects</Link>
                                    <Link className='dropdown-item' to="/update/aboutme">Update AboutMe</Link>
                                    <Link className='dropdown-item' to="/messages">Messages</Link>
                                </>}
                            {token ? <Button onClick={logoutHandler} className='dropdown-item text-danger'>
                                Logout
                            </Button>
                                : <Button onClick={loginHandler} className='dropdown-item'>
                                    Login
                                </Button>}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
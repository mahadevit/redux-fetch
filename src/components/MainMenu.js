import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainMenu = () => {
    const {id} =useParams();
    const state1=useSelector((state)=>state.handlerCart);
    
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>            
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success me-2">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav>
            <NavLink to='/login' className="btn btn-outline-dark me-2">
                <i className='fa fa-sign-in me-1'></i>Login</NavLink>
            <NavLink to='/register' className="btn btn-outline-dark me-2">
            <i className='fa fa-user-plus me-1'></i>Register</NavLink>
            <NavLink to='/cart' className="btn btn-outline-dark me-2">
            <i className='fa fa-shopping-cart me-1'></i>Cart{state1}</NavLink>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default MainMenu

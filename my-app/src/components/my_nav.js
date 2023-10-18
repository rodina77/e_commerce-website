
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/counterContext';

export default function My_Nav() {
  const { counter, setcounter } = useContext(Context);

  return (
    <Navbar expand="lg" id='navo' className="navbar bg-gradient fixed-top mb-5 shadow navbar-expand-lg">
      <Container className='text-white'>
        <Navbar.Brand className='text-white' href="#home"><img src='assets/images/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962-removebg-preview.png' width="15%"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="Nav-link text-white text-decoration-none p-3">Home</NavLink>
            <NavLink to="/Shop" className="Nav-link text-white text-decoration-none p-3">Shop</NavLink>
            <NavLink to="/About" className="Nav-link text-white text-decoration-none p-3">About Us</NavLink>
            <NavLink to="/Team" className="Nav-link text-white text-decoration-none p-3">Our Team</NavLink>
            <NavLink to="/Form" className="Nav-link text-white text-decoration-none p-3">Contact us</NavLink>
            <NavLink to="/Cart" className="Nav-link text-white text-decoration-none p-3">
            <div>
          
              <span id="spann" className='p-3 rounded-circle'> <i id='cartt' class="bi bi-cart2"></i>{counter} </span>
       
            </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

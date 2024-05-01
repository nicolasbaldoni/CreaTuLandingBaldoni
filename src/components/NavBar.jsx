import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/LogoDigitalBest.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to='/' as={Link}><img src={Logo} width="250" height="51" alt=""></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to='/' as={Link} >Home</Nav.Link>
            {/*<Nav.Link href="#productos">Productos</Nav.Link>*/}
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item to='/category/electronics' as={Link}>Electronics</NavDropdown.Item>
              <NavDropdown.Item to='/category/jewelery' as={Link}>Jewelery</NavDropdown.Item>
              <NavDropdown.Item to="/category/men's clothing" as={Link}>Men's clothing</NavDropdown.Item>
              <NavDropdown.Item to="/category/women's clothing" as={Link}>Women's clothing</NavDropdown.Item>              
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav1() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar 
          key={expand} 
          expand={expand} 
          className="bg-primary shadow-sm mb-3"
          variant="dark"
        >
          <Container>
            {/* Logo / Brand */}
            <Navbar.Brand as={NavLink} to="/" className="fw-bold text-light">
              🛒 ShopEasy
            </Navbar.Brand>
            
            {/* Offcanvas Toggle Button */}
            <Navbar.Toggle 
              aria-controls={`offcanvasNavbar-expand-${expand}`} 
              className="border-0"
            />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title 
                  id={`offcanvasNavbarLabel-expand-${expand}`} 
                  className="fw-bold text-primary"
                >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>

              {/* Navigation Links */}
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="nav-link text-dark fs-5 mx-2 text-white ">
                    🏠 Home
                  </NavLink>
                  <NavLink to="/category" className="nav-link text-dark fs-5 mx-2 text-white">
                    📦 Category
                  </NavLink>
                  <NavLink to="/search_history" className="nav-link text-dark fs-5 mx-2 text-white">
                  🔄 Search history
                  </NavLink>
                  <NavLink to="/cart" className="nav-link text-dark fs-5 mx-2 text-white">
                    🛍️ Cart
                  </NavLink>
                  <NavLink to="/Profile" className="nav-link text-dark fs-5 mx-2 text-white">
                    Profile
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Nav1;

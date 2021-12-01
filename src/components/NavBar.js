import "./NavBar.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import { logOut, isAuthenticated } from "../services/authService";


const NavBar = () => {
  const user = isAuthenticated();
  return (
    <Navbar className="nav-style" sticky="top" collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Link to="/" className="restaurant-name">Bar&Boeuf</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              user.role === "ADMIN" && (
                <>
                <Link className="links" to="/newpreshift">Add Preshift</Link>
                </>
              )
            }
            </Nav><br/>
          
            <Nav className="links">
            {user ? (
              <>

              <button onClick={logOut} className="btn btn-outline-light">
              Sign Out
              </button>
              </>
            ) : (
              <>
              <Link to="/login" className="btn btn-outline-light">Log In</Link><br/>
              <Link to="/signup" className="btn btn-outline-light">Sign Up</Link><br/>
              </>
            )}
          

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

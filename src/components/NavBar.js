import "./NavBar.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import { logOut, isAuthenticated } from "../services/authService";


const NavBar = () => {
  const user = isAuthenticated();
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">Restaurant</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              user.role === "ADMIN" && (
                <>
                <Link to="/newpreshift">Add Preshift</Link>
                </>
              )
            }
            </Nav>
          
            <Nav className="links">
            {user ? (
              <>
              <a>
                Hi, {user.name}
              </a>
              <button onClick={logOut} className="btn btn-outline-light">
              Sign Out
              </button>
              </>

            ) : (
              <>
              <Link to="/login">Log In</Link><br/>
              <Link to="/signup">Sign Up</Link><br/>
              </>
            )}
          

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

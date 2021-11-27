import "./NavBar.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Preshift" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                New Preshift
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Edit Preshift
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Current
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import { UserButton } from "@clerk/nextjs";

// https://react-bootstrap.netlify.app/docs/components/navbar
function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">CSH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <UserButton />
            <Nav.Link as={Link} href="/sign-in">
              Login
            </Nav.Link>
            <Nav.Link as={Link} href="/sign-up">
              Register
            </Nav.Link>
            <NavDropdown title="Tickets" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/tickets/football">
                Football
              </NavDropdown.Item>
              <NavDropdown.Item href="/tickets/soccer">Soccer</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link as={Link} href="/venues">
              Venues
            </Nav.Link>
            <Nav.Link as={Link} href="/cart">
              CART
              {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
            </Nav.Link>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 float-right"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

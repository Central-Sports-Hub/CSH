"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// eslint-disable-next-line
import { UserButton, useUser } from "@clerk/nextjs";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";

function Navigation() {
  const { isSignedIn } = useUser();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">CSH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <UserButton />
            {isSignedIn ? (
              <Nav.Link as={Link} href="/dashboard">
                Dashboard
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} href="/sign-in">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} href="/sign-up">
                  Register
                </Nav.Link>
              </>
            )}
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
          </Nav>
          <Nav.Link as={Link} href="/cart" className="me-5">
            Cart
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

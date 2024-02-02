"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

// import { useSearchParams } from "next/navigation";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";

function Navigation() {
  const { isSignedIn } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const { push } = useRouter();

  return (
    <Navbar bg="black" data-bs-theme="dark">
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

              <NavDropdown.Item href="/tickets/all_tickets">All Sports</NavDropdown.Item>
              <NavDropdown.Item href="/tickets/basketball">Basketball</NavDropdown.Item>
              <NavDropdown.Item href="/tickets/football">Football</NavDropdown.Item>
              <NavDropdown.Item href="/tickets/hockey">Hockey</NavDropdown.Item>
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
          <Nav.Link
            as={Link}
            href="/cart"
            className="me-5"
            style={{ color: "gray" }}
          >
            Cart
          </Nav.Link>
          <div>
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                push(`/search?query=${searchQuery}`);
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 float-right"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => push(`/search?query=${searchQuery}`)}
              >
                Search
              </Button>
            </Form>
            <ul>
              {/* {filteredData.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))} */}
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

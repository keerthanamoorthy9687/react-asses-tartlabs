import React from "react";
import { Outlet } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Button
} from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <div className="App-Header py-3">
        <div className="container">
          <Navbar variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/posts">Posts</Nav.Link>
                  <Nav.Link href="/posts/new">Add Posts</Nav.Link>
                  <NavDropdown title="Others" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      <div className="App-Container container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

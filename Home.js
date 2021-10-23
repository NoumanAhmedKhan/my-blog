import React from "react";
import './App.css';
import { Navbar, Nav, NavDropdown, Form, Container, FormControl, Button} from 'react-bootstrap';

function Home(){
    return(
        <div>
            {/* Start of header */}
            <header>
            <Navbar bg="light" className= "shadow-sm py-3" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Personal Blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" className="flex-lg-grow-0">
      <Nav
        className="me-auto mt-lg-2 my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>

        <Nav.Link href="#action1" className="h6">Contact</Nav.Link>
        <Nav.Link href="#action2" className="h6">About Us</Nav.Link>
     
        <NavDropdown title="Catogries" className="marjin-right h6" id="navbarScrollingDropdown" >
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Something else here </NavDropdown.Item>
        </NavDropdown>
      
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 border-0"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>   
            </header>
            {/* end of header */}
        </div>
    )
}

export default Home;
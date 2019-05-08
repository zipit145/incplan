import React from 'react';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { Image, Navbar, Nav, NavItem, NavDropdown, FormControl} from 'react-bootstrap'

const Header = (props) => {
  
    return (


<Navbar className="header" expand="lg">
  <Container>
    {
      console.log(props.data2)
    }
    <Row className="headerRow">
      <Col xs={4}>
        <Image src="https://www.incplan.net/wp-content/uploads/2014/03/logo.png"/>
      </Col>
      <Col lg={4} xs={4}>
      
      </Col>
      <Col xs={4}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Col>
    </Row>
  </Container>
</Navbar>

    )
  }
  
  export default Header
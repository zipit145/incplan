import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

const Home = (props) => {
  return (
    <>
          <Container>
            <Row className="homePageMessage">
              <Col lg={12}>
                <Row  className="homePageMessageSub">
                  Join the thousands of American and International clients
                  who have enjoyed our individualized service since 1990
                </Row>
              </Col>
              <Col lg={12}>
                <Row>
                -BENEFITS OF INCORPORATING
                -WHY DELAWARE ?
                -OUR LOW FEES
                </Row>
                <Row>
                INTERNATIONAL CLIENTS
                CORPORATE BANK ACCOUNTS
                INCORPORATE NOW!
                </Row>
                <Row>
                MAIL FORWARDING SERVICES
                EUROPEAN BUSINESS FORMATIONS
                MERCHANT SERVICES
                </Row>
                <Row>
                  who have enjoyed our individualized service since 1990
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={5}></Col>
              <Col lg={2}>
              <Row>
                <Button className="buttonLogin" variant="primary" onClick={props.handleLogInShow}>
                  Login
                </Button>
              </Row>
              <Row>
                <Button className="buttonLogin" variant="primary" onClick={props.handleSignUpShow}>
                  Sign Up
                </Button>
              </Row>
              </Col>
            </Row>
          </Container>

      <Modal show={props.signUpShow} onHide={props.handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleSignUpClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleSignUpClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={props.logInShow} onHide={props.handleLogInClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleLogInClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleLogInClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
  
  export default Home
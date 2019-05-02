import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import Login from './Login.js'
import Signup from './Signup.js'

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
              </Col>
            </Row>
            <Row>
              <Col lg={5}></Col>
              <Col lg={2}>
              <Row>
                <Button variant="dark" className="buttonLogin" onClick={props.handleLogInShow}>
                  Login
                </Button>
              </Row>
              <Row>
                <Button variant="dark" className="buttonLogin" onClick={props.handleSignUpShow}>
                  Sign Up
                </Button>
              </Row>
              </Col>
            </Row>
          </Container>
          <Login 
            logInShow={props.logInShow}
            signUpShow={props.signUpShow}
            handleLogInClose={props.handleLogInClose}
            handleLogInShow={props.handleLogInShow}
            handleSignUpClose={props.handleSignUpClose}
            handleSignUpShow={props.handleSignUpShow}
          />
          <Signup 
            logInShow={props.logInShow}
            signUpShow={props.signUpShow}
            handleLogInClose={props.handleLogInClose}
            handleLogInShow={props.handleLogInShow}
            handleSignUpClose={props.handleSignUpClose}
            handleSignUpShow={props.handleSignUpShow}
          />
    </>
  );
  }
  
  export default Home
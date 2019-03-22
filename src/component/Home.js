import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const Home = (props) => {
  return (
    <>
      <div className="homePageButtons">
        <Button variant="primary" onClick={props.handleLogInShow}>
        Login
        </Button>
        <Button variant="primary" onClick={props.handleSignUpShow}>
        Sign Up
        </Button>
      </div>
      <Modal show={props.signUpShow} onHide={props.handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
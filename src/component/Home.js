import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const Home = (props) => {
  return (
    <>
    <div className="homePageButtons">
      <Button variant="primary" onClick={props.handleShow}>
       Login
      </Button>
      <Button variant="primary" onClick={props.handleShow}>
       Sign Up
      </Button>
    </div>


      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
  
  export default Home
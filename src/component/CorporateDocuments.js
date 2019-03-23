import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';

const CorporateDocuments = (props) => {
    return (
        <Modal show={props.corporateDocumentsShow} onHide={props.handleCorporateDocumentsClose}>
        <Modal.Header closeButton>
          <Modal.Title>CorporateDocuments</Modal.Title>
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
          <Button variant="secondary" onClick={props.handleCorporateDocumentsClose}>
            Close
          </Button>
          <Button variant="primary"  href="/client">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  
  export default CorporateDocuments
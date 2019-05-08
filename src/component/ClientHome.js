import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import CorporateDocuments from './CorporateDocuments.js'
import Signup from './Signup.js'

const ClientHome = (props) => {
    return (
      <div>
        <Container>
          <Row>
            
            <Col lg={2}>
            <Row>
              <Button className="buttonClientHome" variant="dark" onClick={props.handleCorporateDocumentsShow}>Corporate Documents</Button>
            </Row>
            <Row>
              <Button className="buttonClientHome" variant="dark" onClick={props.handleCorporateDocumentsShow}>Mail Forwarding</Button>
            </Row>
            <Row>
              <Button className="buttonClientHome" variant="dark" onClick={props.handleCorporateDocumentsShow}>Create New Company</Button>
            </Row>
            <Row>
              <Button className="buttonClientHome" variant="dark" onClick={props.handleCorporateDocumentsShow}>Edit profile</Button>
            </Row>
            </Col>
            <Col className="userDashboard" lg={10}>
              <Row>
                <Col lg={2}></Col>
                <Col lg={6}>              
                  <Row>Welcome Teddy Luben!</Row>
                  <Row>You have 13 new work items to address!</Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <CorporateDocuments
          data={props.data}
          corporateDocumentsShow={props.corporateDocumentsShow}
          handleCorporateDocumentsClose={props.handleCorporateDocumentsClose}
          handleCorporateDocumentsShow={props.handleCorporateDocumentsShow}
          corporateDocumentsShowFirst={props.corporateDocumentsShowFirst}
          handleCorporateDocumentsShowFirstClose={props.handleCorporateDocumentsShowFirstClose}
        />



      </div>
    )
  }
  
  export default ClientHome
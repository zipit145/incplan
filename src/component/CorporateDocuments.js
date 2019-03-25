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
          <Modal.Title>My Companies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.corporateDocumentsShowFirst ? 
          <Form>
            {props.data.users.companies.map(company => {
                return (
                <Container>
                <div className="corporateDocumentCard" >
                  <div className="corporateDocumentTitle" onClick={props.handleCorporateDocumentsShowFirstClose}>{company.name}</div>
                  {company.corporateDocuments.map(document => {
                    return (
                      <div>
                        <div>{document.name}</div>
                        <img className="corporateDocumentImg" src={document.image}/>
                      </div>
                    )
                  })}
                </div>
                </Container>
                )
            })}
          </Form>
          : 
          <Form>
              <Container>
              <div className="corporateDocumentCard" >
                <div className="corporateDocumentTitle" onClick={props.handleCorporateDocumentsShowFirstClose}>{props.data.users.companies[0].name}</div>
                {props.data.users.companies[0].corporateDocuments.map(document => {
                  return (
                    <div>
                      <div>{document.name}</div>
                      <img className="corporateDocumentImg" src={document.image}/>
                    </div>
                  )
                })}
              </div>
              </Container>
        </Form>
          }
        </Modal.Body>

      </Modal>
    )
  }
  
  export default CorporateDocuments
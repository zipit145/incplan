import React, { Component } from 'react';
import './App.css';
import Home from './component/Home'
import ClientHome from './component/ClientHome'
import Header from './component/Header'
import Footer from './component/Footer'
//import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      test:"test"
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div className="App">
            <Router>
              <Header />
              <Route exact path="/" render={(props) => <Home test ={this.state.test} show={this.state.show} handleClose={this.handleClose} handleShow={this.handleShow}/>} />
              <Route path='/client' render={
                <ClientHome handleClose={this.handleClose} handleOpen={this.handleOpen}/>
              }/>
              <Footer />
            </Router>
      </div>
    );
  }
}

export default App;

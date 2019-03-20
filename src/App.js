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





class App extends Component {
  render() {
    return (
      <div className="App">

            <Header />
            <Home />
            <ClientHome />
            <Button />
            <Footer />




      </div>
    );
  }
}

export default App;

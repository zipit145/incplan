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
  render() {
    return (
      <div className="App">
            <Router>
              <Header />
              <Route exact path="/" component={Home} />
              <Route path='/client' component={ClientHome}/>
              <Button variant="dark" href="/client">Link</Button>
              <Footer />
            </Router>
      </div>
    );
  }
}

export default App;

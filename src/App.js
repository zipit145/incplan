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

    this.handleLogInShow = this.handleLogInShow.bind(this);
    this.handleSignUpShow = this.handleSignUpShow.bind(this);
    this.handleLogInClose = this.handleLogInClose.bind(this);
    this.handleSignUpClose = this.handleSignUpClose.bind(this);

    this.state = {
      logInShow: false,
      signUpShow: false,
    };
  }

  handleLogInClose() {
    this.setState({ logInShow: false });
  }
  handleSignUpClose() {
    this.setState({ signUpShow: false });
  }

  handleSignUpShow() {
    this.setState({ signUpShow: true });
  }
  handleLogInShow() {
    this.setState({ logInShow: true });
  }
  render() {
    return (
      <div className="App">
            <Router>
              <Header />
              <Route exact path="/" render={
                (props) => <Home
                  logInShow={this.state.logInShow}
                  signUpShow={this.state.signUpShow}
                  handleLogInClose={this.handleLogInClose}
                  handleLogInShow={this.handleLogInShow}
                  handleSignUpClose={this.handleSignUpClose}
                  handleSignUpShow={this.handleSignUpShow}/>
              } />
              <Route exact path='/client' render={
                (props) => <ClientHome
                  logInShow={this.state.logInShow}
                  signUpShow={this.state.signUpShow}
                  handleLogInClose={this.handleLogInClose}
                  handleLogInShow={this.handleLogInShow}
                  handleSignUpClose={this.handleSignUpClose}
                  handleSignUpShow={this.handleSignUpShow}/>
              } />
              <Footer />
            </Router>
      </div>
    );
  }
}

export default App;

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
    this.handleMailForwardingShow = this.handleMailForwardingShow.bind(this);
    this.handleCorporateDocumentsShow = this.handleCorporateDocumentsShow.bind(this);
    this.handleMailForwardingClose = this.handleMailForwardingClose.bind(this);
    this.handleCorporateDocumentsClose = this.handleCorporateDocumentsClose.bind(this);
    this.handleCreateNewCompanyShow = this.handleCreateNewCompanyShow.bind(this);
    this.handleEditProfileShow = this.handleEditProfileShow.bind(this);
    this.handleCreateNewCompanyClose = this.handleCreateNewCompanyClose.bind(this);
    this.handleEditProfileClose = this.handleEditProfileClose.bind(this);

    this.state = {
      logInShow: false,
      signUpShow: false,
      mailForwardingShow: false,
      corporateDocumentsShow: false,
      createNewCompanyShow: false ,
      editProfileShow: false,
      data: {
        users: {
            id: 1,
            userName: "teddy",
            picture: "to do",
            companies: [
              {
                id: 1,
                name: "Inc. Plan",
                corporateDocuments: [
                  {
                    id: 1,
                    name: "tax stuff 1",
                    image: "url to do",
                  },
                  {
                    id: 2,
                    name: "tax stuff 2",
                    image: "url to do",
                  },
                ]
              },
              {
                id: 2,
                name: "Inc. Plan subsidiary",
                corporateDocuments: [
                  {
                    id: 1,
                    name: "tax stuff 1",
                    image: "url to do",
                  },
                  {
                    id: 2,
                    name: "tax stuff 2",
                    image: "url to do",
                  }
                ]
              }
            ],
            mail: [
              {
                id: 1,
                name: "Inc. Plan",
                corporateDocuments: [
                  {
                    id: 1,
                    name: "mail stuff 1",
                    image: "url to do",
                  },
                  {
                    id: 2,
                    name: "mail stuff 2",
                    image: "url to do",
                  },
                ]
              },
              {
                id: 2,
                name: "Inc. Plan subsidiary",
                corporateDocuments: [
                  {
                    id: 1,
                    name: "mail stuff 1",
                    image: "url to do",
                  },
                  {
                    id: 2,
                    name: "mail stuff 2",
                    image: "url to do",
                  }
                ]
              }
            ],
        },
      }
    };
  }
  

  handleLogInShow() {
    this.setState({ logInShow: true });
  }
  handleLogInClose() {
    this.setState({ logInShow: false });
  }
  handleSignUpShow() {
    this.setState({ signUpShow: true });
  }
  handleSignUpClose() {
    this.setState({ signUpShow: false });
  }
  handleMailForwardingShow() {
    this.setState({ mailForwardingShow: true });
  }
  handleMailForwardingClose() {
    this.setState({ mailForwardingShow: false });
  }
  handleCorporateDocumentsShow() {
    this.setState({ corporateDocumentsShow: true });
  }
  handleCorporateDocumentsClose() {
    this.setState({ corporateDocumentsShow: false });
  }
  handleCreateNewCompanyShow() {
    this.setState({ createNewCompanyShow: true });
  }
  handleCreateNewCompanyClose() {
    this.setState({ createNewCompanyShow: false });
  }
  handleEditProfileShow() {
    this.setState({ editProfileShow: true });
  }
  handleEditProfileClose() {
    this.setState({ editProfileShow: false });
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
                  mailForwardingShow={this.state.mailForwardingShow}
                  corporateDocumentsShow={this.state.corporateDocumentsShow}
                  createNewCompanyShow={this.state.createNewCompanyShow}
                  editProfileShow={this.state.editProfileShow}
                  data={this.state.data}

                  handleMailForwardingClose={this.handleMailForwardingClose}
                  handleMailForwardingShow={this.handleMailForwardingShow}
                  handleCorporateDocumentsClose={this.handleCorporateDocumentsClose}
                  handleCorporateDocumentsShow={this.handleCorporateDocumentsShow}
                  handleCreateNewCompanyClose={this.handleCreateNewCompanyClose}
                  handleCreateNewCompanyShow={this.handleCreateNewCompanyShow}
                  handleEditProfileClose={this.handleEditProfileClose}
                  handleEditProfileShow={this.handleEditProfileShow}
                  />
              } />
              <Footer />
            </Router>
      </div>
    );
  }
}

export default App;

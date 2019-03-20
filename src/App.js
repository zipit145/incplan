import React, { Component } from 'react';
import './App.css';
import Home from './component/Home'
import ClientHome from './component/ClientHome'
import Header from './component/Header'
import Footer from './component/Footer'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <ClientHome />
        <Footer />
      </div>
    );
  }
}

export default App;

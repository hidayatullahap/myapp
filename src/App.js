import React, { Component } from 'react';
import Axios from 'axios';

import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

var Loader = require('react-loader');

class App extends Component {

  constructor() {
    super();
    this.getImage = this.getImage.bind(this);
    this.state = {
      pictures: [],
      isLoading: false,
    };
    console.log(this.state.isLoading);
  }

  async getImage() {
    this.setState({
      isLoading: true
    });

    try {
      let { data }  = await Axios.get('https://dog.ceo/api/breeds/image/random')
      let pictures = [data.message]
      this.setState({
        pictures
      })
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={this.getImage} color="warning">Fetch!</Button>
        <br/><br/>
        <div>
          {this.state.isLoading ? <Loader /> : (this.state.pictures[0] && <img width="500" height="377" src={this.state.pictures[0]}/> ) }
        </div>
      </div>
    );
  }
}

export default App;

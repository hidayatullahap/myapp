import React, { Component } from 'react';
import Axios from 'axios';

import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

import PersonList from './Component/PersonList';
import PersonInput from './Component/PersonInput';

const Loader = require('react-loader');
//const Aftership = require('aftership')('80fb9c38-965a-4adc-ba8d-365024843f05');

class App extends Component {

  constructor() {
    super();
    this.getImage = this.getImage.bind(this);
    this.state = {
      pictures: ["https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&h=350"],
      isLoading: false,
    };
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

  createTable = () => {
    let table = []
    var tdKey = 0;
    // Outer loop to create parent
    for (let i = 0; i < 5; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 3; j++) {
        children.push(<td key={tdKey}>{`Column ${j + 1}`}</td>)
        tdKey++;
      }
      //Create the parent and add the children
      table.push(<tr key={tdKey}>{children}</tr>)
    }
    return table
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MyApp</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <Button onClick={this.getImage} color="warning">Gibe me dogy!</Button>
        <br/><br/>
        <div>
          {this.state.isLoading ? <Loader /> : (this.state.pictures[0] && <img className="img-doggy" alt="dog" width="500" height="377" src={this.state.pictures[0]}/> ) }
        </div>
        <br/>

        <div className="row margin-content">
          <div className="col-sm-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>Head 1</td>
                  <td>Head 2</td>
                  <td>Head 3</td>
                </tr>
              </thead>
              <tbody>{this.createTable()}</tbody>
            </table>
          </div>

          <div className="col-sm-5">
            <PersonList/>
          </div>

          <div className="col-sm-3">
            <PersonInput/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

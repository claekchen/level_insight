import React, { Component } from 'react';
import { Button } from 'antd';
import ListForLevel from './components/listForLevel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListForLevel />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component{
  foo = () => 'Bar';
  render(){
    const name = 'Jone Doe';
    const loading = false;
    const showName = true;
    return (
      <div className='App'>
        <Navbar>Sharad</Navbar>
      </div>
    )

    }
}

export default App;

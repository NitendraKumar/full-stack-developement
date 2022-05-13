import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThirdClassComponent from './components/Learning-basics/ClassComponent';
import FourthComponent from './components/Learning-basics/FunctionComponent';
import TestComponent from './components/Learning-basics/test';


class App extends Component  {
  render (){
    return (
      <div className="App">
        My Hello World
        <FirstComponent/>
        <SecondComponent/>
        <ThirdClassComponent />
        <FourthComponent />
        <TestComponent />
      </div>
    );
  }
}

class FirstComponent extends Component{
  render(){
    return (
      <div className='firstComponent'>
        First Component as traditional component
      </div>
    );
  }
}

function SecondComponent(){
  return (
    <div className='secondComponent'>
      Second Component as functional component

    </div>
  );
}


export default App;

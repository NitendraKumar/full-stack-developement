import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoApp from './components/Todo/TodoApp';
//import 'D:/PERSONAL_DATA/React-Learning/full-stack-developement/todo-app/node_modules/bootstrap/dist/css/bootstrap.css'
class App extends Component  {
  render (){
    return (
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
      </div>
    );
  }
}

export default App;
//import Counter from './components/Counter/Counter';

// import ThirdClassComponent from './components/Learning-basics/ClassComponent';
// import FourthComponent from './components/Learning-basics/FunctionComponent';
// import TestComponent from './components/Learning-basics/test';
// class Learning extends Component {
//   render(){
//     return(
//       <div className='Learning'>
//         <ThirdClassComponent />
//         <FourthComponent />
//         <TestComponent />
//       </div>
//     );
//   }
// }


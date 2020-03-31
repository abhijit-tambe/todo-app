import React, { Component } from 'react';
// import logo from  './logo.svg';
import './App.css';
import './Bootstrap.css';
// import FirstComponent  from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from './components/learning-examples/ThirdComponent'
// import  Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp';
 class App extends Component {      
  // state{

  // };  
   render(){
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <LearningComponents/> */}
      <TodoApp/>    
      {/* <LoginComponent/> */}
      </div>
  );}
}



// class LearningComponents extends Component{
//   render(){
//     return(
// <div className="LearningComponents">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <p>Hello worldss</p>
//       {/* <FirstComponent/>
//       <SecondComponent/>
//       <ThirdComponent/> */}
//     </div>
//     );
//   }
// }



export default App;

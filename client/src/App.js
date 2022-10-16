// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home";
import Game from "./components/game";
import Story from "./components/story";
import Result from  "./components/result";

function App() {
  return (
    <div>
      <h1>
        F:Ljae;flkjf;
      </h1>
    </div>
  );
}


//function Home() {
//  return <h2>Home</h2>;
//}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: []
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>DiagnoSelf</h1>
//       </div>
//     );
//   }
// }

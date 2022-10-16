import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/home";
import Game from "./components/game";
import Story from "./components/story";
import Result from  "./components/result";

function App() {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/game' element = {<Game/>}/>
      <Route path = '/story' element = {<Story/>}/>
      <Route path = '/result' element = {<Result score={100}/>}/>
    </Routes>
  );
}

export default App;

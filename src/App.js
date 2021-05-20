// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PackContainer from './components/PackContainer';
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";



function App() {
  return (
    <>
    <h1>SoundClash</h1>
    <NavBar />
    <PackContainer />
  
    </>
  );
}

export default App;

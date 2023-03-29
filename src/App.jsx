import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
    </div>
  )
}

export default App

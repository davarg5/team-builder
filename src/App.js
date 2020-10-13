import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: ''
  })
  
  return (
    <h1>Team builder</h1>

  );
}

export default App;

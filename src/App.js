import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import styled from 'styled-components'

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    role: ''
  }
  
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    if(!newTeam.name || !newTeam.email || !newTeam.role) {
      return;
    }
    setTeam([...team, newTeam]);
    setFormValues(initialFormValues);
  }

  const TeamMember = styled.div`
    border: 2px solid gray;
    border-radius: 10px;
    margin: 3% 5%;
    padding: 0% 3%;
  `

  return (
    <div>
    <h1>Team builder</h1>
    <Form 
    values={formValues}
    update={updateForm}
    submit={submitForm}
    />
    {
      team.map(member => {
        return (
          <TeamMember>
            <h3>{member.name}</h3>
            <p>{member.email} <br></br>
            {member.role}</p>
          </TeamMember>
        )
      })
    }
    </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contacts from './Contacts.js'

function App() {

  const contacts = [
    {
      name: "Robert",
      phone: "66500614"
    },
    {
      name: "Marc",
      phone: "673386565"
    },
    {
      name: "Elissa",
      phone: "661456789"
    },
    {
      name: "Anthony",
      phone: "668123789"
    },
    {
      name: "John",
      phone: "665123462"
    }
  ];

  return (
    <div>
      <h1>Hello World</h1>
      <Contacts contacts =  {contacts}/>
    </div>
  );
}

export default App;

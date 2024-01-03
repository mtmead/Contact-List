
import './App.css'
import './components/ContactList'

import React, { useState } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState(dummyContacts)
}

export default function ContactList() { 

  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {
               // Map over data here
             }
          </tbody>
        </table>
    ); 
}
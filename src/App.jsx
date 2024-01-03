
import './App.css'
import './components/ContactList'

import React, { useState } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState(dummyContacts)
}

export default function App() {
  return (
    <>
      <ContactList />
    </>
  );
}
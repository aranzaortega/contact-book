import React, { useReducer } from 'react';
import { ContactsReducer } from '../reducers/ContactsReducer';
import ContactsTable from './ContactsTable';
import AddContactForm from './AddContactForm';

const Contacts = () => {
  const contacts = [
    {
      id: 'a1b2c3',
      name: 'Aranza',
      number: '678678678',
    },
    {
      id: 'd4f5g6',
      name: 'Víctor',
      number: '987654321',
    },
    {
      id: 'h8i9j1',
      name: 'Laura',
      number: '615625615',
    },
  ];

  const [state, dispatch] = useReducer(ContactsReducer, contacts);

  return (
    <div className="container mt-3">
      <AddContactForm dispatch={dispatch}/>
      <ContactsTable contacts={state} />
    </div>
  );
};
export default Contacts;

import React, { useReducer, useState, useEffect } from 'react';
import { ContactsReducer } from '../reducers/ContactsReducer';
import ContactsTable from './ContactsTable';
import AddContactForm from './AddContactForm';

const init = () => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        className="btn btn-success"
        onClick={() => setFormView(!formView)}
      >
        {!formView ? '+ ADD CONTACT' : '- CLOSE FORM'}
      </button>
      {formView && <AddContactForm dispatch={dispatch} />}
      <ContactsTable contacts={state} dispatch={dispatch} />
    </div>
  );
};
export default Contacts;

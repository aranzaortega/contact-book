import React from 'react';

const ContactsTable = ({ contacts = [], dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction = {
      type: 'delete',
      payload: id,
    };
    dispatch(deleteAction);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <th>{contact.id}</th>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ContactsTable;

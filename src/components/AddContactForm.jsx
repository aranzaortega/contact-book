import React, { useState } from 'react';

const AddContactForm = ({ dispatch }) => {
  const [data, setData] = useState({ name: '', number: '' });

  const { name, number } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: 'add',
    payload: {
      id: '123456',
      name,
      number,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2 mt-2">
        Name: {''}
        <input
          onChange={handleChange}
          name="name"
          value={name}
          type="text"
          className="form-control"
          autoComplete="off"
        />
      </label>
      <label className="mx-1 d-grid gap-2 mt-2">
        Number: {''}
        <input
          onChange={handleChange}
          name="number"
          value={number}
          type="text"
          className="form-control"
          autoComplete="off"
        />
      </label>
      <div className="mx-1 d-grid gap-2">
        <button onClick={handleAdd} className="btn btn-info mt-2">
          {' '}
          Add
        </button>
      </div>
    </div>
  );
};
export default AddContactForm;

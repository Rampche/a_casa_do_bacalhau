'use client';

import React, { useState } from 'react';

const MyForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      name,
      email,
      password,
    };

    // Send the form data to the backend
    fetch('http://localhost:8080/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="bg-sky-900 text-white p-4 min-w-screen min-h-screen m-auto py-10 px-14">
      <form
        onSubmit={handleSubmit}
        className="flex justify-around items-center flex-col text-center"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={'sm:sm-forms-input forms-inputs'}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={'sm:sm-forms-input forms-inputs'}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={'sm:sm-forms-input forms-inputs'}
          />
        </div>
        <button
          type="submit"
          className="bg-white mt-3 w-36 rounded text-[#001E3C] border-sky-600 hover:scale-105 transform-gpu dark:bg-[#001E3C] dark:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;

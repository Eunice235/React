import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Address:', address);
    setShowSuccessMessage(true);
  };
  const handleOKClick = () => {
    setShowSuccessMessage(false);
    // Perform any necessary logic for redirecting to the main page
    // For example, you can use React Router or modify the state to navigate to the main page
  };



  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
  </p>*/}
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
         >
          Learn React
  </a>*/}
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application.</p>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label><br/>
        <br />
        <label>
        Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br /><br/>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br /><br/>
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>
        <br /><br/>
        <button type="submit">Submit</button>
      </form>
      {showSuccessMessage && (
        <div>
          <p>Your details have been saved successfully.</p>
          <button onClick={handleOKClick}>OK</button>
        </div>
      )}
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './RandomPassApp.css'; 
// Toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { upperCaseChars, lowerCaseChars, numberChars, symbolChars } from '../../data/Password'; 

const RandomPassApp = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    // Build the character set based on the selected options
    let charSet = '';
    if (includeUppercase) charSet += upperCaseChars;
    if (includeLowercase) charSet += lowerCaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;
  
    // Check if charSet is empty
    if (charSet.length === 0) {
      toast.error("Please select at least one character type.");
      setPassword(''); // Clear the read-only field
      return;
    }
  
    // Generate password
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
  
    setPassword(generatedPassword);
    toast.success("Password Generated Successfully!");
  };
  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard'");
  };

  return (
    <>
      <ToastContainer />
      <div className="password-generator mt-5">
        <h2 className='mb-3'>Password Generator</h2>
        <div className="password-box">
          <input type="text" value={password} readOnly className="password-input" />
          <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>

        <div className="settings">
          <div className="setting-item">
            <label>Password length</label>
            <input  id='passlength'
              type="number" 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))} 
              min="6" 
              max="20" 
            />
          </div>

          <div className="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                checked={includeUppercase} 
                onChange={(e) => setIncludeUppercase(e.target.checked)} 
              /> 
              Include uppercase letters
            </label>

            <label>
              <input 
                type="checkbox" 
                checked={includeLowercase} 
                onChange={(e) => setIncludeLowercase(e.target.checked)} 
              /> 
              Include lowercase letters
            </label>

            <label>
              <input 
                type="checkbox" 
                checked={includeNumbers} 
                onChange={(e) => setIncludeNumbers(e.target.checked)} 
              /> 
              Include numbers
            </label>

            <label>
              <input 
                type="checkbox" 
                checked={includeSymbols} 
                onChange={(e) => setIncludeSymbols(e.target.checked)} 
              /> 
              Include symbols
            </label>
          </div>
        </div>

        <button onClick={generatePassword} className='btn btn-success form-control'>
          Generate Password
        </button>
      </div>
    </>
  );
};

export default RandomPassApp;

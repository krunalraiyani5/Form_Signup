import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
// import { Tooltip as ReactTooltip } from 'react-tooltip';
// import { Tooltip } from 'react-tooltip'
import { Tooltip } from 'react-tooltip';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validatePassword = () => {
    // ... (same validation logic as before)
      // Check if the password is at least 8 characters long
      const isLengthValid = password.length >= 8;

      // Check if the password contains at least one lowercase letter
      const hasLowercase = /[a-z]/.test(password);
  
      // Check if the password contains at least one uppercase letter
      const hasUppercase = /[A-Z]/.test(password);
  
      // Check if the password contains at least one number
      const hasNumber = /\d/.test(password);
  
      // Set the overall validity based on all criteria
      const isValidPassword = isLengthValid && hasLowercase && hasUppercase && hasNumber; 

    setIsValid(isValidPassword);    
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <label data-tip data-for="passwordTooltip">
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={validatePassword}>Validate Password</button>
      <Tooltip id="passwordTooltip" place="right" effect="solid">
        <p>
          <strong>Password Requirements:</strong>
        </p>
        <ul>
          <li>At least 8 characters long</li>
          <li>At least one lowercase letter</li>
          <li>At least one uppercase letter</li>
          <li>At least one number</li>
        </ul>
      </Tooltip>
      {isValid ? (
        <p>Password is valid!</p>
      ) : (
        <p>
          Password is invalid. Hover over the password input for
          requirements.
        </p>
      )}
    </div>
  );
};

export default PasswordValidator;

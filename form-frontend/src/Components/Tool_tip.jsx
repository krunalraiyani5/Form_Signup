import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

const PasswordValidator1 = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const validatePassword = (e) => {
    // ... (same validation logic as before)
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

    // Show the tooltip if the password is invalid
    setTooltipVisible(!isValidPassword);
    setPassword(e.target.value);
  };

 const handlePasswordChange = (e) => {
     // ... (same validation logic as before)
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
 
     // Show the tooltip if the password is invalid
     setTooltipVisible(!isValidPassword);
     setPassword(e.target.value);
//     setPassword(e.target.value);
   };

  return (
    <div>
      <label data-tip data-for="passwordTooltip">
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange(e)}
          onFocus={() => setTooltipVisible(true)}
          onBlur={() => setTooltipVisible(false)}
        />
      </label>
      {/* <button onClick={validatePassword(e)}>Validate Password</button> */}
      <Tooltip id="passwordTooltip" place="top" effect="solid" globalEventOff="click" event="click">
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
      {!isValid && tooltipVisible && (
        <p>Password is invalid. Hover over the password input for requirements.</p>
      )}
      {isValid && <p>Password is valid!</p>}
    </div>
  );
};

export default PasswordValidator1;

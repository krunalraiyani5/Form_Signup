import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'react-tooltip';

const PasswordValidator2 = () => {
  const [password, setPassword] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const validatePassword = () => {
    // Reset validation errors
    setValidationErrors([]);

    // Password validation logic
    if (password.length < 8) {
      setValidationErrors(errors => [...errors, 'Password must be at least 8 characters']);
    }
    if (!/[a-z]/.test(password)) {
      setValidationErrors(errors => [...errors, 'Password must contain at least one lowercase letter']);
    }
    if (!/[A-Z]/.test(password)) {
      setValidationErrors(errors => [...errors, 'Password must contain at least one uppercase letter']);
    }
    if (!/\d/.test(password)) {
      setValidationErrors(errors => [...errors, 'Password must contain at least one number']);
    }

    // Show the tooltip if there are validation errors
    setTooltipVisible(validationErrors.length > 0);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
      <button onClick={validatePassword}>Validate Password</button>
      <Tooltip id="passwordTooltip" place="right" effect="solid">
        {validationErrors.length > 0 && (
          <>
            <p>
              <strong>Password Requirements:</strong>
            </p>
            <ul>
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </>
        )}
      </Tooltip>
      {!validationErrors.length ? (
        <p>Password is valid!</p>
      ) : (
        <p>Password is invalid. Hover over the password input for requirements.</p>
      )}
    </div>
  );
};

export default PasswordValidator2;

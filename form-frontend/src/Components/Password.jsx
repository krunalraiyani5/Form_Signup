import React, { useState } from 'react';
import Hide_pass from "../hide_pass.png";
import Open_pass from "../show_pass.png";

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password-input"
        placeholder="Enter your password"
      />
      <div className="eye-icon" onClick={togglePasswordVisibility}>

        {
            showPassword ? 
            
            <img src={Open_pass} alt="open" className="w-[15px] h-[15px]"/>
            
             :
             <>
             <img src={Hide_pass} alt="close" className="w-[15px] h-[15px]" />
             </> 
        }
        
      </div>
    </div>
  );
};

export default PasswordInput;

import React, { useState } from "react";
// import Header from "./Header";
import { Alert } from "./Alert";

import axios from "axios";
import call from "../Call_Icon.png";
import { Link } from "react-router-dom";

import Hide_pass from "../hide_pass.png";
import Open_pass from "../show_pass.png";



const Signup2 = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [Email_valid, setEmail_valid] = useState(true);

  const [Mob_valid, setMob_valid] = useState(true);

  const [Name_valid, setName_valid] = useState(true);
  const [Pass_valid, setPass_valid] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 
  const validStyle = {
    border: "2px solid #E5E7E8",
  };
  const notValidStyle = {
    border: "1px solid red",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");

  const validMob = (e) => {
    let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    let mobile_number = e.target.value;
    // if mobile_number is empty return false
    if (mobile_number == null) {
      console.log("mob not valid");
      setMob("");
      setMob_valid(false);
      return "false";
    }

    // Return true if the mobile_number matched the ReGex
    if (regex.test(mobile_number) == true) {
      setMob(e.target.value);
      setMob_valid(true);
      console.log("mob valid");
      return "true";
    } else {
      console.log("mob not valid");
      setMob("");
      setMob_valid(false);
      return "false";
    }
  };
  const validEmail = (e) => {
    var validRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value.match(validRegex)) {
      setEmail_valid(true);
      setEmail(e.target.value);
      console.log("valid");
    } else {
      setEmail_valid(false);
      console.log("not valid");
      setEmail("");
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log(password)
      let res = await axios.post(
        "https://pos-registration.onrender.com/signup",
        {
          name,
          email,
          mobile: mob,
          password
        }
      );
      let data = res.data;

      if (data.Status === "Ok") {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mob").value = "";

        setAlertType("success");
        setAlertMessage(data.msg);
        setAlertVisible(true);
        setAlertTitle("Success!");
        setTimeout(() => {
          setAlertVisible(false);

        }, 2000);
        window.location.href= "/login"


      } else {
        // alert(data.msg)
        setAlertType("error");
        setAlertMessage(data.msg);
        setAlertVisible(true);
        setAlertTitle("Error:");
        setTimeout(() => {
          setAlertVisible(false);
        }, 5000);
      }
    } catch (e) { }
  };

  const validName = (e) => {

    const inputValue = e.target.value;
    setName(inputValue);

    const nameParts = inputValue.split(' ');
    if (nameParts.length >= 2 && nameParts[1].length>=1) {
      setName_valid(true)
    } else {
      setName_valid(false)
    }


  }

  const validatePassword = (e) => {

  const passValue = e.target.value;
  setPassword(passValue);

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

    setPass_valid(isValidPassword)
    console.log(Pass_valid);
    console.log(password);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 h-[300px] ">
      {/* <Header /> */}

      <div className="flex w-[100%]   justify-center py-10 items-center m-[auto] ">
        <form className="bg-white p-10 pb-[25px] sm:p-15   rounded-md shadow-lg shadow-blue-500/50 2xl:w-[30%] 2xl:mt-[150px] mt-[100px]">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
              style={Name_valid ? validStyle : notValidStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={(e) => validName(e)}
              className="pl-2 outline-none border-none w-[100%]"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              autoFocus={true}
              
            />
          </div>

          <div
            className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
            style={Email_valid ? validStyle : notValidStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              onChange={(e) => validEmail(e)}
              className="pl-2 outline-none border-none w-[100%]"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div
            className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
            style={Mob_valid ? validStyle : notValidStyle}
          >
            

            <img src={call} alt="call_icon" className="w-[15px] h-[15px]" />
            <input
              onChange={(e) => validMob(e)}
              className="pl-2 outline-none border-none w-[100%]"
              type="number"
              name="mob"
              id="mob"
              placeholder="Mobile Number"
            />
          </div>

          <div
            className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
            style={Pass_valid ? validStyle : notValidStyle}
          >
             <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>

            
            <input
              onChange={(e) => validatePassword(e)}
              className="pl-2 outline-none border-none w-[100%]"
              type={showPassword ? 'text' : 'password'}
              name="pass"
              id="pass"
              placeholder="Password"
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

{/* <input type="password" value={password} onChange={validatePassword} /> */}
          </div>
          <button
            onClick={(e) => handleSignUp(e)}
            className="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            disabled={!Email_valid || !Mob_valid || !Name_valid || !name || !email || !mob || !Pass_valid || !password}
          >
            Sign Up
          </button>
          <div className="flex justify-between text-sm font-normal text-gray-600 mt-[20px]">
          <p >
          Already registered?
          </p>

          <button className="hover:text-blue-500 underline">

            <Link to='/login'>
            Log In
            
            </Link>
                 
          </button>
          </div>
        
          {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            <a
              href="https://dashboard.analahinsurance.com/customer/login"
              target="blank"
            >
              {" "}
              Already have an account? Sign In
            </a>
          </span> */}
        </form>

        {alertVisible && (
          <Alert type={alertType} message={alertMessage} title={alertTitle} />
        )}
      </div>
    </div>
  );
};

export default Signup2;

import React, { useEffect, useState } from "react";
import YourInfo from "./YourInfo";
import Plan from "./Plan";
import BackgroundSidebar from "../assets/images/sidebar_image8.jpg";
import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";
import Addons from "./Addons";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

import arcadeLogo from "../assets/images/icon-arcade.svg";
import advancedLogo from "../assets/images/icon-advanced.svg";
import proLogo from "../assets/images/icon-pro.svg";

import Login from "../../../../Components/Login";
import Aadhaar from "./Aadhar";
import Education from "./Education";
import DragDropFiles from "./Test";

import Test4 from "./test4";


const Form = () => {
  //------------------------------STATES------------------------------
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [steps, setSteps] = useState([
    { id: 1, title: "PAN Card", active: true },
    { id: 2, title: "Aadhaar Details", active: false },
    { id: 3, title: "Profile Photo", active: false },
    { id: 4, title: "Highest Education Qualification", active: false },
  ]);

  const [yourInfo, setYourInfo] = useState({
    name: "",
    email: "",
    
  });

  const [aadhaarNo, setAadhaarNo] = useState("");
  const [education, setEducation] = useState("");

  // ------- Aadhaar details -----

  
  const [isEmpty, setIsEmpty] = useState(false);
  const [isPlanEmpty, setIsPlanEmpty] = useState(false);


  

 

  const [addons, setAddons] = useState([]);

  const [displayThankyou, setDisplayThankyou] = useState(false);

  //------------------------------SIDE EFFECTS------------------------------
  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }


  }, [
    stepNumber,
    yourInfo,
    
    addons,
 
 
    isPlanEmpty,
    displayThankyou,
  ]);

  //------------------------------FUNCTIONS------------------------------
  const nextStep = () => {
    if (stepNumber == 1 ) {
      if (
        yourInfo.name.length == 0 ||
        yourInfo.email.length == 0 
       
      ) {
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }

    if (stepNumber == 2 ) {
      console.log(aadhaarNo , isEmpty);
      console.log(aadhaarNo.length );
      if (
        aadhaarNo.length < 11
  
       
      ) {
        
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }

    if (stepNumber == 4 ) {
      console.log(aadhaarNo , isEmpty);
      console.log(aadhaarNo.length );
      if (
        education.length == 0
  
       
      ) {
        
        setIsEmpty(true);
        return;
      } else {
        setIsEmpty(false);
      }
    }

    

    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  const changeClick = () => {
    setStepNumber((prevStep) => prevStep - 2);
  };

  const changeYourInfo = (event) => {
    setYourInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value };
    });
  };

  const ChangeAadhaar = (event) => {
    setAadhaarNo(event.target.value)
  };

  const ChangeEducation = (event) => {
    setEducation(event.target.value)
  };
 


 


  return (
    // background-image: linear-gradient(to right, rgba(250,252,254,1), rgba(217,237,237,1));
    <div className="container pt-[40px] m-auto bg_kyc ">
      <div className=" rounded-xl md:p-3 md:flex justify-center w-[100%] mt-[50px]">
        <div className="relative form_sidebar ">
          {/* <img
            className="hidden md:block w-[274px] h-[565px]"
            src={BackgroundSidebar}
            alt="sidebar"
          /> */}
          {/* <img
            className="block md:hidden w-full"
            src={BackgroundSidebarMobile}
            alt="topbar"
          /> */}

          <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl p-[40px] w-[50%] h-[565px] shadow_form  rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg bg-white ">
          {(displayThankyou && (
            //<div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
            <>
              <Thankyou />
            </>
            //</div>
          )) || (
            // <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
            <>
              <div>
                {(stepNumber === 1 && (
                  <YourInfo
                    onChangeYourInfo={changeYourInfo}
                    yourInfo={yourInfo}
                    currentStep={stepNumber}
                    isEmpty={isEmpty}
                  />
                )) ||
                  (stepNumber === 2 && (
                    <Aadhaar
                    onChangeAadhaar={ChangeAadhaar}
                    isEmpty={isEmpty}
                  />
            
                  )) ||
                  (stepNumber === 3 && (
                    <Test4 />
                  )) ||
                  (stepNumber === 4 && (
                    <Education
                    onChangeEducation={ChangeEducation}
                    isEmpty={isEmpty}
                  />
                  ))}
              </div>
              <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:static md:p-0 md:static items-center w-[700px]]">
                {/* {stepNumber != 1 && (
              <div
                onClick={prevStep}
                className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
              >
                Go back
              </div>
            )} */}
                <div
                  onClick={prevStep}
                  className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                >
                  Go back
                </div>
                {stepNumber === 4 ? (
                  <div
                    onClick={() => setDisplayThankyou(true)}
                    className="font-medium bg-[#473dff] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                  >
                    Confirm
                  </div>
                ) : (
                  <div
                    onClick={nextStep}
                    className="font-medium bg-[#02295a] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                  >
                    Next Step
                  </div>
                )}
              </div>
            </>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;


import WeeklyRevenue from "./components/WeeklyRevenue";
import TotalSpent from "./components/TotalSpent";
import Step from "./components/Step";
import { useState } from "react";


const Dashboard = () => {
  const [steps, setSteps] = useState([
    { id: 1, title: "PAN Card", active: true },
    { id: 2, title: "Aadhaar Details", active: false },
    { id: 3, title: "Profile Photo", active: false },
    { id: 4, title: "Highest Education Qualification", active: false },
  ]);
  return (
    <div>

{/* 
      <div className="mt-5 grid grid-cols-1 gap-5 relative md:mt-15 ">
       
        <TotalSpent />
      </div> */}



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

          <div className="flex justify-center  absolute inset-0 space-x-10 md:space-x-0 md:block  md:space-y-7 ">
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

        <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl pt-[40px] pl-[20px] pr-[20px] w-[50%] h-[565px] shadow_form  rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg bg-white overflow-y-auto">
          

            <>
              <div>
             
                  {/* <YourInfo
                    onChangeYourInfo={changeYourInfo}
                    yourInfo={yourInfo}
                    currentStep={stepNumber}
                    isEmpty={isEmpty}
                  /> */}

                  <TotalSpent />
              
              </div>
              {/* <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:static md:p-0 md:static items-center w-[700px]]">
               
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
              </div> */}
            </>
             </div>
          
        </div>
      </div>
    </div>

    

      

  );
};

export default Dashboard;

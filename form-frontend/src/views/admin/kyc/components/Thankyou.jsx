import React from "react";
import thankyouIcon from "../assets/images/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center mt-28">
      <div>
        <img src={thankyouIcon} alt="Thank you" />
      </div>
      <div className="font-bold text-[#02295a] text-3xl">Thank you!</div>
      <p className="text-[#9699ab] text-[14px] w-96">
      We would like to express our sincere gratitude for
        taking the time to complete your Know Your Customer (KYC) details with
        us. If you ever need support, Please feel free to email us at&nbsp;

        <a href="mailto:contactus@analahinsurance.com">

        contactus@analahinsurance.com
        </a>
        .
        
        
    
      </p>
    </div>
  );
};

export default Thankyou;

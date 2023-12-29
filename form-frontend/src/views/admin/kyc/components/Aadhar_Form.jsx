import React, { useEffect, useState } from "react";
import upload_icon from "../assets/images/upload_icon.png"

const FormField_Aadhaar = ({onChangeAadhaar,isEmpty}) => {
  const [displayRequired, setDisplayRequired] = useState("hidden");
  const [redBorder, setRedBorder] = useState("border-[#d6d9e6]");
  const [aadhaarNo, setAadhaarNo] = useState("");


  useEffect(() => {
    if (isEmpty == true) {
      setDisplayRequired("block");
      setRedBorder("border-[#ed3548]");
    }
    // console.log(displayRequired);
    // console.log(isEmpty);
  }, [isEmpty]);



  return (
    <div>
      <div className="flex justify-between items-center">
        <label>Aadhaar Card</label>
        <p
          className={`${displayRequired} font-medium text-[14px] text-[#ed3548]`}
        >
          Enter Valid Aadhaar Format
        </p>
      </div>
      <div>
        <input
          onChange={onChangeAadhaar}
          name={"aadhaar"}
          className={`font-medium w-full mt-1 p-2 pl-3 rounded-full rounded-lg border ${redBorder} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd] w-[50%] p-[14px] mt-[10px]`}
          type="text"
          placeholder='Enter Aadhar Card No.'
   
          
        />



      {/* <input type="file" name="fileToUpload" id="fileToUpload"></input> */}

      <input type="file" class="input-file mt-[5px]"></input>


        
      </div>
    </div>
  );
};

export default FormField_Aadhaar;

import React, { useEffect, useState } from "react";
import upload_icon from "../assets/images/upload_icon.png";
import AadhaarDrop from "./Aadhar_Drop";
import EducationDrop from "./Education_Drop";

const Education_form = ({onChangeEducation,isEmpty}) => {
  const [displayRequired, setDisplayRequired] = useState("hidden");
  const [redBorder, setRedBorder] = useState("border-[#d6d9e6]");

  const onFileChange = (files) => {
    console.log(files);
}

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
        <label>Highest Education Qualification</label>
        <p
          className={`${displayRequired} font-medium text-[14px] text-[#ed3548]`}
        >
          Please select at least one option
        </p>
      </div>
      <div>
      <select name="education" id="education"  className={`font-medium w-full mt-1 p-2 pl-3 rounded-full rounded-lg border ${redBorder} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd] w-[50%] p-[14px] mt-[10px]`}   onChange={onChangeEducation}>
      <option value="10th Pass">10th Pass</option>
      <option value="12th Pass">12th Pass</option>
      <option value="Graduate">Graduate</option>
      <option value="Post Graduate">Post Graduate</option>
  </select>
        {/* <input
          onChange={onChangeEducation}
          name={"aadhaar"}
          className={`font-medium w-full mt-1 p-2 pl-3 rounded-full rounded-lg border ${redBorder} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd] w-[50%] p-[14px] mt-[10px]`}
          type="text"
          placeholder='Enter Aadhar Card No.'
   
          
        /> */}



      {/* <input type="file" name="fileToUpload" id="fileToUpload"></input> */}

      {/* <input type="file" class="input-file mt-[5px]"></input> */}

      {/* <AadhaarDrop onFileChange={(files) => onFileChange(files)}/> */}
      <EducationDrop onFileChange={(files) => onFileChange(files)}/>

        
      </div>
    </div>
  );
};

export default Education_form;

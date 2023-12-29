import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";
import FormField_Aadhaar from "./Aadhar_Form";

const Aadhaar = ({  onChangeAadhaar, isEmpty }) => {
 

  const styles = {
    header: {
      background: "aliceblue",
    padding: "12px",
    borderRadius: "5px"
}
    }
  


  return (
    <div >
      <SectionHeading
      style={styles.header}
       title="Aadhaar Card"
        desc="Submitting your PAN card is necessary for carrying out any financial transactions"
      />

      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
         
            <FormField_Aadhaar  onChangeAadhaar={onChangeAadhaar}
              isEmpty={isEmpty} />
       


        </div>
      </form>
    </div>
  );

};

export default Aadhaar;

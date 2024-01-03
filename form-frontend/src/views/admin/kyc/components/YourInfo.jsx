import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Name",
      placeholder: "Enter your full name",
    },
    {
      id: 2,
      name: "email",
      label: "PAN Card No.",
      placeholder: "",
    },
    
  ]);

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
       title="PAN Card"
        desc="Submitting your PAN card is necessary for carrying out any financial transactions."
      />

      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
          {formFields.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </div>
  );

};

export default YourInfo;

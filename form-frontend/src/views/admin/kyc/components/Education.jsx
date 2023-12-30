import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";
// import Education_form from "./Education_form"
import Education_form from "./Education_form";

const Education = ({  onChangeEducation, isEmpty }) => {
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
       title="Highest Education Qualification"
        desc="Providing details of your highest education qualification is crucial for us to better understand your academic background"
      />

      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
         
            <Education_form  onChangeEducation={onChangeEducation}
              isEmpty={isEmpty} />
       


        </div>
      </form>
    </div>
  );

};

export default Education;

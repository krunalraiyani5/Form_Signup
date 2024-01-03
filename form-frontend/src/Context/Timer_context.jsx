import { createContext, useState } from "react";

export const Timer_Context = createContext();

function TimerContextProvider({ children }) {

  // const time =  localStorage.getItem('time');
  // console.log(time)

  const [training, setTrainingCompleted] = useState(false);
  const [aadhar_image, setAadharImage] = useState(null);
  const [profile_image, setProfile] = useState(null);
  const [education_image, setEducation] = useState(null);
 
  const Set_Exam = () =>{
    setTrainingCompleted(true)
  }
  
  const Set_AadharImage = (files) =>{
   setAadharImage(files)
  }

  const Set_Profile = (files) =>{
    setProfile(files)
   }

   const Set_Education = (files) =>{
    setEducation(files)
   }

 return (
    <Timer_Context.Provider
      value={{
        
        training,
        Set_Exam,
        aadhar_image,
        Set_AadharImage,
        profile_image,
        Set_Profile,
        education_image,
        Set_Education
        

       }}
    >
      {children}
    </Timer_Context.Provider>
  );
}
 export default TimerContextProvider ;
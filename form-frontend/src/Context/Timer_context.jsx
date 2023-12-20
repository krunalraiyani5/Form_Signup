import { createContext, useState } from "react";

export const Timer_Context = createContext();

function TimerContextProvider({ children }) {

  // const time =  localStorage.getItem('time');
  // console.log(time)

  const [training, setTrainingCompleted] = useState(false);
 
 
  const Set_Exam = () =>{
    setTrainingCompleted(true)
  }
  
return (
    <Timer_Context.Provider
      value={{
        
        training,
        Set_Exam
       }}
    >
      {children}
    </Timer_Context.Provider>
  );
}
 export default TimerContextProvider ;
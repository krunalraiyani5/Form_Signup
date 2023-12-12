import { createContext, useState } from "react";

export const Timer_Context = createContext();

function TimerContextProvider({ children }) {

  // const time =  localStorage.getItem('time');
  // console.log(time)
  const [elapsedTime, setElapsedTime] = useState("time");
  const [email_user, setEmailUser] = useState("");
  const Set_Elapsed = (time) =>{
    setElapsedTime(time)
  }
  const Set_Email_User = (email) =>{
    setEmailUser(email)
  }
  
return (
    <Timer_Context.Provider
      value={{
        elapsedTime,
        Set_Elapsed,
        Set_Email_User,
        email_user
       }}
    >
      {children}
    </Timer_Context.Provider>
  );
}
 export default TimerContextProvider ;
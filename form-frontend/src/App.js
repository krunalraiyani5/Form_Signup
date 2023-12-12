import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
// import Signup1 from './Components/Signup1';
import Signup2 from './Components/Signup2';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './Components/Login';
import PasswordInput from './Components/Password';
import POS from "./Layout";

// import PasswordValidator1 from './Components/Tool_tip';
// import PasswordValidator2 from './Components/Tool_tip2';

function App() {
  return (
    <div>
      {/* <Signup /> */}
      {/* <Signup1 /> */}
      <div class="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 h-[300px]">
      <Routes>
      {/* <Route path="auth/*" element={<AuthLayout />} /> */}
      <Route path="/" element={<Signup2 />} />
      
      <Route path="/login" element={<Login />} />
      {/* <Route path="/Pas" element={<PasswordInput />} /> */}
      <Route path="admin/*" element={<POS />} />

    </Routes>
      </div>

    
      
    </div>
  );
}

export default App;

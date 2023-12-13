import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
// import Signup1 from './Components/Signup1';
import Signup2 from './Components/Signup2';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './Components/Login';
import PasswordInput from './Components/Password';
import POS from "./Layout";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

// import PasswordValidator1 from './Components/Tool_tip';
// import PasswordValidator2 from './Components/Tool_tip2';

function App() {
  return (
    <div>
      {/* <Signup /> */}
      {/* <Signup1 /> */}
    
      <Routes>
      {/* <Route path="auth/*" element={<AuthLayout />} /> */}
      <Route path="/" element={<Signup2 />} />
      
      <Route path="/login" element={<Login />} />
      {/* <Route path="/Pas" element={<PasswordInput />} /> */}
      
      <Route path="admin/*" element={ <PrivateRoute> <POS /> </PrivateRoute> } />

    </Routes>
    

      

    
      
    </div>
  );
}

export default App;

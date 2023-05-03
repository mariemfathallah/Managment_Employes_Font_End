
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Components/ContextAuth/ContextAuth';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Dashboard from './Components/Dashboard/Dashboard';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import EmployeesList from './Components/EmployeesList/EmployeesList';
import AllEployees from './Components/EmployeesList/AllEployees';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>

     <Routes> 
      <Route path="/"  element={<SignIn/>} />
      <Route  path="/reset-password" element={<ForgotPassword/>} />
      <Route  path="/reset-password" element={<ForgotPassword/>} />
      <Route  path="/reset-password/:userId/:token" element={<ResetPassword/>} />
      <Route  path='/dashboard' element={<Dashboard/>}/>
      <Route  path='/Profile'  element={<EmployeesList/>} />
      <Route  path='/Employees' element={<AllEployees/>}/>
     </Routes>

     </AuthContextProvider>
    </div>
  );
}

export default App;

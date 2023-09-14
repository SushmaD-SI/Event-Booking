import './App.css'
import Dashboard from './components/Dashboards/Dashboard'
 import AddVenue from './components/Dashboards/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adminlogin from './components/Login/Adminlogin'
import Login from './components/Login/Login'
import Employeelogin from'./components/Login/Employeelogin'
import EmployeeDashboard from  './components/Dashboards/EmployeeDashboard'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/dashboard' element={<Dashboard/>}/> 
        <Route path='/'  element={<Login/>}/>
        <Route path='/adminLogin'  element={<Adminlogin/>}/>
        <Route path='/employeeLogin' element={<Employeelogin/>}/>
        <Route  path='/employeeDashboard' element={<EmployeeDashboard/>}/>
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App

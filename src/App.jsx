import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
import Adminsummary from './Components/Adminsummary';
import DepartmentList from './Components/Department/DepartmentList';
import AddDepartment from './Components/Department/AddDeparment';
import Employee from './Components/Employee/Employee';
import Leave from './Components/Leave/Leave';
import Setting from './Components/Settings/Setting';
import AddEmployees from './Components/Employee/AddEmployees';
import AddSalary from './Components/Salary/AddSalary';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/admin-dashboard" element={
          <AdminDashboard />}
           >
            <Route index element={<Adminsummary/>}></Route>
            <Route path="/admin-dashboard/departments" element={<DepartmentList/>}></Route>
            <Route path="/admin-dashboard/add-department" element={<AddDepartment/>}></Route>
       
            <Route path="/admin-dashboard/salary" element={<AddSalary></AddSalary>}></Route>
            
       
            <Route path="/admin-dashboard/employees" element={<Employee></Employee>}></Route>
            <Route path="/admin-dashboard/add-employees" element={<AddEmployees></AddEmployees>}></Route>
       
       

            <Route path="/admin-dashboard/leave" element={<Leave></Leave>}></Route>
       
            <Route path="/admin-dashboard/settings" element={<Setting/>}></Route>

           </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

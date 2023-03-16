import './App.css';
import Contactus from './components/nav/contact/Contactus';
import Adminlogin from './components/admincomponent/Adminlogin';
import Adminafterlogin from './components/admincomponent/Adminafterlogin';
import Adminviewall from './components/admincomponent/Adminviewall';
import Adminsearchuser from './components/admincomponent/Adminsearchuser';
import AdminDeleteUser from './components/admincomponent/AdminDeleteUser';
import AdminManageUser from './components/admincomponent/AdminManageUser';
import Adminlogout from './components/admincomponent/Adminlogout';
import Userafterlogin from './components/usercomponent/Userafterlogin';
import UserProfileUpdate from './components/usercomponent/UserProfileUpdate'
import Logout from './components/nav/Logout';
import Topbar from './components/topbar/Topbar';

import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Viewpost from "./components/Viewall"
// import Navbar from './components/nav/Navbar';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  <Topbar />
  return (
    <div align="center">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Homepage />} />
          <Route path='/userreg' element={<Register />} />
          <Route path='/userlogin' element={<Login />} />
          <Route path='/setting' element={<Settings />} />
          <Route path='/single' element={<Single />} />
          <Route path='/write' element={<Write />} />
          <Route path='/Topbar' element={<Topbar />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/adminafterlogin' element={<Adminafterlogin />} />
          <Route path='/adminviewall' element={<Adminviewall />} />
          <Route path='/adminsearchuser' element={<Adminsearchuser />} />
          <Route path='/admindeleteuser' element={<AdminDeleteUser />} />
          <Route path='/adminmanageuser' element={<AdminManageUser />} />
          <Route path='/adminlogout' element={<Adminlogout />} />
          <Route path='/userafterlogin' element={<Userafterlogin />} />
          <Route path='/profileupdate' element={<UserProfileUpdate />} />
          <Route path='/userlogout' element={<Logout />} />
          <Route path='/viewpost' element={<Viewpost />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
import "./App.scss"

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminManage from "./pages/AdminManage/AdminManage";
import AuthHistory from "./pages/AuthHistory/AuthHistory";
import RoleHistory from "./pages/RoleHistory/RoleHistory";
import LoginHistory from "./pages/LoginHistory/LoginHistory";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="container">
          <Sidebar/>
          <div className="main">
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/adminManage" element={<AdminManage/>}></Route>
                <Route path="/authHistory" element={<AuthHistory/>}></Route>
                <Route path="/roleHistory" element={<RoleHistory/>}></Route>
                <Route path="/loginHistory" element={<LoginHistory/>}></Route>
            </Routes>
          </div>
          
        </div>
      </div>
    </BrowserRouter>
    
  );
}


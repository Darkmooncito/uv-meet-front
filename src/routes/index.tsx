import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Forgot from "../pages/forgot";
import Ressetpassword from "../pages/ressetpasword";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Editprofile from "../pages/editprofile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/ressetpassword" element={<Ressetpassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<Editprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

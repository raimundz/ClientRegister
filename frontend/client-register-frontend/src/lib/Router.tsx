import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/register/index";
import { Login } from "../pages/login/index";
import { Home } from "../pages/home/index";
import { Contact } from "../pages/register-contact/index";

export default function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/menu/Menu";
import Main from "../pages/main/Main";
import Learningmap from "../pages/learningmap/Learning";
import Tips from "../pages/tips/Tips";
import Contact from "../pages/contact/Contact";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Learningmap" element={<Learningmap />} />
        <Route path="Tips" element={<Tips />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;

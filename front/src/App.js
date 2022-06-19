import "./App.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewClient from "./pages/admin/NewClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./pages/ContactUs/ContactUs";

import Inspection from "./pages/inspection/Inspection";
import Verification from "./pages/verification/Verification";
import Testing from "./pages/testing/Testing";
import ProductCertif from "./pages/product-certif/ProductCertif";
import Academy from "./pages/academy/Academy";
import Certif from "./pages/certi/Certif";
import Office from "./pages/office/Office";
import SgsBrazil from "./pages/sgs-brazil/SgsBrazil";
import AboutSGS from "./pages/sgs-about/AboutSGS";
import Expertise from "./pages/expertise/Expertise";
import Integrity from "./pages/integrity/Integrity";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="Mcontainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<NewClient />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* solutions */}
          <Route path="/inspection" element={<Inspection />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/product" element={<ProductCertif />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/certification" element={<Certif />} />

          {/* cards */}
          <Route path="/office" element={<Office />} />
          <Route path="/ourCompany" element={<SgsBrazil />} />
          <Route path="/about-SGS" element={<AboutSGS />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/integrity" element={<Integrity />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

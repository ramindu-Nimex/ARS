import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import Services from "./Pages/Services";
import OurPartners from "./Pages/OurPartners";
import ChairmenPage from "./Pages/ChairmenPage";
import ContactUs from "./Pages/ContactUs";
import TestimonialsPage from "./Pages/TestimonialsPage";
import FooterComponent from "./components/FooterComponent";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<OurPartners />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/chairmenMsg" element={<ChairmenPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  )
}

export default App
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Consultanta from "./subPages/consultanta/Consultanta";
import Marketing from "./subPages/marketing/Marketing";
import WebDev from "./subPages/webDev/WebDev";
import BrRbr from "./subPages/branding/BrRbr";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/muna/acasa" element={<Home />} />
        <Route path="/muna/servicii" element={<Services />} />
        <Route path="/muna/consultanta" element={<Consultanta />} />
        <Route path="/muna/marketing" element={<Marketing />} />
        <Route path="/muna/design" element={<WebDev />} />
        <Route path="/muna/branding" element={<BrRbr />} />
        <Route path="/muna/despre" element={<AboutUs />} />
        <Route path="/muna/contact" element={<Contact />} />
      </Routes>
  <Footer />
    </div>
  );
}

export default App;

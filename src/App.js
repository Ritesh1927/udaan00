import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./common-component/footer/Footer";
import Navbar from "./common-component/nav/Navbar";
// import UpperNav from "./common-component/uppernav/UpperNav";
import WhatsAppButton from "./common-component/whatsup/WhatsAppButton";
import { AuthProvider } from "./auth/authContext";
import LeadTile from "./common-component/leadform/LeadTile";

function App() {
  return (
    <div className="App">
      <LeadTile />
      <Navbar />
      <div className="main-outlet-container">
        <Outlet />
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;

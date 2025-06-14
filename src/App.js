import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./common-component/footer/Footer";
import Navbar from "./common-component/nav/Navbar";
import WhatsAppButton from "./common-component/whatsup/WhatsAppButton";
import { AuthProvider } from "./auth/authContext";
import AuthModal from "./auth/AuthModal";
// import LeadForm from "./common-component/leadform/LeadTile";
import LeadTile from "./common-component/leadform/LeadTile";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <LeadTile />
        <Navbar />
        <div className="main-outlet-container">
          <Outlet />
        </div>
        <WhatsAppButton />
        <Footer />
        <AuthModal /> {/* Just render it once */}
      </AuthProvider>
    </div>
  );
}

export default App;

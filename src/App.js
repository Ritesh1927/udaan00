import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./common-component/footer/Footer";
import Navbar from "./common-component/nav/Navbar";
import WhatsAppButton from "./common-component/whatsup/WhatsAppButton";
import { AuthProvider } from "./auth/authContext";
import AuthModal from "./auth/AuthModal";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
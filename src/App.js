import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./common-component/footer/Footer";
import Navbar from "./common-component/nav/Navbar";
import WhatsAppButton from "./common-component/whatsup/WhatsAppButton";
import { AuthProvider } from "./auth/authContext";
import { useState } from "react";
import AuthModal from "./auth/AuthModal";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState("login");

  return (
    <div className="App">
      <AuthProvider>
        <Navbar 
          onLoginClick={() => {
            setAuthTab("login");
            setShowAuthModal(true);
          }}
          onRegisterClick={() => {
            setAuthTab("register");
            setShowAuthModal(true);
          }}
        />
        <div className="main-outlet-container">
          <Outlet />
        </div>
        <WhatsAppButton />
        <Footer />
        
        {showAuthModal && (
          <AuthModal 
            initialTab={authTab} 
            onClose={() => setShowAuthModal(false)} 
          />
        )}
      </AuthProvider>
    </div>
  );
}

export default App;


// import { Outlet, useNavigate } from "react-router-dom";
import "./App.css"
import { useState } from "react";
// import Shadow from "./assets/violetgradiant.avif"
// import shadow2 from "./assets/violetgradiant2.avif"
// import Navbar from "./common-component/nav/Navbar";
// import Footer from "./common-component/footer/Footer";
// import Logowhite from "./assets/whitelogo.webp"
// import WhatsAppButton from "./common-component/whatsup/WhatsAppButton";
import { AuthProvider } from "./auth/authContext";
import Fraudalert from "./fraud/Fraudalert";
// import AuthModal from "./auth/AuthModal";
function App() {
  // const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AuthProvider>
      
        {/* <div className=" main-web-wrap-udaan-home-container">
          <div className="relative flex w-full home-top-shadow-container ">
            <img className='absolute left-0 w-1/2' src={Shadow} alt="" />
            <img className='absolute right-0 w-1/2 shadow-grad2' src={shadow2} alt="" />
          </div>
    
          <div className="flex items-center justify-between px-0 py-4 md:px-8 home-main-nav-container ">
            <div className='relative logo main-wep-logo-container'>
              <img className='w-fit web-main-logo' src={Logowhite} />
            </div>
            <div className="flex items-center gap-5">
              <button
                onClick={() => navigate("/eduvoyage")}
                className="eduvoyage-btn"
              >
                <span className="eduvoyage-btn-inner">
                  EduVoyage
                </span>
              </button>
      
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center w-12 h-12 rounded-full
             bg-[#0f0919] hover:bg-[#1a0f2e] transition duration-300"
              >
       
                <span
                  className={`absolute h-[2px] w-6 bg-white rounded transition-all duration-300 ease-in-out
    ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
                />

                <span
                  className={`absolute h-[2px] w-6 bg-white rounded transition-all duration-300 ease-in-out
    ${isOpen ? "opacity-0" : "opacity-100"}`}
                />


                <span
                  className={`absolute h-[2px] w-6 bg-white rounded transition-all duration-300 ease-in-out
    ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
                />
              </button>

            </div>
          </div>


          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

          <div>
            <Outlet />
          </div>
          <WhatsAppButton />
          <AuthModal />
          <Footer />
        </div > */}
        <div>
          <Fraudalert/>
        </div>

      </AuthProvider>
    </>
  );
}

export default App;

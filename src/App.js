// import "./App.css";
// import { Outlet } from "react-router-dom";
// import Footer from "./common-component/footer/Footer";
// import Navbar from "./common-component/nav/Navbar";
// import WhatsAppButton from "./common-component/whatsup/WhatsAppButton";
// import { AuthProvider } from "./auth/authContext";
// import AuthModal from "./auth/AuthModal";

// import LeadTile from "./common-component/leadform/LeadTile";
// function App() {
//   return (
//     <div className="App">
//       <AuthProvider>
//         <LeadTile />
//         <Navbar />
//         <div style={{ marginTop: '80px' }} className="main-outlet-container">
//           <Outlet />
//         </div>
//         <WhatsAppButton />
//         <Footer />
//         <AuthModal /> 
//       </AuthProvider>
//     </div>
//   );
// }

// export default App;
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css"
import { useState } from "react";
import Shadow from "./assets/violetgradiant.avif"
import shadow2 from "./assets/violetgradiant2.avif"
import Navbar from "./common-component/nav/Navbar";
import Footer from "./common-component/footer/Footer";
import Logowhite from "./assets/whitelogo.webp"
import WhatsAppButton from "./common-component/whatsup/WhatsAppButton";
import { AuthProvider } from "./auth/authContext";
import AuthModal from "./auth/AuthModal";
function App() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AuthProvider>
        {/* <TopNav /> */}
        <div className=" main-web-wrap-udaan-home-container">
          <div className="relative flex w-full home-top-shadow-container ">
            <img className='absolute left-0 w-1/2' src={Shadow} alt="" />
            <img className='absolute right-0 w-1/2 shadow-grad2' src={shadow2} alt="" />
          </div>
          {/* Top Navbar */}
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
              {/* //////is button me add kro same button ko jo mne tumse bnavya hai */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center w-12 h-12 rounded-full
             bg-[#0f0919] hover:bg-[#1a0f2e] transition duration-300"
              >
                {/* Top line */}
                <span
                  className={`absolute h-[2px] w-6 bg-white rounded transition-all duration-300 ease-in-out
    ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
                />

                {/* Middle line */}
                <span
                  className={`absolute h-[2px] w-6 bg-white rounded transition-all duration-300 ease-in-out
    ${isOpen ? "opacity-0" : "opacity-100"}`}
                />

                {/* Bottom line */}
                <span
                  className={`absolute h-[2px] w-6 bg-white rounded transition-all duration-300 ease-in-out
    ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
                />
              </button>

            </div>
          </div>

          {/* Sidebar */}
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Pages */}
          <div>
            <Outlet />
          </div>
          <WhatsAppButton />
          <AuthModal /> {/* Just render it once */}
          <Footer />
        </div >
      </AuthProvider>
    </>
  );
}

export default App;

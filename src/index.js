import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./common-component/error/Error";
import About from "./dasboard-pages/About";
import Service from "./dasboard-pages/Service";
import Contact from "./dasboard-pages/Contact";
import Admisson from "./dasboard-pages/Admisson";
import Sip from "./dasboard-pages/Sip";
import AbroadStudy from "./dasboard-pages/AbroadStudy";
import Home from "./dasboard-pages/Home";
import SkillMigration from "./dasboard-pages/SkillMigration";
import Testimonials from "./dasboard-pages/Testimonials";
import Franchise from "./dasboard-pages/Franchise";
import Login from "./common-component/login/Login";
import Profile from "./component/insert-profile/Profile";
import HomePannel from "./admin-dashboard/HomePannel";
import TenthBoardList from "./component/resultcards/TenthBoardList";
import TwelfthBoardList from "./component/resultcards/TwelfthBoardList";
import PrivacyPolicy from "./common-component/privacy/PrivacyPolicy";
import { AuthProvider } from "./context/AuthContext"; // Fixed import
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary"; // Recommended addition
import ScrollToTop from "./common-component/scroltotop/ScrollToTop";
import Terms from "./common-component/terms/Terms";
import VerificationSuccess from "./common-component/VerificationSuccess/VerificationSuccess";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="service" element={<Service />} />
              <Route path="contact" element={<Contact />} />
              <Route path="admisson" element={<Admisson />} />
              <Route path="sip" element={<Sip />} />
              <Route path="aboradstudy" element={<AbroadStudy />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="skillmigration" element={<SkillMigration />} />
              <Route path="franchise" element={<Franchise />} />
              <Route path="login" element={<Login />} />
              <Route path="insert-profile" element={<Profile />} />
              <Route path="homepannel" element={<HomePannel />} />
              <Route path="boards/10th" element={<TenthBoardList />} />
              <Route path="boards/12th" element={<TwelfthBoardList />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="verification-success" element={<VerificationSuccess />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
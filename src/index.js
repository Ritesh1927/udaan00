import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./common-component/error/Error";
import About from "./dasboard-pages/About";
import Contact from "./dasboard-pages/Contact";
import Admisson from "./dasboard-pages/Admisson";
import Sip from "./dasboard-pages/Sip";
import AbroadStudy from "./dasboard-pages/AbroadStudy";
import Home from "./dasboard-pages/Home";
import SkillMigration from "./dasboard-pages/SkillMigration";
import Testimonials from "./dasboard-pages/Testimonials";
import Franchise from "./dasboard-pages/Franchise";
import TenthBoardList from "./component/resultcards/TenthBoardList";
import TwelfthBoardList from "./component/resultcards/TwelfthBoardList";
import PrivacyPolicy from "./common-component/privacy/PrivacyPolicy";
import ScrollToTop from "./common-component/scroltotop/ScrollToTop";
import Terms from "./common-component/terms/Terms";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Otp from "./auth/VerifyOtp";
import Profile from "./auth/Profile";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/authContext";
import ResetRequest from "./auth/ResetRequest";
import ResetPassword from "./auth/ResetPassword";
import StreamSelection from "./component/carrercycle/StreamSelection";
import ExamPreparation from "./component/carrercycle/ExamPreparation";
import Placement from "./component/carrercycle/Placement";
import CareerCounselling from "./component/carrercycle/CareerCounselling";
import Admin from "./admin/Admin";
import OnlineMba from "./dasboard-pages/OnlineMba";
import Blogs from "./dasboard-pages/Blogs";
import CollegeList from "./admin/CollegeList";
import Career from "./common-component/career/Career";
import { AuthModalProvider } from "./auth/AuthModalContext";
import UniversityDetail from "./component/abroaduniversity/UniversityDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AuthModalProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="admisson" element={<Admisson />} />
              <Route path="sip" element={<Sip />} />
              <Route path="aboradstudy" element={<AbroadStudy />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="skillmigration" element={<SkillMigration />} />
              <Route path="franchise" element={<Franchise />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="boards/10th" element={<TenthBoardList />} />
              <Route path="boards/12th" element={<TwelfthBoardList />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="verify-otp" element={<Otp />} />
              <Route path="reset-request" element={<ResetRequest />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route path="stream-selection" element={<StreamSelection />} />
              <Route path="exam-preparation" element={<ExamPreparation />} />
              <Route path="placement" element={<Placement />} />
              <Route path="career-counselling" element={<CareerCounselling />} />
              <Route path="onlineMba" element={<OnlineMba />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="collegelist" element={<CollegeList />} />
              <Route path="career" element={<Career />} />
              <Route path="/university/:name" element={<UniversityDetail />} />
            {/* <= add all new routes here  */}

            {/* <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            /> */}
          </Route>
          <Route path="*" element={<Error />}></Route>
           <Route path="/admin" element={<Admin />} />
        </Routes>
      </AuthModalProvider>
    </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

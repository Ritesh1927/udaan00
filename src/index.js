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
// import Profile from "./component/insert-profile/Profile";
// import BoardList from "./component/abroaduniversity/BoardList";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="" element={<App />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/admisson" element={<Admisson />} />
            <Route path="/sip" element={<Sip />} />
            <Route path="/aboradstudy" element={<AbroadStudy />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/skillmigration" element={<SkillMigration />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/insert-profile" element={<Profile />} /> */}
            <Route path="/boards/10th" element={<TenthBoardList />} />
            <Route path="/boards/12th" element={<TwelfthBoardList />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/verify-otp" element={<Otp />} />
            <Route path="/reset-request" element={<ResetRequest />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/stream-selection" element={<StreamSelection />} />
            <Route path="/exam-preparation" element={<ExamPreparation />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/career-counselling" element={<CareerCounselling />} />

            {/* add all new routes here => */}

            <Route path="/admin" element={<Admin />} />
            <Route path="/onlineMba" element={<OnlineMba />} />
            <Route path="/blogs" element={<Blogs />} />

            {/* <= add all new routes here  */}

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

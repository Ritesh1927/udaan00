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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admisson" element={<Admisson />} />
          <Route path="/sip" element={<Sip />} />
          <Route path="/aboradstudy" element={<AbroadStudy />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/skillmigration" element={<SkillMigration />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import "./OnlineMbaClg.css";
import Paris from "../../assets/Banner+b.webp"
import EdgeWood from "../../assets/Edgewood.jpeg.jpeg"
import Liverpool from "../../assets/Liverpool.svg"
import Goldengate from "../../assets/Goldengate.svg"
import opu from "../../assets/opu.svg"
import Birla from "../../assets/Birla.svg"
import opj from "../../assets/opj.svg"
import IMT from "../../assets/IMT.svg"
import { FaGraduationCap, FaCalendarAlt, FaDownload } from "react-icons/fa";
import OnlineMbaCard from "./OnlineMbaCard";

const collegeData = [
  {
    name: "Paris School of Business",
    title: "MBA from Paris School of Business",
    image: Paris,
    highlight: "1-Year MBA and Triple Accreditation",
    degree: "Master's Degree",
    duration: "12 Months",
    isNew: true,
  },
  {
    name: "Edgewood University",
    title: "Master of Education (M.Ed.) from Edgewood University",
    image: EdgeWood,  
    highlight: "HLC Accredited Master of Education degree",
    degree: "Master's Degree",
    duration: "14 Months",
    isNew: false,
  },
  {
    name: "Liverpool Business School",
    title: "MBA from Liverpool Business School",
    image: Liverpool,
    highlight: "Integrated with GenAI modules",
    degree: "Master's Degree",
    duration: "18 Months",
    isNew: true,
  },
  {
    name: "Golden Gate University",
    title: " MBA from Golden Gate University",
    image: Goldengate,
    highlight: " #1 Program for Working Professionals ",
    degree: "Master's Degree",
    duration: "15 Months",
    isNew: true,
  },

  {
    name: "O.P.Jindal Global University",
    title: "MBA from O.P.Jindal Global University",
    image: opu,
    highlight: "Live Case Studies and Projects",
    degree: "Master's Degree",
    duration: "12 Months",
    isNew: true,
  },
  {
    name: "Edgewood College",
    title: "MBA from Edgewood University",
    image: EdgeWood,
    highlight: "100% Flexible Learning",
    degree: "Master's Degree",
    duration: "14 Months",
    isNew: true,
  },
  {
    name: "Edgewood University",
    title: "Edgewood MBA & DBA",
    image: EdgeWood,
    highlight: "100% Flexible Learning",
    degree: "Doctorate",
    duration: "30 Months",
    isNew: true,
  },
  {
    name: "O.P.Jindal Global University",
    title: "MBA in Business & Law from O.P.Jindal Global University",
    image: opj,
    highlight: "#1 Private Law School in India (QS 2024)",
    degree: "Master's Degree",
    duration: "12 Months",
    isNew: true,
  },
  {
    name: "Birla Institute of Management Technology ",
    title: "Post Graduate Diploma in Management (BIMTECH)",
    image: Birla,
    highlight: "Placement Assistance",
    degree: "PG Diploma",
    duration: "24 Months",
    isNew: true,
  },  {
    name: "IMT Ghaziabad",
    title: "Advanced General Management Program from IMT Ghaziabad",
    image: IMT,
    highlight: "Top Management Certificate",
    degree: "Certification",
    duration: "11 Months",
    isNew: true,
  },  {
    name: "O.P.Jindal Global University",
    title: "MBA (with Career Acceleration Program by upGrad)",
    image: opu,
    highlight: "Become interview ready with Career Services",
    degree: "Master's Degree",
    duration: "12 Months",
    isNew: true,
  },

];


const OnlineMbaClg = () => {
return (
    <>
        {/* ///////////////////  */}
        <div className="container mt15">
            <h1 className="online-mba-clg-heading">
                {" "}
                Online MBA Programs From <span> Top Universities </span>Powered By upgrad
            </h1>
            <hr className="mt15 mb15" />

            
<div className="grid-three-cols">
          {/* online university card code  */}
   {collegeData.map((college, index) => (
          <OnlineMbaCard key={index} college={college} />
        ))}
</div>
  
        </div>
    </>
);
};

export default OnlineMbaClg;

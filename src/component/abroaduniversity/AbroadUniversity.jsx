import React, { useState } from "react";
import "../abroaduniversity/AbroadUniversity.css";
import Birmingham from "../../assets/Birmingham.jpg";
import Conventry from "../../assets/conventry.jpg";
import Greenwich from "../../assets/greenwich.jpg";
import Middlesex from "../../assets/Middlesex.jpg";
import Heriot from "../../assets/Heriot.jpg";
import Aston from "../../assets/Aston.jpg";
import Florida from "../../assets/florida.jpg";
import Auburn from "../../assets/auburn.jpg";
import Ludwig from "../../assets/Ludwig.jpg";
import Roosevelt from "../../assets/Roosevelt.jpeg";
import Heidelberg from "../../assets/Heidelberg.jpg";
import Canada from "../../assets/Canada.jpg";
import Greatplains from "../../assets/greatplains.png";
import Parkland from "../../assets/parkland.jpg";
import Universitymalbourne from "../../assets/universitymalbourne.jpeg";
const universityData = {
  "United Kingdom": [
    {
      name: "University of Birmingham",
      location: "Birmingham, United Kingdom",
      courses: "497+ Courses",
      logo: Birmingham,
    },
    {
      name: "Coventry university",
      location: "Priory Street, Coventry, United Kingdom",
      courses: "519+ Courses",
      logo: Conventry,
    },
    {
      name: "University of GREENWICH",
      location: "London, United Kingdom",
      courses: "450+ Courses",
      logo: Greenwich,
    },
    {
      name: "Middlesex University",
      location: "Hendon, London , United Kingdom",
      courses: "503+ Courses",
      logo: Middlesex,
    },
    {
      name: "HERIOT WATT University",
      location: " Riccarton, Edinburgh , United Kingdom",
      courses: "335+ Courses",
      logo: Heriot,
    },
    {
      name: "Aston",
      location: " Birmingham , United Kingdom",
      courses: "373+ Courses",
      logo: Aston,
    },
  ],
  USA: [
    {
      name: "Florida International University",
      location: "Miami, United States",
      courses: "379+ Courses",
      logo: Florida,
    },
    {
      name: "AUBURN University",
      location: "Auburn,United States",
      courses: "451+ Courses",
      logo: Auburn,
    },
    {
      name: "ROOSEVELT University",
      location: "Chicago, United States",
      courses: "385+ Courses",
      logo: Roosevelt,
    },
  ],
  Germany: [
    {
      name: "The Ludwig Maximilian University of Munich",
      location: "Bavaria, Germany",
      courses: "425+ Courses",
      logo: Ludwig,
    },
    {
      name: "Heidelberg University",
      location: "Baden-Wurttemberg, Germany.",
      courses: "378+ Courses",
      logo: Heidelberg,
    },
  ],
  Canada: [
    {
      name: "University Canada West",
      location: "Granville Street, Vancouver, Canada",
      courses: "457+ Courses",
      logo: Canada,
    },
    {
      name: "Great Plains College",
      location: "Swift Current, SK, Canada",
      courses: "366+ Courses",
      logo: Greatplains,
    },
    {
      name: "Parkland College",
      location: "SPrystai Way ,Yorkton,Canada​",
      courses: "366+ Courses",
      logo: Parkland,
    },
  ],
  //   Dubai: [],
  Australia: [
    {
      name: "Parklands Christian College",
      location: "Park Ridge QLD , Australia​",
      courses: "366+ Courses",
      logo: Parkland,
    },
    {
      name: "The University of Melbourne",
      location: "Grattan Street Parkville, Victoria Australia​​",
      courses: "411+ Courses",
      logo: Universitymalbourne,
    },
    {
      name: "MONASH University",
      location: "Victoria ,Australia​​",
      courses: "411+ Courses",
      logo: Universitymalbourne,
    },
  ],
};

const countries = [
  "United Kingdom",
  "USA",
  "Germany",
  "Canada",
  //   "Dubai",
  "Australia",
];
const AbroadUniversity = () => {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  return (
    <div className="university-wrapper">
      <p className="why-heading new-heading">
        Top Universities to{" "}
        <span className="why-heading-color"> Study Abroad</span>
      </p>

      <div className="tab-container">
        {countries.map((country) => (
          <button
            key={country}
            className={`tab-button ${
              selectedCountry === country ? "active" : ""
            }`}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="university-grid">
        {universityData[selectedCountry].length > 0 ? (
          universityData[selectedCountry].map((uni, idx) => (
            <div className="university-card" key={idx}>
              <div className="logo-name-wrapper">
                <img src={uni.logo} alt={uni.name} className="logo" />
              </div>
              <div>
                <h3 className="uni-name">{uni.name}</h3>
                <p className="uni-location">{uni.location}</p>
                <span className="course-tag">{uni.courses}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No data available for {selectedCountry}.</p>
        )}
      </div>
    </div>
  );
};

export default AbroadUniversity;

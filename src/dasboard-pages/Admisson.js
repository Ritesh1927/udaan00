import React, { Fragment, useState } from "react";
// ////////////// medical clg
import Aims from "../assets/aimsdelhi.avif";
import KMC from "../assets/kmc.jpg";
import Shardha from "../assets/shardha.png";
// /////////////////// management clg
import IIM from "../assets/iim.png";
import XLRI from "../assets/xlri.jpg";
// /////////////////// engneering clg
import Amity from "../assets/Amity.avif";
import Iitmadras from "../assets/iitmadras.avif";
import Iitdelhi from "../assets/iitdelhi.avif";
import Iitbombay from "../assets/iitbombay.avif";
import Iitkanpur from "../assets/iitkanpur.png";
import Nittrichy from "../assets/nittrichy.avif";
import Nitwrangal from "../assets/Nitwrangal.avif";
import Srm from "../assets/srm1.avif";
import Cmr from "../assets/cmr.png";
import CMRIT from "../assets/cmrit.jpg";
import Abes from "../assets/abes.jpg";
import Akgec from "../assets/akgec.avif";
import Glbajaj from "../assets/glbajaj.jpeg";
import Ramaiah from "../assets/ramaiah.jpg";
import Galgotias from "../assets/Galgotia.png";
import JSS from "../assets/jss.jpg";
import Upes from "../assets/Upes.jpg";
import { CiStar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import "./Admisson.css";
const colleges = {
  btech: [
    {
      img: Iitmadras,
      name: "IIT Madras",
      rank: "#1",
      location: "Chennai (Tamil Nadu )",
      rating: "4.4",
      fees: "5,000 - 3,00,000",
      accerdition: "AICTE",
      package: "12.2 LPA",
      exams: "JEE Main",
      description:
        "     IIT Chennai also known as IIT Madras is the top-ranked engineering college in India as per NIRF ranking, and the institute also holds a good rank in world university rankings. IIT Chennai is popular for its engineering programmes - B.Tech and M.Tech in various speacialsations. The highest package offered at IIT Chennai placements usually go up to Rs 1 crore per annum. The admission process of IIT Chennai for B.Tech is based on JEE Advanced rank, and the M.Tech admission process is based on GATE score. ",
    },
    {
      img: Iitdelhi,
      name: "IIT Delhi",
      rank: "#2",
      location: "Delhi",
      rating: "4.6",
      fees: "20,000 - 8,10,000",
      accerdition: "NAAC",
      package: "12.5 Crore",
      exams: "JEE Main",
      description:
        "     IIT Delhi has always been at the forefront of top engineering colleges in India. The institute is a premier engineering institution which offers top-notch education. The institute is known for excellence in education not only in India but worldwide. The IIT Delhi B.Tech admissions are done through JEE advance entrance examination and IIT Delhi M.Tech admissions are done through the GATE entrance examination. ",
    },
    {
      img: Iitbombay,
      name: "IIT Bombay ",
      rank: "#3",
      location: "Mumbai, Maharashtra",
      rating: "4.9",
      fees: "15,000 - 42,00,000",
      accerdition: "AICTE",
      package: "21.8 LPA",
      exams: "UCEED",
      description:
        "    IIT Bombay is one of the top three engineering colleges in India as per engineering rankings of NIRF, and this is the best engineering college located in Maharashtra. IIT Bombay is popular for its high quality education standards, campus facilities and placements. The highest package offered at IIT Mumbai placements reach up to Rs. 1 crore per annum, and popular companies like Microsoft hire IIT Bombay graduates. The popular engineering courses offered by IIT Bombay include B.Tech and M.Tech. B.Tech admission at IIT Mumbai is based on JEE Advanced rank and JoSAA counseling. ",
    },
    {
      img: Iitkanpur,
      name: "IIT Kanpur  ",
      rank: "#4",
      location: "Kanpur , Uttar Pradesh",
      rating: "4.4",
      fees: "6,000 - 8,00,000",
      accerdition: "AICTE",
      package: "16.8 LPA",
      exams: "JEE Main",
      description:
        "    IIT Kanpur is among the top five engineering colleges in India. The institute is a centre of excellence that offers quality education. The popular course at IIT Kanpur is B.Tech and M.Tech. There are several specialisations available in the IIT Kanpur B.Tech course namely, aerospace engineering, biological sciences and bio-engineering, chemical engineering, civil engineering, computer science and engineering, electrical engineering, materials science and engineering. The specialisations available in the IIT Kanpur M.Tech course is aerospace engineering, biological sciences and bio-engineering, chemical engineering, civil engineering, computer science and engineering, earth sciences, electrical engineering, industrial and management engineering, materials science and engineering, materials science program, mechanical engineering, nuclear engineering and technology, photonics science and engineering, sustainable energy engineering.",
    },
    {
      img: Nittrichy,
      name: " NIT Trichy  ",
      rank: "#9",
      location: "Tiruchirappalli, Tamil Nadu",
      rating: "4.7",
      fees: "13,150 - 6,25,000",
      accerdition: "UGC",
      package: "16.8 LPA",
      exams: "DASA UG , JEE Main",
      description:
        "    IIT Kanpur is among the top five engineering colleges in India. The institute is a centre of excellence that offers quality education. The popular course at IIT Kanpur is B.Tech and M.Tech. There are several specialisations available in the IIT Kanpur B.Tech course namely, aerospace engineering, biological sciences and bio-engineering, chemical engineering, civil engineering, computer science and engineering, electrical engineering, materials science and engineering. The specialisations available in the IIT Kanpur M.Tech course is aerospace engineering, biological sciences and bio-engineering, chemical engineering, civil engineering, computer science and engineering, earth sciences, electrical engineering, industrial and management engineering, materials science and engineering, materials science program, mechanical engineering, nuclear engineering and technology, photonics science and engineering, sustainable energy engineering.",
    },
    {
      img: Srm,
      name: "SRM University ",
      rank: "#13",
      location: "Chennai, Tamil Nadu",
      rating: "4.2",
      fees: "10,000 - 25,00,000",
      accerdition: "UGC",
      package: "16 LPA",
      exams: "JEE Main ,SRMJEE",
      description:
        "One of the finest universities in India, SRM Institute of Science and Technology (SRM IST), formerly known as SRM University, has more than 20,000 students and more than 2600 faculty members on its whole campus. Numerous undergraduate, graduate, and doctorate programmes are available in engineering, management, medicine, health sciences, science, and humanities, among other fields. With over 224 government-funded projects totaling INR 115 Crores, the research department at the SRMIST conducts cutting-edge research in frontier fields.SRMIST has begun its 2022 placement campaign, during which it set placement records. The graduating class of 2022 received over 10,000 offers. Over a thousand recruiters visited the school. Amazon, PayPal, Google, Morgan Stanley, VMWare, Accolite, TCS, Wipro, Wells Fargo, and many other major employers were among the top recruiters. CS/IT students received an average salary of INR 9.5 LPA. The highest salary package received was INR 1 CPA.",
    },
    {
      img: Cmr,
      name: "CMR University",
      rank: "#14",
      location: "Seamedu, Bangalore",
      rating: "4.2",
      fees: "2,50,000 - 4,00,000 ",
      accerdition: "NAAC Grade A++",
      package: " 6.5 LPA",
      exams: "JEE Main ",
      description:
        "CMR University Seamedu, Bangalore is a private university in Karnataka, established in 2013 under Act 45 by the CMR Jnanadhara Trust. The university's vision is “To nurture creative thinkers who will drive positive global change.”CMR University Seamedu, Bangalore Courses include B.Sc in Filmmaking, Game art and Design, Photography, Sound engineering, Visual Effects and Animation, and BCA in Game Development.CMR University Seamedu, Bangalore Campus developed as per LEED Green Building certification standards. All the facilities required for interactive learning like the library, laboratory, classrooms with audio-visual aids, and auditorium are there. It also has international standard sports facilities. Separate hostels are available for boys and girls. ",
    },
    {
      img: Nitwrangal,
      name: "NIT Warangal  ",
      rank: "#21",
      location: "Warangal, Telangana",
      rating: "4.2",
      fees: "10,100 - 5,00,000",
      accerdition: "UGC",
      package: "17.3 LPA",
      exams: "JEE Main , CAT",
      description:
        "NIT Warangal is known for its engineering and is one of the top colleges in Telangana as well as the country. This famous B.Tech college in India witnesses huge competition for B.Tech admission, specifically CSE course. NIT Warangal admissions are done through JEE Main for B.Tech course and through GATE for M.Tech course. NIT Warangal offers amazing placement opportunities to its, students. The highest CTC offered at NIT Warangal is Rs 62.5 Lakh per annum. ",
    },
    {
      img: Amity,
      name: "Amity University   ",
      rank: "#30",
      location: "Noida , Uttar Pradesh",
      rating: "4.3",
      fees: "7,150 - 13,95,000",
      accerdition: "UGC",
      package: "10.5 LPA",
      exams: "JEE Main , CBSE 12th",
      description:
        "Amity University Noida admissions are offered on entrance and merit basis. For MCA admission, NIMCET registration will start in March and exam will be held in June 2025; for MBA admission, XAT scorecard is required; for M.Arch admission, CEED 2025 application form is expected to be released by October 2025. The university offers 44 courses in total. Amity University fees range between Rs 7,150 - Rs 13,90,000 annually.",
    },
    {
      img: CMRIT,
      name: "CMRIT   ",
      rank: "#43",
      location: "Marathahalli, Bangalore",
      rating: "4.3",
      fees: "1,50,000 - 4,50,000",
      accerdition: "NAAC , NBA",
      package: "4.87 LPA",
      exams: "JEE Main ",
      description:
        "Chikka Muniyappa Reddy Institution of Technology (CMRIT), Bangalore, popularly known as CMR Institute of Technology under CMR Jnanadhara Trust, has recently placed 1,767 students in well-reputed companies with a highest salary package of INR 11.76 LPA and average salary package of INR 4.87 LPA. ",
    },
    {
      img: Upes,
      name: "UPES Dehradun  ",
      rank: "#46",
      location: "Dehradun, Uttarakhand ",
      rating: "4.3",
      fees: "24,000 - 20,25,000",
      accerdition: "NAAC ",
      package: " 7.02 LPA",
      exams: "JEE Main , UPESEAT",
      description:
        "UPES University was established in 2003 under the UPES Act passed by the State Assembly of Uttarakhand. It is a multidisciplinary university renowned for its industry-aligned curriculum and leading-edge specializations. It is recognised by University Grants Commission and is NIRF-ranked by the Ministry of Education, Government of India. It is Graded 'A' by NAAC and awarded QS 5-Star rating for Employability, Academic Development and Facilities.Students interested in Management, Engineering, and Science can take courses at the undergraduate, graduate, and doctoral levels through UPES University's nine schools of study. With its seven schools, the UPES Dehradun courses are provided in more than 20 industry-aligned and specialized UG and PG programmes. UPESMET, UPESPAT, ULSAT, and UPESEAT are some of the entrance exams accepted by UPES Dehradun. The main curriculum, with 20 specialities, is the UPES B.Tech. JEE Main or UPESEAT tests administered by the university are used to select students for the B.Tech programme. ",
    },
    {
      img: Ramaiah,
      name: "Ramaiah",
      rank: "#75",
      location: "Mathikere, Bangalore",
      rating: "4.2",
      fees: "1,20,000 - 4,10,000",
      accerdition: "NAAC,NBA ",
      package: "7.5 LPA",
      exams: "JEE Main ",
      description:
        "To be an Institution of International Eminence, renowned for imparting quality technical education, cutting edge research and innovation to meet global socio-economic needs .M S Ramaiah Institute of Technology shall meet the global socio-economic needs through1. Imparting quality technical education by nurturing a conducive learning environment through continuous improvement and customization.2. Establishing research clusters in emerging areas in collaboration with globally reputed organizations.3. Establishing innovative skills development, techno-entrepreneurial activities and consultancy for socio-economic needs. ",
    },
    {
      img: Akgec,
      name: "AKGEC Engineering College   ",
      rank: "#77",
      location: "Ghaziabad , Uttar Pradesh",
      rating: "4",
      fees: "29,000 - Rs 2,20,000",
      accerdition: "NAAC A++  ",
      package: "5.35 LPA",
      exams: "JEE Main ",
      description:
        "Ajay Kumar Garg College Engineering popularly known as AKGEC, was established in 1998 in Ghaziabad, Uttar Pradesh. The institute is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, and is approved by the All India Council for Technical Education. AKGEC is the only Engineering college to be awarded A++ by NAAC.    The college has placed 1438 students (including the number of students who opted out of higher studies) in 2024. The highest package stood at INR 33.8 LPA while the average package stood at INR 4.83 LPA. Some of the top recruiters were C2FO, Phone Pe, Maersk etc.",
    },
    {
      img: Abes,
      name: "ABES Engineering College   ",
      rank: "#154",
      location: "Ghaziabad , Uttar Pradesh",
      rating: "4.1",
      fees: "55,000 - 2,20,000",
      accerdition: "NAAC",
      package: "4.5 LPA",
      exams: "JEE Main , CBSE 12th",
      description:
        "Established in 2000, ABES Engineering College is a self-financed institute affiliated with AKTU located in Ghaziabad, UP. ABESEC stands in the rank band of 151-300 among 1417 institutions including IITs and NITs, which voluntarily participate in the NIRF rankings every year.    ABESEC B.Tech Admission is based on JEE-Main scores followed by UPTAC Counselling. For M.Tech & MCA/MBA  Admission, the institute accepts GATE & CUET PG scores respectively. Both direct admission and admission based on counseling are accepted by the institute.",
    },
    {
      img: Glbajaj,
      name: "GL Bajaj   ",
      rank: "#200",
      location: "Greater Noida , Uttar Pradesh",
      rating: "4",
      fees: "2,90,000 - 6,12,000",
      accerdition: "NAAC , NBA",
      package: " 10.5 LPA",
      exams: "JEE Main , CAT, MAT",
      description:
        "GL Bajaj Institute of Management and Research was established in 2007 as part of the GL Bajaj Group of Institutions. The institute is an autonomous body and was ranked as the best institute for Innovation and Entrepreneurship in 2021 by IIRF. GL Bajaj Institute of Management and Research offers Post Graduate Diploma in Management (PGDM) as their flagship course that is approved by AICTE, Ministry of HRD, Government of India. This is a two-year full-time course with dual specialization in Marketing, Finance, Human Resource Management and Information Technology.",
    },
    {
      img: Galgotias,
      name: "Galgotia University  ",
      rank: "#151 ",
      location: "Greater Noida , Uttar Pradesh",
      rating: "4.2",
      fees: "4,09,999 - 5,96,000",
      accerdition: "NAAC ",
      package: " 5.4 LPA",
      exams: "JEE Main , CUET",
      description:
        "GL Bajaj Institute of Management and Research was established in 2007 as part of the GL Bajaj Group of Institutions. The institute is an autonomous body and was ranked as the best institute for Innovation and Entrepreneurship in 2021 by IIRF. GL Bajaj Institute of Management and Research offers Post Graduate Diploma in Management (PGDM) as their flagship course that is approved by AICTE, Ministry of HRD, Government of India. This is a two-year full-time course with dual specialization in Marketing, Finance, Human Resource Management and Information Technology.",
    },
    {
      img: JSS,
      name: "JSS University  ",
      rank: "#251",
      location: "Noida, Uttar Pradesh",
      rating: "4.5",
      fees: "2,45,000- 2,91,000",
      accerdition: "NAAC ",
      package: " 5.4 LPA",
      exams: "JEE Main , CUET",
      description:
        "JSS University is a highly reputed university in Noida, Uttar Pradesh. The University was founded by JSS Mahavidyapeetha. JSS University is approved by AICTE and the Government of Uttar Pradesh. The University offers Undergraduate, and Postgraduate courses in Science, Technology, Management and Life Sciences & Pharma through its various Schools. Admission is granted on a merit basis.",
    },
  ],
  medical: [
    {
      img: Aims,
      name: " AIIMS  ",
      rank: "#1",
      location: "Delhi",
      rating: "4.4",
      fees: "5,856",
      accerdition: "UGC",
      package: "16 LPA",
      exams: "NEET",
      description:
        " The All India Institute of Medical Sciences (AIIMS) Delhi is a premier medical institution in India, established in 1956 as a government-run, autonomous entity. It's known for its high-quality medical education and research, offering undergraduate, postgraduate, and doctoral programs in various medical and allied sciences. AIIMS Delhi is a leading center for both training medical professionals and providing patient care, with a focus on developing a comprehensive model for healthcare.",
    },
    {
      img: KMC,
      name: " KMC Manipal  ",
      rank: "#12  ",
      location: "Manipal, Karnataka",
      rating: "4.4",
      fees: "70.89 Lakhs",
      accerdition: "NAAC, ISO, and NABL",
      package: "15.80 LPA",
      exams: "NEET ,MET",
      description:
        " Kasturba Medical College (KMC), Manipal is private medical college in India established in 1953. It is under the  aegis of the Manipal Academy of Higher Education (MAHE) and is recognized by the Medical Council of India (MCI). The college offers admission in various undergraduate, postgraduate, and super-speciality courses in the field of Medicine. KMC Manipal accepts merit in NEET UG (MBBS), NEET PG (MD / MS) and NEET SS (DM / MCh). Admission to M.Sc (Medical)  courses is through the Manipal",
    },
    {
      img: Shardha,
      name: " Sharda University  ",
      rank: "#348  ",
      location: "Greater Noida, Uttar Pradesh",
      rating: "4.0",
      fees: "57.12 Lakhs",
      accerdition: "NAAC A+ , NBA ",
      package: "15.80 LPA",
      exams: "NEET ,MET",
      description:
        "Sharda University, established in 2009, is a renowned private university located in Greater Noida, Uttar Pradesh. The university is accredited with a Grade A+ by NAAC and recognized by the UGC. Sharda University is ranked among the top 4% of universities in Asia for the year 2024 as per QS Rankings. According to NIRF 2024, Sharda University has been ranked 86th (Overall) and 69th (Pharmacy). It has academic tie-ups with 250+ Universities worldwide from countries such as the USA, UK, Russia, Slovenia, Italy, Canada, and many more.",
    },

    // { name: "CMC Vellore", location: "Vellore" },
  ],
  management: [
    {
      img: IIM,
      name: " IIM Ahmedabad ",
      rank: "#31  ",
      location: "Ahmedabad, Uttar Pradesh",
      rating: "4.5",
      fees: "12,00,000 - 25,00,000",
      accerdition: "EQUIS , EFMD ",
      package: "57.12 LPA",
      exams: "NEET ,MET",
      description:
        "IIM Ahmedabad has successfully placed 100% of its students from the PGP batch of 2025. Students were placed across 30 cohorts in three clusters. The placements were conducted through Laterals Placements Processes. Firms from multiple sectors, such as technology, banking, finance, consulting, analytics, etc, participated in the IIM Ahmedabad Placement. Students were offered roles in middle and senior management positions from Boston Consulting Group, Accenture Strategy, Goldman Sachs, Avendus Capital, Tata Administrative Services, GMR Group, FinIQ Consulting, Navi, etc.",
    },
    {
      img: XLRI,
      name: " XLRI Jamshedpur ",
      rank: "#9  ",
      location: "Jamshedpur",
      rating: "4.5",
      fees: "4,00,000 - 58,84,000",
      accerdition: "AACSB , EFMD ",
      package: "30.5 LPA",
      exams: "NEET ,MET",
      description:
        "XLRI (Xavier School of Management) in Jamshedpur, Jharkhand, is a renowned business school known for its strong focus on ethical and socially responsible leadership. Founded in 1949 by Jesuit Fathers, it's the oldest business school in India. XLRI emphasizes academic excellence, holistic student development, and a commitment to improving society through ethical management practices. It offers a range of management programs, including PGDM (HRM), PGDM (GM), and others. ",
    },

    // { name: "XLRI Jamshedpur", location: "Jamshedpur" },
    // { name: "FMS Delhi", location: "Delhi" },
  ],
};
const Admisson = () => {
  const [activeTab, setActiveTab] = useState("btech");

  const handleTabClick = (type) => setActiveTab(type);
  return (
    <Fragment>
      <section className="college-section container">
        <h2 className="section-title">Explore Colleges by Category</h2>
        <div className="category-tabs">
          <div
            className={`category-card ${activeTab === "btech" ? "active" : ""}`}
            onClick={() => handleTabClick("btech")}
          >
            B.Tech
          </div>
          <div
            className={`category-card ${
              activeTab === "medical" ? "active" : ""
            }`}
            onClick={() => handleTabClick("medical")}
          >
            Medical
          </div>
          <div
            className={`category-card ${
              activeTab === "management" ? "active" : ""
            }`}
            onClick={() => handleTabClick("management")}
          >
            Management
          </div>
        </div>

        <div className="college-cards">
          {colleges[activeTab].map((college, index) => (
            <div key={index} className="college-card">
              <div className="clg-img-wrap">
                <img src={college.img} alt="" />
              </div>
              {/* //////////////////// */}
              <div className="admisn-clg-details">
                <div className=" inline clgname-location">
                  <h3>{college.name}</h3>
                </div>

                <p className="nirf-ranking">
                  {" "}
                  <span className="rank-no">{college.rank}</span> NIRF
                </p>
                <div className="inline addres-admisn-wrapper ">
                  <p className="clg-sepecific">
                    {" "}
                    <i className="admisn-location">
                      <FaLocationDot />
                    </i>
                    {college.location}
                  </p>
                  <button className="ranking-btn">
                    {college.rating}
                    <i className="clg-sepecific-icon">
                      <CiStar />
                    </i>
                  </button>
                </div>
                <div className="inline address-certificate-container">
                  <div>
                    <p className="clg-sepecific">
                      <i className="clg-sepecific-icon">
                        <RiMoneyRupeeCircleLine />
                      </i>
                      {college.fees}
                    </p>
                    <span className="under-heading"> Fees</span>
                  </div>
                  <div>
                    <p className="clg-sepecific">
                      <i className="clg-sepecific-icon">
                        <LiaCertificateSolid />
                      </i>
                      {college.accerdition}
                    </p>
                    <span className="under-heading"> Accerdition</span>
                  </div>
                  <div>
                    <p className="clg-sepecific">
                      <i className="clg-sepecific-icon">
                        <FaHandHoldingUsd />
                      </i>
                      {college.package}
                    </p>
                    <span className="under-heading">Avg Package</span>
                  </div>
                  <div>
                    <p className="clg-sepecific">
                      <i className="clg-sepecific-icon">
                        <PiCertificate />
                      </i>
                      {college.exams}
                    </p>
                    <span className="under-heading">Exams</span>
                  </div>
                </div>

                <div>
                  <p className="clg-admisn-discription">
                    {college.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Admisson;

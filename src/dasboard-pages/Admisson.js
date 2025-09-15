import React, { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Star from "../assets/star.png";
// ////////////// medical clg
import Aims from "../assets/aimsdelhi.avif";
import Jamiam from "../assets/JamiaMed.avif"
import KM from "../assets/km.avif"
import Lhmc from "../assets/Lhmc.jpeg"
import Shardha from "../assets/shardha.png";
import KMCM from "../assets/kmcmanglore.jpeg";
import Psg from "../assets/Psg.jpeg"
import IGMIMS from "../assets/Igims.jpeg"
import AIIMSJ from "../assets/Aiimsj.png";
import VMCC from "../assets/vmcc.jpg";
import Msrch from "../assets/msrh.jpg"
import Gmch from "../assets/Gmch.jpg"
import KMC from "../assets/kmc.jpg";
import AIIMSBH from "../assets/AiimsBh.jpg";
import DMC from "../assets/DMC.jpg"
import Mamc from "../assets/Mamc.jpg"
import Saveetha from "../assets/Saveetha.jpg";
import Stjohn from "../assets/Stjohn.jpg";
import SRMCRI from "../assets/Srmcri.jpg";
import AIIMSRI from "../assets/Aiimsri.jpg";
import IPGME from "../assets/Ipgme.jpg";
import Dattamegh from "../assets/Dattamegh.png";
import Grant from "../assets/Grant-medical.jpg"
// /////////////////// management clg
import IIM from "../assets/iim.png";
import XLRI from "../assets/xlri.jpg";
import Jipmer from "../assets/Jipmer.jpg";
import CMC from "../assets/cmc.jpg";
import Iimcalcutta from "../assets/Iim-calcutta.jpg";
import Iimlucknow from "../assets/iim-lucknow.jpeg"
import IITRoorkee from "../assets/IIT-Roorkee.jpeg"
import Iimbanglore from "../assets/iim-banglore.webp";
import Symboisis from "../assets/symboisis.avif"
import Iimudaipur from "../assets/iimudaipur.jpeg"
// /////////////////// engneering clg
import Amity from "../assets/Amity.avif";
import Iitmadras from "../assets/iitmadras.avif";
import Iitdelhi from "../assets/iitdelhi.avif";
import Iitbombay from "../assets/iitbombay.avif";
import IITkharagpur from "../assets/IITKharagpur.avif";
import IITGuwahati from "../assets/IITGuwahati.avif";
import IITHYDERABAD from "../assets/IITHYDERABAD.avif";
import Nittrichy from "../assets/nittrichy.avif";
import Nitwrangal from "../assets/Nitwrangal.avif";
import VITVellore from "../assets/VITVellore.avif";
import BITMesra from "../assets/BITMesra.avif";
import Srm from "../assets/srm1.avif";
import Ramaiah from "../assets/ramaiah.jpg";
import IitDhanbad from "../assets/iitdhanbad.jpeg";
import NITcalicut from "../assets/NITcalicut.jpeg";
import IITGandhinagar from "../assets/iitgandhinagar.jpeg";
import IitBhu from "../assets/IITbhu.jpg";
import CMRIT from "../assets/cmrit.jpg";
import Abes from "../assets/abes.jpg";
import NITSurathkal from "../assets/NITSurathkal.jpg";
import IITROPAR from "../assets/iitropar.jpg";
import NITRourkela from "../assets/NitRourkela.jpg";
import Thapar from "../assets/thaparuniversity.jpg";
import Akgec from "../assets/akgec.avif";
import IITindore from "../assets/IITindore.avif";
import JSS from "../assets/jss.jpg";
import Upes from "../assets/Upes.jpg";
import Glbajaj from "../assets/glbajaj.jpeg";
import ANNA from "../assets/anna.jpeg";
import Galgotias from "../assets/Galgotia.png";
import Jadhavpur from "../assets/jadhavpur.png";
import Iitkanpur from "../assets/iitkanpur.png";
import Cmr from "../assets/cmr.png";
import Soa from "../assets/soa.png";
import DTU from "../assets/DTU.png";
import Mandi from "../assets/mandi.png";
import IIEST from "../assets/iiest.jpg";
import Dypatil from "../assets/Dypatil.jpg";

// import { CiStar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import "./Admisson.css";

// Change this constant to adjust the description cutoff
const DESCRIPTION_LIMIT = 220;
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
      img: IITkharagpur,
      name: "IIT Kharagpur ",
      rank: "#5",
      location: "Kanpur , Uttar Pradesh",
      rating: "4.7",
      fees: "  27,650 - 25,00,000",
      accerdition: "AICTE , UGC",
      package: "24 LPA, ",
      exams: "     JEE Advanced",
      description:
        "    IIT Kharagpur was established in 1950 and was declared an Institute of National Importance in 1956. As per the NIRF Rankings 2022, the institute ranked 5th in the engineering category. The IIT Kharagpur courses list includes B.Tech, M.Tech, B.Tech+M.Tech Dual Degree, and PhD programmes in fields such as chemical engineering, aerospace engineering, CSE, civil engineering, EEE, electrical engineering, and many more. The institute accepts JEE Advanced and GATE for B.Tech and M.Tech admissions, respectively. IIT Kharagpur B.Tech fees is Rs 2,00,000 per year. ",
    },
    {
      img: IITGuwahati,
      name: " IIT Guwahati ",
      rank: "#7",
      location: "Guwahati, Assam",
      rating: "4.9",
      fees: "     6,000 - 8,00,000",
      accerdition: "AICTE ,NAAC",
      package: "24 LPA, ",
      exams: "    UCEED , JEE Advanced",
      description:
        "IIT Guwahati is one of the top 10 engineering colleges in India which is popular for its innovative research and engineering education. IIT Guwahati takes admissions to its engineering through the JEE Advance and GATE entrance examination. The IIT Guwahati B.Tech and M.Tech courses are offered in Biosciences and Bioengineering, Chemical Engineering, Chemical Science and Technology, Civil Engineering, Computer Science and Engineering, Data Science and Artificial Intelligence, Electronics and Communication Engineering, Electronics and Electrical Engineering, Energy Engineering, Engineering Physics, Mathematics and Computing, Mechanical Engineering. ",
    },
    {
      img: IITHYDERABAD,
      name: "   IIT Hyderabad",
      rank: "#8",
      location: "Hyderabad, Telangana",
      rating: "5",
      fees: "10,000 - 11,00,000",
      accerdition: "AICTE ,NAAC",
      package: "24 LPA, ",
      exams: "    UCEED , JEE Advanced",
      description:
        "IIT Hyderabad has started the admission process for all its courses. UCEED 2025 results will be released on March 7, 2025. Candidates with valid UCEED 2025 scores are eligible for BDes admission 2025. CEED results 2025 willl be announced at the same time. From April 1 to 8, 2025, JEE Main April Session is to be held. Registration for JEE Advanced 2025 is to begin on April 23, 2025. JEE Main 2025 qualified candidates have to take the JEE Advanced 2025, followed by JoSAA counselling for final admission in IIT Hyderabad ",
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
      img: IitBhu,
      name: " IIT BHU",
      rank: "#10",
      location: "Varanasi, Uttar Pradesh",
      rating: "4.7",
      fees: "   20,000 - 10,63,000",
      accerdition: " UGC",
      package: " 20 LPA",
      exams: "GATE, JEE Main",
      description:
        " IIT BHU is ranked 13 in the NIRF engineering ranking 2022 and is one of the most prestigious institutes in India. It is also the best engineering college in Uttar Pradesh. The IIT BHU B.Tech admissions are done through JEE advance entrance exam and the M.Tech admissions are done through the GATE entrance exam. The institute is desired by engineering aspirants in India because of the world-class education and the amazing placement opportunities available for its student.",
    },
    {
      img: VITVellore,
      name: "      VIT Vellore ",
      rank: "#11",
      location: "Vellore, Tamil Nadu",
      rating: "4.3",
      fees: " 3,200 - 14,25,000",
      accerdition: " MHRD",
      package: "9.23 LPA",
      exams: "AIEED , JEE Main",
      description:
        " VIT Vellore admissions 2025 are open for PhD (January session). The pre-registration for 2025 MBA admission has also started. CAT XAT, MAT, and CMATscores are taken into consideration for MBA admission. The college conducts VITEEE for BTech admission where as it accepts NATA for B.Arch. The institution provides 105 courses in various specialisations. VIT Vellore fees range from Rs 3,200 to Rs 14,25,000 annually for different courses.",
    },
    {
      img: Jadhavpur,
      name: "Jadavpur University",
      rank: "#12",
      location: "Kolkata, West Bengal",
      rating: "4.3",
      fees: " 9,600 - 1,70,000",
      accerdition: "UGC",
      package: "9.23 LPA",
      exams: "GATE, JEE Main",
      description:
        " Jadavpur University is an Indian public autonomous university located in Kolkata. The University provides a variety of undergraduate, graduate, and doctoral degree programmes. Jadavpur University courses are available in arts, science, and education, as well as in professional fields such as architecture, engineering, and pharmacy. A total of 140+ courses are available at the university. Jadavpur University is recognised by the University Grants Commission (UGC) and the All India Council for Technical Education (AICTE). The university is also accredited by the National Assessment and Accreditation Council (NAAC) with an ‘A’ grade. The 96-acre Jadavpur University campus is home to a total of 35 departments under its three academic faculties along with a number of interdisciplinary schools and centres of excellence. Its campus facilities include hostels, guest houses, a central library, a daycare centre, a health centre, and JU Employees' Coop Credit Society Limited, among many others. The Jadavpur University application process is entirely online. Both admission and merit play a role in the selection process. Jadavpur University ranking 2024 has been released by NIRF. Jadavpur University ranked 9th in the overall category of NIRF Ranking 2024.",
    },
    {
      img: IitDhanbad,
      name: " Iit Dhanbad",
      rank: "#15",
      location: "Dhanbad, Jharkhand",
      rating: "4.2",
      fees: " 18,000 - 4,65,000",
      accerdition: "MHRD",
      package: "16.98 LPA",
      exams: "GMAT, JEE Main",
      description:
        "  IIT ISM Dhanbad was established in 1926 as the Indian School of Mines. Later, in 1967, it was granted the status of a Deemed to be University. As per the NIRF Rankings 2022, the institute was ranked 14th in the engineering category and 38th in the overall category. It offers a range of UG, PG, and PhD courses in engineering and technology under its 17 academic departments. As per the IIT ISM Dhanbad placement report 2022, the highest package was Rs 50 lakh per annum. IIT ISM Dhanbad average package was Rs 17 lakh per annum.",
    },

    {
      img: IITindore,
      name: " IIT Indore",
      rank: "#16",
      location: "Indore, Madhya Pradesh",
      rating: "4.5",
      fees: "  74,000 - 8,00,000 ",
      accerdition: "MHRD",
      package: "25.4 LPA",
      exams: "GATE, JEE Main",
      description:
        "  IIT Indore is one among the top 15 engineering colleges located in Madhya Pradesh, and this best engineering college always features in top 10-15 engineering colleges in NIRF Rankings. The popular engineering courses offered by IIT Indore are in B.Tech and M.Tech. For B.Tech admission at IIT Indore, JEE Advanced rank is mandatory. M.Tech admission at IIT Indore is based on GATE score. The highest domestic CTC offered at IIT Indore placements goes up to Rs 60 Lakh per annum while the average CTC ranges between 20-25 Lakh per annum.",
    },

    {
      img: NITSurathkal,
      name: " NIT Surathkal",
      rank: "#17",
      location: "Mangalore, Karnataka",
      rating: "4.0",
      fees: " 15,000 - 1,31,000",
      accerdition: "UGC",
      package: "13.1 LPA",
      exams: "GATE, JEE Main",
      description:
        " NITK Surathkal is among the top 10 engineering colleges in India. Located in Mangalore the institute is the best engineering college in Karnataka. NITK Surathkal is a government-funded institute which is a part of the NIT fraternity in India. The institute also holds a good position in the world rankings. The most popular courses of NITK Surathkal are the B.Tech and M.Tech courses. The admission process for B.Tech offered by NIT Surathkal is based on the JEE Main exam, and the M.Tech admissions are based on GATE. The NITK Surathkal placements are also remarkable one, the highest CTC offered was Rs 51 Lakh per annum.",
    },
    {
      img: IITGandhinagar,
      name: "    IIT Gandhinagar",
      rank: "#18",
      location: "Gandhinagar, Gujarat",
      rating: "4.8",
      fees: "  4,000 - 8,00,000",
      accerdition: "AICTE",
      package: "19.6 LPA",
      exams: "Gate , JEE Main",
      description:
        " IIT Gandhinagar is one of the top 25 engineering colleges in India as per NIRF rankings, and the institute is quite popular for its campus placements and research. The engineering courses offered by IIT Gandhinagar are in B.Tech and M.Tech. For B.Tech admission at IIT Gandhinagar, JEE Advanced rank is mandatory and the M.Tech admission process is based on a GATE score. Being a part of the IIT fraternity in India the institute holds an important role in educating students. The highest salary offered at IIT Gandhinagar is Rs 62 Lakh per annum.",
    },
    {
      img: ANNA,
      name: " Anna University",
      rank: "#20",
      location: "Chennai , Tamil Nadu",
      rating: "4.5",
      fees: "   30,000 - 87,500",
      accerdition: "UGC",
      package: "6.93 LPA",
      exams: "GATE, JEE Main",
      description:
        "Anna University is a major public university in Chennai, India, known for its engineering and technology programs. It was named after Dr. C.N. Annadurai, a former Chief Minister of Tamil Nadu. The university comprises the College of Engineering, Guindy (CEG), Alagappa College of Technology (ACT), Madras Institute of Technology (MIT), and the School of Architecture and Planning (SAP). Anna University is a large state-run university with over 571 affiliated colleges. It is also ranked highly in both QS World University Rankings and THE Asia Rankings. ",
    },
    {
      img: IITROPAR,
      name: " IIT Ropar ",
      rank: "#22",
      location: "Ropar, Punjab",
      rating: "4.5",
      fees: "   6,000 - 2,00,000",
      accerdition: "AICTE ",
      package: "21 LPA",
      exams: "GATE, JEE Main",
      description:
        "IIT Ropar has started engineering admissions for the academic year 2025. The JEE Main 2025 session 1 has been conducted and the results are out. JEE Main 2025 Session 2 application form is open 25th February, 2025 (up to 9:00 P.M.) and the exam will be held from April1 to 8, 2025. Candidates have to first clear JEE Main to be eligible for JEE Advanced for B.Tech admissions at IIT Ropar. The JEE Advanced exam will be conducted on 18th May, 2025. For MTech admissions, GATE exam will be held on Feb 1, 2, 15, and 16, 2025.  ",
    },
    {
      img: NITcalicut,
      name: "   NIT Calicut ",
      rank: "#25",
      location: "Calicut, Kerala",
      rating: "4.3",
      fees: "   30,000 - 5,00,000",
      accerdition: "AICTE ",
      package: "13.8` LPA",
      exams: "GATE, JEE Main",
      description:
        "The National Institute of Technology Calicut (NITC) is a public technical university and institute of national importance, located in Kozhikode, Kerala, India. Established in 1961 as a Regional Engineering College, it gained Deemed University status in 2002 and subsequently became a NIT under the National Institute of Technology Act 2007. NITC is known for its strong focus on engineering, science, technology, and management education and research.  ",
    },
    {
      img: Thapar,
      name: " Thapar University",
      rank: "#29  ",
      location: "Patiala, Punjab",
      rating: "4.5",
      fees: "     42,200 - 18,20,000",
      accerdition: "UGC",
      package: "7 LPA",
      exams: "GATE, CAT",
      description:
        "Thapar University, founded in 1956, is a pioneering institution for engineering education, research, and innovation. Located in Patiala, it boasts a sprawling 250-acre campus. Recognized for its innovation-driven approach, Thapar is a top-ranked private university in India and holds an 'A+' grade from NAAC. It emphasizes quality education, encourages student diversity, and fosters an environment for scholarly inquiry and research. Thapar's alumni have made significant contributions across various fields, including business, industry, and research.",
    },
    {
      img: Thapar,
      name: " ICT Mumbai",
      rank: "#41",
      location: "Mumbai, Maharashtra",
      rating: "4.8",
      fees: "41,250 - 3,48,000",
      accerdition: "AICTE",
      package: "6 LPA",
      exams: "GATE, JEE Main",
      description:
        " ICT Mumbai is one of the best colleges for Chemical Engineering in India, which offers a wide range of sub-specializations in the field of Chemistry and Chemical Engineering. The ICT Mumbai admission process for B.Tech Chemical Engineering, Food Engineering, Fibre Technology, Pharmaceutical Chemistry and Surface Coating Technology is based on a centralized counselling process conducted by State Common Entrance Test Cell Maharashtra. Therefore, clearing MHT CET is mandatory for B.Tech admission at ICT Mumbai.",
    },
    {
      img: BITMesra,
      name: "        BIT Mesra ",
      rank: "#48",
      location: "Ranchi,Jharkhand",
      rating: "4.0",
      fees: "  32,000 - 5,85,000",
      accerdition: "   UGC",
      package: "11.6 LPA",
      exams: "JEE Main",
      description:
        "Birla Institute of Technology was founded in 1955 by the visionary industrialist Mr. BM Birla with the specific goal of providing a platform for its young minds to let their imaginations fly and their ideas come to life. For nearly six decades, the institute has been developing brains with a strong tradition of academic excellence, establishing learning frameworks that are far ahead of their time. BIT Mesra is one of Jharkhand's best technical universities. The university is well-known for its diversity, with nearly 58% of its enrollment coming from different Indian states. It was awarded the status of deemed university. The university is ranked 20th in Architecture and Planning, 28th in Pharmacy, 53rd in Engineering, 71st in University, and 77th in Management in the NIRF Ranking 2023.",
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
      img: NITRourkela,
      name: "NIT Rourkela",
      rank: "#19  ",
      location: "Rourkela, Odisha",
      rating: "4.4",
      fees: "  11,000 - 6,25,000",
      accerdition: "UGC,AICTE,NBA",
      package: "12.9 LPA",
      exams: "Gate , JEE Main",
      description:
        "National Institute of Technology Rourkela is a publicly funded institute of higher learning in engineering, science, and technology. The institute aims to be internationally recognised and to produce competent engineers and scientists. NIT Rourkela courses include M.Tech, B.Arch, M.Arch, and M.Plan. Students are required to qualify for the GATE exam for admission to the M.Tech/M.Arch/M/Plan courses.   NIT Rourkela has been ranked 1001–1200 in the Times Higher Education (THE) ranking 2024. National Institute of Technology Rourkela has been ranked 10th, 16th, 37th, and 29th  in the NIRF 2024 rankings for Architecture and Planning, Engineering, Overall, and Research Institutions, respectively. National Institute of Technology Rourkela or NIT Rourkela was formerly known as the Regional Engineering College (REC) Rourkela. It was established on August 15, 1961, and is an institute of national importance and operates independently under the Department of Human Resource Development, thus becoming one of the National Institutes of Technologies in India. ",
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
      img: Soa,
      name: "  SOA Bhubaneswar ",
      rank: "#26",
      location: "Bhubaneswar, Odisha",
      rating: "4.3",
      fees: "35,000 - 25,00,000",
      accerdition: "UGC",
      package: "5,10,000 to 12,00,000",
      exams: "XAT",
      description:
        "Siksha 'O' Anusandhan has been ranked 1001-1200 in QS World Rankings 2023. Siksha 'O' Anusandhan (SOA), formerly Siksha 'O' Anusandhan University, is a private deemed-to-be university located at Bhubaneswar, Odisha, India. The university is composed of nine degree-granting schools and colleges and has a student body of around 10,000. Many of SOA's programs are nationally accredited, including engineering, medicine, pharmacy, business, nursing, biotechnology, science, humanities, environment, nanotechnology, materials science, agriculture and law. SOA is a NAAC accredited Deemed to be University situated in Bhubaneswar, Odisha. NAAC as accredited it with an A++ grade (3rd cycle). SOA was granted greater autonomy (graded autonomy) by the UGC in 2018, one of the few to be granted so in India. Siksha O Anusandhan has ranked 9th, 8th, 16th, 49th, 26th, 27th, 15th, and 57th in the NIRF Ranking 2023 for Dental, Law, Medical, Research Institutions, Overall, Engineering, University, and Management, respectively. PHRD NIRF India rankings 2022 has ranked SOA 16th in the university category, 27th in the engineering category,18th in the medical category, 10th in the dental category, 9th in law category and 45th in the research category. The NIRF rankings also ranked SOA the as the 32nd Best National Institution in the engineering category (2019), the 24th best in the University Category and the 19th best in the Medical Category. SOA is the Only Higher Educational Institution in Odisha to be listed within the first 40 overall and first 25 in the University Category under NIRF Ranking 2018. ",
    },
    {
      img: DTU,
      name: " DTU ",
      rank: "#27",
      location: "Delhi",
      rating: "4.6",
      fees: "25,000 - 2,36,700",
      accerdition: "Autonomous",
      package: "5,10,000 to 12,00,000",
      exams: "XAT",
      description:
        "The DTU full form is Delhi Technological University and it is one of the oldest engineering colleges in Delhi and was established in 1941. The university is also renowned for its management courses and for this purpose, it has recently established its University School of Management and Entrepreneurship (USME) which is also known as the East Delhi campus of DTU. Delhi Technological University World University Ranking falls between the range of 601-800. The university achieved an overall score of 34.0-39.2. Delhi Technological University NIRF ranking is 61 for the overall category, 40 for the university category and 29 for the engineering category. All the courses are approved by the University Grants Commission (UGC) and accredited by the NAAC with an ‘A’ grade. DTU courses include M.Tech, B.Des, M.Des, MBA, etc. The placement offers at DTU are made in reputed firms with packages as high as Rs 1.2 crore per annum.  ",
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
      img: Mandi,
      name: "IIT Mandi ",
      rank: "#31",
      location: "Mandi ,Himachal Pradesh",
      rating: "5.0",
      fees: "10,000- 10,39,000",
      accerdition: "MHRD",
      package: "26.5 LPA",
      exams: "JEE Advanced",
      description:
        " IIT Mandi is one of the top 50 engineering colleges in India and it is the best engineering college located in Himachal Pradesh. Established in 2009, IIT Mandi has emerged as one of the top engineering colleges in India due to the quality of education it provides. The popular courses offered by IIT Mandi include B.Tech and M.Tech. The B.Tech admissions are made through JEE Advance exam and M.Tech admissions are made through GATE exam. The amazing placement opportunities at IIT Mandi are another example of the institute's good performance. At IIT Mandi placements every year, the highest salary offered rises by 9-10% and top companies hire the graduates of IIT Mandi.",
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
      img: IIEST,
      name: "IIEST Shibpur  ",
      rank: "#49",
      location: "Howrah, West Bengal ",
      rating: "4.7",
      fees: "30,000 - 5,00,000",
      accerdition: "UGC ",
      package: " 7.5 LPA",
      exams: "JEE Advanced",
      description:
        "IIEST Shibpur BTech admission process will start with JoSAA registration on June 10, 2024. The results and NTA scores for JEE Main 2024 session two for paper one were announced by NTA on April 24, 2024. Students need their JEE Main session 2 application number, date of birth and security pin on the NTA website to download their scorecards. IIEST Shibpur cutoff 2024 for BTech might be released by the second week of June 2024. A total of 54 male, two female, one third gender students were toppers in JEE Main session two paper one in their respective gender-wise categories.  ",
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
      img: Dypatil,
      name: "Ajeenkya DY Patil University (ADYPU)",
      rank: "#159 ",
      location: " Pune, Maharashtra",
      rating: "4.2",
      fees: "2,50,000 - 3,00,000",
      accerdition: "AICTE ",
      package: " 6.5 LPA",
      exams: "JEE Main , CUET",
      description:
        "Ajeenkya DY Patil University (ADYPU) is a private university in Pune, Maharashtra, known for its focus on innovation, industry collaboration, and holistic education. They emphasize preparing students for global challenges and offer a range of undergraduate and postgraduate programs across various disciplines. The university is part of the DY Patil Group, a network of educational institutions in India. ADYPU also emphasizes experiential learning and cutting-edge programs.",
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
      img: Jipmer,
      name: "     JIPMER Puducherry ",
      rank: "#5",
      location: "Puducherry, Puducherry",
      rating: "4.0",
      fees: "13 - 46,580",
      accerdition: "Medical Co ",
      package: "18.0 LPA",
      exams: "INI CET",
      description:
        "CMC Vellore admission offers intensive, full-time Master of Science (M.Sc.) programme for students who want to continue their studies in science. The M.Sc. specializations offered by CMC Vellore are Otorhinolaryngology, General Surgery, Obstetrics & Gynaecology, Ophthalmology, Orthopedics, ENT, Bioengineering. The total duration of M.Sc. programmes at CMC Vellore is 2-3 years. ",
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
      img: AIIMSRI,
      name: " AIIMS Rishikesh ",
      rank: "#14  ",
      location: "Rishikesh, Uttarakhand",
      rating: "5.0",
      fees: "2,110-2,00,000",
      accerdition: "Government",
      package: "12.4 LPA",
      exams: "INI CET ",
      description:
        " AIIMS Rishikesh courses are offered such as for undergraduate, postgraduate, diploma, and doctoral-level courses. Medical courses include MBBS, MD/MS, Ph. D, MDS, DM, M. Ch, PDCC, and M.Phil. Paramedical courses include B.Sc, M.Sc, technician, and B.Sc./diploma programmes. Each course at AIIMS Rishikesh has a separate specialisation. The AIIMS Rishikesh course admissions have different admission criteria according to the course such as for MBBS, selection criteria are based on the NEET examination.  For other B.Sc. courses, students must appear in the AIIMS Rishikesh entrance examination. Candidates will be shortlisted based on merit scores and must attend an AIIMS Rishikesh counselling session. The AIIMS Rishikesh Placements is credible to 125+ students of MBBS, 130+ students of Nursing, and 700+ postgraduate students. The institute had roped in a leading e-governance system to speed up its internship services. AIIMS Rishikesh NIRF ranking 2023 is 86th rank in the overall category and 22nd rank in NIRF Medical Ranking 2023.",
    },
    {
      img: AIIMSBH,
      name: "  AIIMS Bhubaneswar  ",
      rank: "#15",
      location: "Bhubaneswar, Odisha",
      rating: "4.5",
      fees: "1,05,000 Lakhs",
      accerdition: "NAAC, ISO, and NABL",
      package: "14 LPA",
      exams: "NEET ",
      description:
        " AIIMS Bhubaneswar is the best medical college in Odisha. This popular AIIMS college in India witnesses huge competition for MBBS admission. For MBBS admission at AIIMS Bhubaneswar, qualifying NEET UG with a good rank is mandatory followed by a counselling process conducted by Medical Counselling Committee. For admission to PG medical courses offered by AIIMS Bhubaneswar, qualifying for CET is mandatory. AIIMS Bhubaneswar Nursing admissions are based on the AIIMS B.Sc Nursing entrance exam. Students both during and after the course completion get great exposure to thousands of patients.",
    },
    {
      img: AIIMSJ,
      name: " AIIMS Jodhpur ",
      rank: "#16",
      location: "Jodhpur, Rajasthan",
      rating: "5.0",
      fees: "1,40,000",
      accerdition: "Government ",
      package: "13.56 LPA",
      exams: "NEET ",
      description:
        "AIIMS Jodhpur is a medical institution and research university in Jodhpur, India, serving as a center of clinical excellence and a hub for medical education. Established in 2014 under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY), it aims to address healthcare disparities and provide high-quality, affordable healthcare. It is one of twenty AIIMS and is mandated in medical education, research, and patient care, with a focus on innovation and affordable healthcare models.",
    },
    {
      img: VMCC,
      name: "   VMMC ",
      rank: "#17",
      location: "Delhi",
      rating: "4.0",
      fees: "16000-51000",
      accerdition: "NBA  ",
      package: "10.56 LPA",
      exams: "NEET ",
      description:
        "Vardhman Mahavir Medical College (VMMC) is a government-run medical college in New Delhi, affiliated with Safdarjung Hospital. Established in 2001, it offers various undergraduate and postgraduate medical courses. VMMC is known for its strong clinical training at Safdarjung Hospital. It is also affiliated with Guru Gobind Singh Indraprastha University. ",
    },
    {
      img: Saveetha,
      name: "Saveetha University",
      rank: "#18",
      location: "Chennai, Tamil Nadu",
      rating: "4.6",
      fees: "25,000-25,00,000",
      accerdition: "UGC  ",
      package: "4 LPA",
      exams: "CSIR,NEET ",
      description:
        "Saveetha University, commonly known as Saveetha Institute of Medical and Technical Sciences (SIMATS), was established in 2005. It is one of the best-deemed universities in terms of teaching and research. Saveetha University is located in Saveetha Nagar, Thandalam, Kanchipuram, Chennai. As per NIRF Ranking 2024, Saveetha University has been placed at the 13th position under the University category, 2nd in the Dental category, and 11th position under the Law category. The university is recognised by UGC and has been accredited by NAAC with an “A++” grade. The university campus is spread over 180+ acres of land with a 70 lakh sq. ft. built area, and comprises 13 institutions, 5000 staff, and 10,000 students. The university campus is spread over 180+ acres of land with a 70 lakh sq. ft. built area, and comprises 13 institutions, 5000 staff, and 10,000 students.",
    },
    {
      img: Stjohn,
      name: " St. John's Medical College",
      rank: "#19",
      location: "Bengaluru, Karnataka",
      rating: "4.8",
      fees: "70,400 - 28,01,000",
      accerdition: " UGC NET  ",
      package: "4.2 LPA",
      exams: "CSIR,NEET ",
      description:
        "St. John's Medical College is situated in Bengaluru, Karnataka, India. Established in 1963, it is a private college affiliated with Rajiv Gandhi University. St. John's Medical College offers 86 courses across 6 streams, namely Nursing, Medical, Paramedical, Science, and Pharmacy. Popular degrees offered at St. John's Medical College include BSc, GNM, MBBS, MD, and MSc. Besides a robust teaching pedagogy, St. John's Medical College is also a leader in research and innovation. Focus is given to activities beyond academics at St. John's Medical College, which is evident from its infrastructure, extracurricular activities, and national & international collaborations. The placement at St. John's Medical College is varied, with recruitment options both in corporates and the public sector as well as entrepreneurship.",
    },
    {
      img: Soa,
      name: "  SOA Bhubaneswar ",
      rank: "#20",
      location: "Bhubaneswar, Odisha",
      rating: "4.3",
      fees: "35,000 - 25,00,000",
      accerdition: "UGC",
      package: "5,10,000 to 12,00,000",
      exams: "XAT",
      description:
        "Siksha 'O' Anusandhan has been ranked 1001-1200 in QS World Rankings 2023. Siksha 'O' Anusandhan (SOA), formerly Siksha 'O' Anusandhan University, is a private deemed-to-be university located at Bhubaneswar, Odisha, India. The university is composed of nine degree-granting schools and colleges and has a student body of around 10,000. Many of SOA's programs are nationally accredited, including engineering, medicine, pharmacy, business, nursing, biotechnology, science, humanities, environment, nanotechnology, materials science, agriculture and law. SOA is a NAAC accredited Deemed to be University situated in Bhubaneswar, Odisha. NAAC as accredited it with an A++ grade (3rd cycle). SOA was granted greater autonomy (graded autonomy) by the UGC in 2018, one of the few to be granted so in India. Siksha O Anusandhan has ranked 9th, 8th, 16th, 49th, 26th, 27th, 15th, and 57th in the NIRF Ranking 2023 for Dental, Law, Medical, Research Institutions, Overall, Engineering, University, and Management, respectively. PHRD NIRF India rankings 2022 has ranked SOA 16th in the university category, 27th in the engineering category,18th in the medical category, 10th in the dental category, 9th in law category and 45th in the research category. The NIRF rankings also ranked SOA the as the 32nd Best National Institution in the engineering category (2019), the 24th best in the University Category and the 19th best in the Medical Category. SOA is the Only Higher Educational Institution in Odisha to be listed within the first 40 overall and first 25 in the University Category under NIRF Ranking 2018. ",
    },
    {
      img: SRMCRI,
      name: "  SRMCRI Chennai",
      rank: "#21",
      location: "Chennai, Tamil Nadu",
      rating: "4.7",
      fees: "12,500 - 22,00,000",
      accerdition: "MCI",
      package: "6.5 LPA",
      exams: "NEET",
      description:
        "SRMCRI Chennai was established in 1985. The college is located in Chennai, Tamil Nadu and is known for its world-class education and research practices. SRMCRI Chennai is a private medical institute that offers an MBBS degree along with other Higher Specialty Courses, Postgraduate Degree Courses in Basic Medical Sciences, Postgraduate Degree Clinical Courses and Masters in Basic Medical Science Courses. The SRMCRI application process is held through online and offline modes. SRMCRI Chennai admissions to UG courses are based on NEET UG scores.",
    },
    {
      img: IPGME,
      name: "IPGME&R Kolkata",
      rank: "#22",
      location: "Kolkata, West Bengal",
      rating: "5.0",
      fees: "12,500 - 22,00,000",
      accerdition: "other ",
      package: "5.4 LPA",
      exams: "WBCHSE , NEET",
      description:
        "Institute of Post Graduate Medical Education & Research, also known as IPGME&R Kolkata, is a Kolkata-based medical college and hospital. The institute has been granted the status of a Center of Excellence in medical research and education. The medical college offers medical courses at UG and PG levels, including MBBS, MD/MS, and DM/M.Ch. The institute also has a nursing college that offers UG and PG nursing courses. IPGME&R Kolkata admission to UG courses depends on the NEET UG scores obtained by the candidates. PG admissions are based on the competent test conducted by the WBUHS.",
    },
    {
      img: Dattamegh,
      name: "Datta Meghe Institute of Higher Education and Research",
      rank: "#23",
      location: "Kolkata, West Bengal",
      rating: "4.2  ",
      fees: "15,000 - 16,00,000",
      accerdition: "UGC",
      package: "₹4.20 LPA to ₹10.80 LPA",
      exams: " Maharashtra HSC",
      description:
        "Datta Meghe Institute of Medical Sciences is one of the popular medical institutes in Wardha having A+ NAAC Accreditation. It is an excellent place for pursuing academic excellence in Medicine, Dentistry, Nursing, Physiotherapy, Ayurveda, Pharmacy, Allied Sciences, Allied Health Sciences, Epidemiology, Online Distance Learning and Virtual Learning. The institute offers numerous programmes at the Certificate, Diploma, UG, PG and Doctoral levels. Admissions at Datta Meghe are done through merit and entrance basis.",
    },
    {
      img: IGMIMS,
      name: " IGIMS",
      rank: "#27",
      location: "Patna, Bihar",
      rating: "4.2  ",
      fees: "30,000 - 6,00,000",
      accerdition: "NBA",
      package: "7.5 LPA",
      exams: " NEET PG",
      description:
        "IGIMS Patna Admissions 2023: Bihar NEET UG counselling 2023 seat allotment round 2 will be declared on September 11, 2023.  MCC NEET PG 2023 counselling seat allotment round 3 will be released on September 16, 2023. IGIMS Patna was founded on November 19, 1983, as an autonomous institution modelled after the All India Institute of Medical Sciences in New Delhi. The goal was to provide super-speciality medical services within Bihar. IGMS Patna courses include BSc,  MBBS, BDS, MD, M.Ch, and Diploma. IGMS Patna is a government college located in Patna, Bihar.",
    },
    {
      img: Jamiam,
      name: " Jamia Hamdard",
      rank: "#37",
      location: "New Delhi, Delhi",
      rating: "4.3  ",
      fees: "12,00,000 INR",
      accerdition: "AICTE , NAAC",
      package: "6 LPA",
      exams: " NEET PG",
      description:
        " Jamia Hamdard is a Deemed to be University Institute, established in 1989. Jamia Hamdard is one of the best Medical colleges in New Delhi, Delhi. MBBS is one of the most popular programs at Jamia Hamdard offered for a duration of 66 Months. Jamia Hamdard MBBS fees is INR 12,00,000.",
    },
    {
      img: Lhmc,
      name: " LHMC",
      rank: "#29",
      location: "New Delhi, Delhi",
      rating: "4.7 ",
      fees: "4,483 INR",
      accerdition: "AICTE , NAAC",
      package: "4.2 LPA",
      exams: " NEET PG",
      description:
        " LHMC is a Private Institute, established in 1916. LHMC is one of the best Medical colleges in New Delhi, Delhi. MBBS is one of the most popular programs at LHMC offered for a duration of 5 Years. LHMC MBBS fees is INR 4,483.",
    },
    {
      img: KMCM,
      name: " KMC Manglore ",
      rank: "#33",
      location: "Mangalore, Karnataka",
      rating: "4.5",
      fees: "1,00,000 - 26,43,333",
      accerdition: "MCI ",
      package: "18.7 LPA",
      exams: "NEET ,MET",
      description:
        "KMC Mangalore was established in 1955 and is a constituent part of the Manipal Academy of Higher Education. KMC Mangalore courses includes a variety of UG and PG courses in various specialisations such as reconstructions, colon and rectal surgery, general urology, general surgery, obstetrics & gynaecology, anaesthesiology, anatomy, biochemistry etc. KMC Mangalore admissions for its MBBS course are done on the basis of NEET UG scores. The NEET UG results are released by NTA.",
    },

    {
      img: CMC,
      name: "   CMC Vellore ",
      rank: "#49  ",
      location: "Vellore, Tamil Nadu",
      rating: "4.0",
      fees: " 1,200 - 14,82,568",
      accerdition: "UGC ",
      package: "18.0 LPA",
      exams: "NEET ,CBSE12th",
      description:
        "CMC Vellore admission offers intensive, full-time Master of Science (M.Sc.) programme for students who want to continue their studies in science. The M.Sc. specializations offered by CMC Vellore are Otorhinolaryngology, General Surgery, Obstetrics & Gynaecology, Ophthalmology, Orthopedics, ENT, Bioengineering. The total duration of M.Sc. programmes at CMC Vellore is 2-3 years. ",
    },
    {
      img: Grant,
      name: " Grant Medical College ",
      rank: "#33  ",
      location: "Mumbai, Maharashtra",
      rating: "5.0",
      fees: "103,200 - 571,500 INR",
      accerdition: "NAAC A+ , NBA ",
      package: "₹10–15 LPA",
      exams: "NEET ",
      description:
        "Grant Medical College is a Government Institute, established in 1845. Grant Medical College is one of the best Medical colleges in Mumbai, Maharashtra. MBBS is one of the most popular programs at Grant Medical College offered for a duration of 6 Years.",
    },
    {
      img: Gmch,
      name: "  GMCH Chandigarh",
      rank: "#35  ",
      location: "Chandigarh, Chandigarh",
      rating: "3.7",
      fees: " ₹78,380 INR",
      accerdition: "MCI ",
      package: "₹9.5 LPA",
      exams: "NEET ",
      description:
        "GMCH Chandigarh is a Government Institute, established in 1991. GMCH Chandigarh is one of the best Medical colleges in Chandigarh. MBBS is one of the most popular programs at GMCH Chandigarh offered for a duration of 5 Years.",
    },
    {
      img: Mamc,
      name: "  MAMC Delhi",
      rank: "#35  ",
      location: "Delhi ",
      rating: "4.5",
      fees: " ₹10,000 INR",
      accerdition: "MCI ",
      package: "₹2.76LPA",
      exams: "NEET ",
      description:
        "MAMC Delhi is a Public Institute, established in 1959. MAMC Delhi is one of the best Medical colleges in Delhi. MBBS is one of the most popular programs at MAMC Delhi offered for a duration of 66 Months. MAMC Delhi MBBS fees is INR 10,000.",
    },
    {
      img: Psg,
      name: "  PSG Institute of Medical Sciences & Research",
      rank: "#41 ",
      location: "Coimbatore, Tamil Nadu",
      rating: "3.8",
      fees: " ₹4,50,000 INR",
      accerdition: "MCI ",
      package: "₹ 9.30 LPA",
      exams: "NEET  ss",
      description:
        " PSG Institute of Medical Sciences & Research is a Private Institute, established in 1985. PSG Institute of Medical Sciences & Research is one of the best Medical colleges in Coimbatore, Tamil Nadu. MBBS is one of the most popular programs at PSG Institute of Medical Sciences & Research offered for a duration of 5.5 - 66 Years. PSG Institute of Medical Sciences & Research MBBS fees is INR 4,50,000.",
    },
    {
      img: Msrch,
      name: "  MSRMC Bangalore",
      rank: "#46 ",
      location: "Bengaluru, Karnataka",
      rating: "3.5",
      fees: " ₹98,08,000 INR",
      accerdition: "MCI ,NABL ",
      package: "₹6.6 LPA",
      exams: "NEET  ss",
      description:
        "MSRMC Bangalore is a Private Institute, established in 1979. MSRMC Bangalore is one of the best Medical colleges in Bengaluru, Karnataka. MBBS is one of the most popular programs at MSRMC Bangalore offered for a duration of 4 Years.s",
    },
    {
      img: DMC,
      name: "  DMCH Ludhiana",
      rank: "#40  ",
      location: "Ludhiana, Punjab ",
      rating: "4.2",
      fees: " ₹11,00,000 INR",
      accerdition: "MCI ",
      package: "₹Rs 7 LPA",
      exams: "NEET ",
      description:
        "DMCH Ludhiana is a Private Institute, established in 1964. DMCH Ludhiana is one of the best Medical colleges in Ludhiana, Punjab. MBBS is one of the most popular programs at DMCH Ludhiana offered for a duration of 66 Months.",
    },
    {
      img: KM,
      name: "  KM University",
      rank: "#33  ",
      location: "Mathura, Uttar Pradesh",
      rating: "5.0",
      fees: " 20,000 to Rs 1,40,000 INR",
      accerdition: "NAAC ",
      package: "₹960,000 LPA",
      exams: "NEET ",
      description:
        "KM University is a Private University, established in . KM University is one of the best Medical colleges in Mathura, Uttar Pradesh. MBBS is one of the most popular programs at KM University offered for a duration of 5 Years.",
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
      rank: "#1  ",
      location: "Ahmedabad, Uttar Pradesh",
      rating: "4.5",
      fees: "12,00,000 - 25,00,000",
      accerdition: "EQUIS , EFMD ",
      package: "57.12 LPA",
      exams: "CAT , CMAT",
      description:
        "IIM Ahmedabad has successfully placed 100% of its students from the PGP batch of 2025. Students were placed across 30 cohorts in three clusters. The placements were conducted through Laterals Placements Processes. Firms from multiple sectors, such as technology, banking, finance, consulting, analytics, etc, participated in the IIM Ahmedabad Placement. Students were offered roles in middle and senior management positions from Boston Consulting Group, Accenture Strategy, Goldman Sachs, Avendus Capital, Tata Administrative Services, GMR Group, FinIQ Consulting, Navi, etc.",
    },
    {
      img: Iimbanglore,
      name: " IIM Bangalore ",
      rank: "#2  ",
      location: "Bengaluru, Karnataka",
      rating: "4.9",
      fees: " 24.5 Lacs ",
      accerdition: "AICTE , EFMD ",
      package: "35.92 LPA",
      exams: "CAT ",
      description:
        "IIM Bangalore is a Government Institute, established in 1973. IIM Bangalore is one of the best Management colleges in Bengaluru, Karnataka. MBA is one of the most popular programs at IIM Bangalore offered for a duration of 2 Years. ",
    },

    {
      img: Iitdelhi,
      name: " IIT Delhi  ",
      rank: "#4  ",
      location: " Delhi ",
      rating: "4.6",
      fees: " 2 Lacs ",
      accerdition: " NAAC ",
      package: "1.25 Crore  ",
      exams: "CAT ",
      description: "IIT Delhi is a Government Institute, established in 1961. IIT Delhi is one of the best Management colleges in Delhi. MBA is one of the most popular programs at IIT Delhi offered for a duration of 2 Years. IIT Delhi MBA fees is INR 2,00,000.",
    },

    {
      img: Iimcalcutta,
      name: " IIM Calcutta ",
      rank: "#5 ",
      location: "Kolkata, West Bengal",
      rating: "4.5",
      fees: " 27 Lacs ",
      accerdition: "UGC , AMBA ",
      package: "30.9 LPA",
      exams: "CAT ",
      description:
        "IIM Calcutta is a Government Institute, established in 1961. IIM Calcutta is one of the best Management colleges in Kolkata, West Bengal.MBA is one of the most popular programs at IIM Calcutta offered for a duration of 1 - 2 Years.IIM Calcutta MBA fees is INR 31,00,000. ",
    },
    {
      img: Iimlucknow,
      name: "IIM Lucknow",
      rank: "#7",
      location: "Lucknow, Uttar Pradesh",
      rating: "4.3",
      fees: " 9,50,000 Lacs ",
      accerdition: "AICTE , AACSB ",
      package: "32 LPA",
      exams: "CAT ",
      description:
        "IIM Lucknow is a Government Institute, established in 1984. IIM Lucknow is one of the best Management colleges in Lucknow, Uttar Pradesh. MBA is one of the most popular programs at IIM Lucknow offered for a duration of 16 Months. IIM Lucknow MBA fees is INR 9,50,000. ",
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
      exams: "CAT ,CMAT",
      description:
        "XLRI (Xavier School of Management) in Jamshedpur, Jharkhand, is a renowned business school known for its strong focus on ethical and socially responsible leadership. Founded in 1949 by Jesuit Fathers, it's the oldest business school in India. XLRI emphasizes academic excellence, holistic student development, and a commitment to improving society through ethical management practices. It offers a range of management programs, including PGDM (HRM), PGDM (GM), and others. ",
    },
    {
      img: Iitbombay,
      name: " IIT Bombay ",
      rank: "#10  ",
      location: "Mumbai, Maharashtra",
      rating: "4.9",
      fees: "2,00,000 - 42,00,000",
      accerdition: "AICTE, EFMD ",
      package: "21.8 LPA",
      exams: "CAT , GATE",
      description:
        "IIT Bombay is a Public Institute, established in 1958. IIT Bombay is one of the best Management colleges in Mumbai, Maharashtra. MBA is one of the most popular programs at IIT Bombay offered for a duration of 18 Months - 2 Years. IIT Bombay MBA fees is INR 2,00,000 - INR 42,00,000.",
    },
    {
      img: Symboisis,
      name: " Symbiosis Group Of Institutes ",
      rank: "#13  ",
      location: "Pune, Maharashtra",
      rating: "4.3",
      fees: "6,60,000 - 8,53,000",
      accerdition: " NAAC ",
      package: "16.2 LPA",
      exams: "CAT , SNAP",
      description:
        "Symbiosis Group Of Institutes is a University Institute, established in 1978. Symbiosis Group Of Institutes is one of the best Management colleges in Pune, Maharashtra. MBA is one of the most popular programs at Symbiosis Group Of Institutes offered for a duration of 2 Years. Symbiosis Group Of Institutes MBA fees is INR 6,60,000 - INR 8,53,000.",
    },
    {
      img: Iitmadras,
      name: " IIT Madras ",
      rank: "#16",
      location: "Chennai, Tamil Nadu",
      rating: "4.8",
      fees: "3,00,000 ",
      accerdition: " AICTE ",
      package: "12.4 LPA",
      exams: "CAT , IIT JAM  ",
      description:
        " IIT Madras is a Government Institute, established in 2008. IIT Madras is one of the best Management colleges in Chennai, Tamil Nadu. MBA is one of the most popular programs at IIT Madras offered for a duration of 2 Years. IIT Madras MBA fees is INR 3,00,000.",
    },
    {
      img: IITRoorkee,
      name: " IIT Roorkee ",
      rank: "#18",
      location: "Roorkee, Uttarakhand",
      rating: "4.6",
      fees: "2,00,000 ",
      accerdition: " NAAC",
      package: "34.05 LPA",
      exams: "CAT , IIT JAM  ",
      description:
        " IIT Roorkee is a Government Institute, established in 1947. IIT Roorkee is one of the best Management colleges in Roorkee, Uttarakhand. MBA is one of the most popular programs at IIT Roorkee offered for a duration of 2 Years. IIT Roorkee MBA fees is INR 2,00,000..",
    },
    {
      img: IITkharagpur,
      name: " IIT Kharagpur ",
      rank: "#19",
      location: "Kharagpur, West Bengal",
      rating: "4.7",
      fees: "6,20,000 ",
      accerdition: " UGC ",
      package: "24.5 LPA",
      exams: "CAT , IIT JAM  ",
      description:
        "      IIT Kharagpur is a Government Institute, established in 1951. IIT Kharagpur is one of the best Management colleges in Kharagpur, West Bengal.MBA is one of the most popular programs at IIT Kharagpur offered for a duration of 2 Years.IIT Kharagpur MBA fees is INR 6, 20,000.   ",
    },
    {
      img: Iimudaipur,
      name: " IIM Udaipur ",
      rank: "#22",
      location: "Kharagpur, West Bengal",
      rating: "5.0",
      fees: "11,19,307 - 22,65,000 ",
      accerdition: " AACSB ",
      package: "13 LPA",
      exams: "CAT ",
      description:
        "     IIM Udaipur is a Government Institute, established in 2011. IIM Udaipur is one of the best Management colleges in Udaipur, Rajasthan.MBA is one of the most popular programs at IIM Udaipur offered for a duration of 1 - 2 Years.IIM Udaipur MBA fees is INR 11, 19, 307 - INR 22, 65,000. ",
    },

    // { name: "XLRI Jamshedpur", location: "Jamshedpur" },
    // { name: "FMS Delhi", location: "Delhi" },
  ],
};
const Admisson = () => {
  // const [activeTab, setActiveTab] = useState("btech");
  // const [expanded, setExpanded] = useState({});

  // const handleTabClick = (type) => setActiveTab(type);
  // const toggleRead = (idx) => {
  //   setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  // };
  const [searchParams, setSearchParams] = useSearchParams();
  const urlTab = searchParams.get("tab");

  // Initialize activeTab from URL or default to 'btech'
  const [activeTab, setActiveTab] = useState(urlTab || "btech");
  const [expanded, setExpanded] = useState({});

  // Sync with URL when tab changes
  const handleTabClick = (type) => {
    setActiveTab(type);
    setSearchParams({ tab: type });
  };

  // Rest of your component remains the same...
  const toggleRead = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <Fragment>
      {/* //////////////////////////////////////////////////// */}
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
            className={`category-card ${activeTab === "medical" ? "active" : ""
              }`}
            onClick={() => handleTabClick("medical")}
          >
            Medical
          </div>
          <div
            className={`category-card ${activeTab === "management" ? "active" : ""
              }`}
            onClick={() => handleTabClick("management")}
          >
            Management
          </div>
        </div>

        <div className="college-cards">
          {colleges[activeTab].map((college, index) => {
            const fullText = college.description.trim();
            const isLong = fullText.length > DESCRIPTION_LIMIT;
            const isOpen = expanded[index];
            const displayText =
              isLong && !isOpen
                ? fullText.slice(0, DESCRIPTION_LIMIT) + "..."
                : fullText;

            return (
              <div key={index} className="college-card">
                <div className="inner-college-card">
                  <div className="clg-img-wrap">
                    <img src={college.img} alt={college.name} />
                  </div>
                  <div className="admisn-clg-details">
                    <div className="inline clgname-location">
                      <h3>{college.name}</h3>
                    </div>

                    <p className="nirf-ranking">
                      <span className="rank-no">{college.rank}</span> NIRF
                    </p>
                    <div className="inline addres-admisn-wrapper">
                      <p className="clg-sepecific">
                        <i className="admisn-location">
                          <FaLocationDot />
                        </i>
                        {college.location}
                      </p>
                      <button className="ranking-btn">
                        {college.rating}
                        <div className="star-img-container ">
                          <img src={Star} alt="" />
                        </div>
                        {/* <i className="clg-sepecific-icon">
                            <CiStar />
                          </i> */}
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
                        {displayText}
                        {isLong && (
                          <button
                            className="read-more-btn"
                            onClick={() => toggleRead(index)}
                          >
                            {isOpen ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="get-free-counselling-container">
                  <hr />
                  <button>
                    {" "}
                    <a
                      href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Free Counselling
                    </a>{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Admisson;

import React from 'react'

import "./Eduvoyage.css"
import UdaanLogo from "../assets/Udaan_logo2.png"
import Eduvagetimline from '../component/eduvoyagetimeline/Eduvagetimline'
import { FaSchool, FaUsers, FaUser, FaUniversity } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import Arrownew from ".././assets/Arrow.png"
// import Gridcards from '../component/gridcards/Gridcards';

// import EduDiamond from '../component/edudiamond/Edudiamond';
const Eduvoyage = () => {
    return (
        <>

            <div className='eduvoyage-upper-section'>
                <div className='eduvoyage-inner-upper-section'>
                    <div className='eduvoyage-hero'>
                        <h1 className="eduvoyage-hero-title">
                            EduVoyage - An initiative by  :  <img src={UdaanLogo} alt="Udaan360" className="brand-logo" />
                        </h1>
                        <p className="eduvoyage-hero-description">
                            EduVoyage - Crafting Futures Together
                        </p>
                    </div>

                </div>

            </div>
            <div className='Eduvoyage-container'>

                <div className='Eduvoyage-container-main-container '>
                    <div className="eduvoyage-contact-page-header">
                        <h2 className='eduvoyage-heading '>
                            About EduVoyage
                        </h2>
                        <p>EduVoyage -  A journey beyond classrooms</p>
                    </div>

                    {/* /////////////// */}
                    <p className='first-upper-eduvoyage-container'>
                        In Alignment with NEP 2020, EduVoyage, an initiative by Udaan360, is designed to
                        help students integrate skill-based learning, real-life competency development,
                        and practical career understanding into their academic ecosystem.
                        EduVoyage is a student-centric and future-focused ecosystem that brings
                        together skill-based learning, university & industry exposure, real-life career
                        pathways, assessments, and academic support-all in one integrated solution.
                    </p>

                    <Eduvagetimline />

                    {/* //////////////////////////  Benifits container  //////////////////////// */}
                    <div className='benifit-education-container'>
                        <div className='student-main-benifit-container benifit-card'>
                            <div className='benifit-card-header'>
                                <div className='benifit-icon-0 benifit-icon'>
                                    <i ><PiStudentBold /></i>
                                </div>
                                <h3>
                                    Benefits for Student
                                </h3>
                            </div>

                            <ul>
                                <li>They gain early exposure to important life and career skills, such as teamwork, problem-solving, and communication, which are valuable for higher studies and jobs.</li>
                                <li>Students get to experience different careers and industries first-hand, seeing how real-world work happens beyond what they learn in textbooks.
                                </li>
                                <li>Workshops and hands-on activities allow students to learn by doing, giving them practical knowledge and skills they can apply later.
                                </li>
                                <li>
                                    They can explore their interests and strengths in a practical setting, which helps them make more informed decisions about their future education and career paths.
                                </li>
                            </ul>


                        </div>
                        <div className='school-main-benifit-container benifit-card'>
                            <div className='benifit-card-header'>
                                <div className='benifit-icon-1 benifit-icon'>
                                    <i ><FaSchool /></i>
                                </div>
                                <h3>
                                    Benefits for Schools
                                </h3>
                            </div>

                            <ul>
                                <li>Enhances school’s value proposition by offering career-oriented experiential programs.</li>
                                <li>Parents see the school as proactive in career guidance.</li>
                                <li>Students gain clarity on different career paths (Engineering, Medical, Management, Design, Liberal Arts)
                                </li>
                            </ul>


                        </div>
                        <div className='college-main-benifit-container benifit-card'>
                            <div className='benifit-card-header'>
                                <div className='benifit-icon benifit-icon-2'>
                                    <i  > <FaUniversity />    </i>
                                </div>
                                <h3>
                                    Benefits for Colleges
                                </h3>
                            </div>

                            <ul>
                                <li>Direct visibility to school students and parents before admission season.</li>
                                <li>Opportunity to showcase courses, faculty, infrastructure, and placements.</li>
                                <li>Builds goodwill and brand recognition in schools across multiple cities.
                                </li>
                                <li>
                                    Increases chances of attracting quality applications.
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* //////////////////   EduVoyage Offerings container     ///////////////////// */}

                    <h1 className='eduvoyage-offering-heading'>EduVoyage Offerings</h1>
                    <div className='eduvoyage-offering-container'>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <div className='inline align-center'>
                                    <b className='eduvoyage-inner-heading'>Skillo</b>
                                    <b> - Skill-Based Learning Programs</b>
                                </div>

                                NSDC & Skill India certified, real-world skills such as AI, coding, entrepreneurship,
                                communication, design thinking & innovation, delivered by top industry experts.
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <div className='inline align-center'>
                                    <b className='eduvoyage-inner-heading'>EduVoyage</b> – <b>
                                        Career Exploration & Real-Life Exposure
                                    </b>
                                </div>

                                University and industry visits, expert interactions & experiential learning to build clarity,
                                confidence & informed decision-making
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Psychometric Testing & Career Guidance  </b> –
                                Scientific assessments to help students discover strengths, interests & the right future
                                pathways.
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>SAAS Assessment Platform    </b> –
                                Smart digital assessments, performance analytics & topic-wise insights to support
                                personalised learning and measurable progress
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>AI-Based Teacher Training & Mentorship  </b> –
                                Upskilling educators with modern teaching methodologies and NEP-compliant practices.
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Academic & Competitive Exam Preparation </b> –
                                Holistic preparation through School Integrated Program (SIP) for boards, JEE , NEET , CUET
                                & other entrance exams.
                            </p>
                        </div>
                        {/* <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Participation Certificates  </b> –
                                Eduvoyage will provide certificates for attending the workshops.
                            </p>
                        </div> */}

                    </div>
                    {/* Some facts that you knw  */}
                    <h1 className='eduvoyage-offering-heading mt40' >The Real Challenges in Our Education System</h1>
                    <p className='first-upper-eduvoyage-container'>
                        For years, students have been trapped in a cycle of rote learning, mark-based
                        pressure, and theoretical education, leaving them unprepared for the realities of life.
                        They lack clarity, exposure, confidence, and essential future skills, and often make
                        career choices based on pressure rather than passion.
                        Teachers are burdened with manual tasks, assessments are outdated, and schools
                        struggle to align with the new competency-based model mandated by NEP 2020.
                    </p>

                    <main className="edu-container">
                        {/* Heading Section */}
                        <div className="edu-heading">
                            <h1>
                                Some Facts You <span className="highlight-text">Must Know</span>
                            </h1>
                            <p className="edu-subtitle">
                                Key challenges and opportunities in the current educational landscape.
                            </p>
                            <div className="underline"></div>
                        </div>

                        {/* Two Column Layout */}
                        <div className="edu-grid">
                            {/* Left Column - Info Blocks */}
                            <div className="edu-info-blocks">
                                {[
                                    {
                                        icon: <FaUniversity />,
                                        title: "Colleges",
                                        text: "Find it hard to connect directly with quality students, leading to recruitment challenges and a mismatch of talent."
                                    },
                                    {
                                        icon: <FaSchool />,
                                        title: "Schools",
                                        text: "Often struggle to provide real-world exposure and practical skills, leaving students unprepared for the workforce."
                                    },
                                    {
                                        icon: <FaUsers />,
                                        title: "Parents",
                                        text: "Are overwhelmed by too much information and lack structured guidance to support their children's career decisions effectively."
                                    },
                                    {
                                        icon: <FaUser />,
                                        title: "Students",
                                        text: "Are often uncertain about choosing the right course or career path, feeling lost in a sea of options without clear direction."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="info-row">
                                        <div className="icon-wrapper">{item.icon}</div>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Column - Cards */}
                            <div className="edu-cards">
                                {[
                                    {
                                        title: "Humanities Skills Matter",
                                        text: (
                                            <>
                                                A 2021 report shows that{" "}
                                                <span className="highlight">93% of employers</span> value skills like critical thinking and communication, often honed in humanities, over a candidate’s undergraduate major.
                                            </>
                                        )
                                    },
                                    {
                                        title: "Graduate Skill Gap",
                                        text: (
                                            <>
                                                According to a survey,{" "}
                                                <span className="highlight">55% of recent graduates</span> do not feel their college education gave them the skills needed to succeed in their first job.
                                            </>
                                        )
                                    },
                                    {
                                        title: "Bridging Education & Industry",
                                        text: (
                                            <>
                                                Businesses with strong learning cultures, which often involve industry-education partnerships, have{" "}
                                                <span className="highlight">30-50% higher employee retention rates.</span>
                                            </>
                                        )
                                    }
                                ].map((card, index) => (
                                    <div key={index} className="edu-card">
                                        <h3>{card.title}</h3>
                                        <p>{card.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                    {/* <Gridcards /> */}

                </div >
            </div >

        </>
    )
}

export default Eduvoyage
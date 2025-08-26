import React from 'react'
import "./Eduvoyage.css"
import UdaanLogo from "../assets/Udaan_logo2.png"
import Eduvagetimline from '../component/eduvoyagetimeline/Eduvagetimline'
import { FaSchool } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
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
                            A journey beyond classrooms
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
                        <p>EduVoyage - An Experiential Learning Journey by Udaan360</p>
                    </div>

                    {/* /////////////// */}
                    <p className='first-upper-eduvoyage-container'>
                        EduVoyage is a unique initiative by Udaan360 designed to give school students first-hand exposure to top colleges and universities. Through curated campus visits, interactive sessions with faculty, and insights into diverse courses, EduVoyage helps students explore real academic environments, understand career opportunities, and make confident, well-informed decisions about their future.
                    </p>

                    <Eduvagetimline />
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
                </div>
            </div>

        </>
    )
}

export default Eduvoyage
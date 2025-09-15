import React from 'react'

import "./Eduvoyage.css"
import UdaanLogo from "../assets/Udaan_logo2.png"
import Eduvagetimline from '../component/eduvoyagetimeline/Eduvagetimline'
import { FaSchool } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import Arrownew from ".././assets/Arrow.png"
import Youknw from "../assets/youknw.png"
import Pyramid from "../assets/pyramid.png"
import Gridcards from '../component/gridcards/Gridcards';

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
                        <p>EduVoyage - Crafting Futures Together</p>
                    </div>

                    {/* /////////////// */}
                    <p className='first-upper-eduvoyage-container'>
                        EduVoyage is a student centric unique initiative by Udaan360 designed to provide
                        school students with first-hand exposure to top colleges and universities , through
                        carefully curated campus visits, interactive sessions with faculty, insights into diverse
                        courses.
                        <br></br>
                        EduVoyage helps students explore real academic environments, understand career
                        opportunities, and make confident, well-informed decisions about their future.
                        <br />
                        This will help them to take correct successive career decisions towards their
                        aspirations.
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
                                <b className='eduvoyage-inner-heading'>Experiential Approach      </b> –
                                Let’s open doors to real world- learning. Through guided tours
                                and immersive experiences, we take you beyond the pages into actual classrooms,
                                where knowledge comes alive and future path become clearer.
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Industry Academia Connect    </b> –
                                We link wisdom of classrooms with the demands of real
                                world, helping you evolve. We connect you to industry experts, emerging trends and real
                                workplace environments.
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Skill awareness and Global Prospective   </b> –
                                Guidance for emerging and cross- stream career options across the Globe.
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Expert Admission Support   </b> –
                                Seamless guidance to choose best colleges in India & overseas. 100% transparency - verified fees, approvals, accredations.
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Career Clarity Workshops   </b> –
                                Data-backed seminars and workshops for smarter decisions. Focus on outcomes, not just admission
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Holistic Development  </b> –
                                Personality, communication & confidence building sessions in alliance with the individual requirements
                            </p>
                        </div>
                        <div className='Eduvoyage-offer-inner-content  '>
                            <img src={Arrownew} alt="" />
                            <p>
                                <b className='eduvoyage-inner-heading'>Participation Certificates  </b> –
                                Eduvoyage will provide certificates for attending the workshops.
                            </p>
                        </div>

                    </div>
                    {/* Some facts that you knw  */}
                    {/* <div className='eduvoyage-background-container '>
                        <p>Every child is a world of untapped Brilliance, understanding their uniqueness is the key
                            to unlocking their true potential.</p>
                    </div> */}
                    <h2 className='eduvoyage-heading '>
                        Some Facts That You Must Know
                    </h2>
                    <div className='you-knw-fact-container'>
                        <div className='youknw-container'>
                            <img src={Youknw} alt="" />
                        </div>
                        <div className='pyaimd-img-container'>
                            <img src={Pyramid} alt="" />
                            {/* <EduDiamond /> */}
                        </div>
                    </div>
                    <Gridcards />

                </div>
            </div>

        </>
    )
}

export default Eduvoyage
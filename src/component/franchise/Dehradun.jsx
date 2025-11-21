import React from "react";
import {
    MdExplore,
    MdPsychology,
    MdSchool,
    MdCalendarMonth,
    MdFlightTakeoff,
    MdAutoStories,
} from "react-icons/md";
import { FaAward, FaUser, FaLightbulb, FaChartLine, FaThumbsUp, FaRoute } from "react-icons/fa";
import Collage1 from "../../assets/unnamed1.png"
import Collage2 from "../../assets/unnamed2.png"
import Collage3 from "../../assets/unnamed3.png"
import Collage4 from "../../assets/unnamed4.png"
import PradeepSir from "../../assets/Pradeepsir.png"
import "../franchise/Dehradun.css";

const Dehradun = () => {
    const items = [
        {
            icon: <FaAward className="feature-icon" />,
            title: "18+ Years Leadership Experience",
            desc: "Benefit from decades of proven expertise in academic and career guidance."
        },
        {
            icon: <FaUser className="feature-icon" />,
            title: "Personalized Mentorship",
            desc: "Receive one-on-one attention tailored to your unique goals and needs."
        },
        {
            icon: <FaLightbulb className="feature-icon" />,
            title: "Practical Strategies",
            desc: "We focus on actionable strategies, not just textbook theory, for real results."
        },
        {
            icon: <FaChartLine className="feature-icon" />,
            title: "Real Progress Tracking",
            desc: "Monitor your growth with consistent support and clear performance metrics."
        },
        {
            icon: <FaThumbsUp className="feature-icon" />,
            title: "Trusted by Parents & Students",
            desc: "Join a community with a strong reputation for success across India."
        },
        {
            icon: <FaRoute className="feature-icon" />,
            title: "Clear Roadmaps for Every Goal",
            desc: "We provide a step-by-step plan for every academic and career ambition."
        }
    ];
    return (
        <div className="page-root">

            {/* HERO SECTION */}
            <section className="hero-wrapper-container">
                <div className="hero">
                    <div className="hero-text">
                        <h1 className="heading-xl">Udaan360 Dehradun - Empowering Your Journey: From Education to Elevation</h1>
                        <p className="subtext">
                            A comprehensive Platform for all your educational needs- Test Preparations, Admissions, Skill Development, and Career Placement
                        </p>

                        <div className="tag-list">
                            <span className="tag">Expert Counselling</span>
                            <span className="tag">Exam Strategy</span>
                            <span className="tag">Study Abroad Guidance</span>
                            <span className="tag">Psychometric Testing</span>
                            <span className="tag">Proven Roadmaps</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* ABOUT SECTION */}
            <section className="about-section">
                <div className="about-grid">
                    <div
                        className="about-img"
                        style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuACDYSU2dK31sqRwAR9sjhxMw4c0QGnNWItQQGEM8K7cIS-Wjkac1ba8C74jiu4ft1xOvN1PTU46WG8K4GwusQiEx_EOtAZZjCQD6yKFW_KUgxoAMPKUJWkybWiPueOjVkAuQ0lCM9U4aDIcogZc3LIaoXiXIKiD0C3jYslmg-rC8NzpYKHTgeq788Pd5yAlQrQyhQvs7L2wBAU2WNtsJGg1SXDHAk14YKzT1pIj2mr92eDlV_B6mZ_HZS1t36ClO0tOm-QoHww")`,
                        }}
                    ></div>

                    <div className="about-text">
                        <h2 className="heading-lg">About Udaan360 - Dehradun Centre</h2>

                        <p className="body-text">
                            Udaan360 Dehradun brings the organization's proven guidance ecosystem to the
                            education capital of Uttarakhand. Designed for Classes 8-12, NEET/JEE aspirants,
                            commerce & humanities learners, and study-abroad seekers, the franchise offers
                            expert counselling, personalized academic roadmaps, and high-impact mentorship -
                            all tailored to students' goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* DIRECTOR SECTION */}
            <section className="director-section">
                <div className="director-card">
                    <div className="director-flex">
                        <div className="director-img-container-span">
                            <div className="director-img" >
                                <img src={PradeepSir} alt="" />
                            </div>
                        </div>


                        <div className="director-text">
                            <h3 className="heading-md">Meet Our Centre Head – Mr. Pradeep</h3>

                            <p className="body-text">
                                Mr. Pradeep, Managing Director of Udaan360 Dehradun, brings 18+ years of
                                experience in education, counselling, and academic strategy. He has guided
                                thousands of students toward clarity in career choices, competitive exams,
                                and higher education pathways — ensuring structured mentorship and strong
                                outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="benefits-section">
                <h2 className="heading-lg center">How Udaan360 Dehradun Helps Students</h2>

                <div className="benefit-grid">
                    {[
                        {
                            icon: <MdExplore />,
                            title: "Clear Academic & Career Direction",
                            text: "Gain clarity on your path with personalized guidance based on strengths.",
                        },
                        {
                            icon: <MdPsychology />,
                            title: "Psychometric Testing",
                            text: "Make informed decisions with accurate and data-backed assessments.",
                        },
                        {
                            icon: <MdSchool />,
                            title: "NEET/JEE Roadmaps",
                            text: "Follow structured strategies designed for competitive success.",
                        },
                        {
                            icon: <MdCalendarMonth />,
                            title: "Time-Table & Consistency Tracking",
                            text: "Build discipline through personalized study planning.",
                        },
                        {
                            icon: <MdFlightTakeoff />,
                            title: "Study Abroad Clarity",
                            text: "Navigate courses, universities, and scholarships confidently.",
                        },
                        {
                            icon: <MdAutoStories />,
                            title: "Portfolio & Projects",
                            text: "Strengthen your profile with impactful projects and achievements.",
                        },
                    ].map((item, i) => (
                        <div className="benefit-card-dehradun" key={i}>
                            <div className="benefit-icon">{item.icon}</div>
                            <h4 className="heading-sm">{item.title}</h4>
                            <p className="body-text small">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="layout-container-dheradun">
                <div className="inner-wrapper">
                    <div className="content-block">
                        <div className="heading-container">
                            <h2 className="main-heading-thrive-dheradun">Why Students Thrive in Dehradun</h2>
                            <p className="sub-text-thrive-dheradun">
                                Dehradun provides the perfect environment for focused learning — peaceful
                                surroundings, top educational institutions, academic culture, and
                                access to resources that help students stay motivated and disciplined.
                            </p>
                        </div>


                        <div className="grid-layout">
                            <div className="grid-item span-2-2">
                                <img src={Collage1} alt="FRI Dehradun Architecture" className="img-box" />
                            </div>


                            <div className="grid-item">
                                <img src={Collage2} alt="Doon Valley Landscape" className="img-box" />
                            </div>


                            <div className="grid-item">
                                <img src={Collage3} alt="Students studying on lawn" className="img-box" />
                            </div>


                            <div className="grid-item span-2">
                                <img src={Collage4} alt="Calm street of Dehradun" className="img-box" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-container">
                <div className="choose-wrapper">
                    <h2 className="choose-heading">Why Choose Udaan360 Dehradun</h2>

                    <div className="choose-grid">
                        {items.map((item, index) => (
                            <div className="choose-card" key={index}>
                                {item.icon}
                                <div>
                                    <h4 className="choose-title">{item.title}</h4>
                                    <p className="choose-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dehradun;

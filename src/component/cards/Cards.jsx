import React from "react";
import "./Cards.css";

import { FaBrain, FaLightbulb, FaUserGraduate } from "react-icons/fa6";
import { FaBullseye, FaRocket } from "react-icons/fa";

/* ================= DATA ================= */

const BENEFITS_DATA = [
    {
        title: "Explore and be aware",
        description:
            "Explore hundreds of career options and academic pathways.",
        icon: <FaLightbulb />,
        cardClass: "card-red",
        diamondClass: "red-diamond",
    },
    {
        title: "Discover your abilities and skills",
        description:
            "Use scientific diagnostic tools to recognise your abilities and interests.",
        icon: <FaBrain />,
        cardClass: "card-purple",
        diamondClass: "purple-diamond",
    },
    {
        title: "Set realistic career goals",
        description:
            "Select career paths aligned with your interests, skills and aptitude.",
        icon: <FaBullseye />,
        cardClass: "card-yellow",
        diamondClass: "yellow-diamond",
    },
    {
        title: "Get Guidance from experienced counsellors",
        description:
            "Gain clarity and select your career or academic options with expert guidance.",
        icon: <FaUserGraduate />,
        cardClass: "card-blue",
        diamondClass: "blue-diamond",
    },
    {
        title: "Boost confidence",
        description:
            "Eliminate doubt and be confident about your career and academic pathways.",
        icon: <FaRocket />,
        cardClass: "card-orange",
        diamondClass: "orange-diamond",
    },
];

/* ================= COMPONENT ================= */

const Cards = () => {
    return (
        <>
            {/* ================= HEADING ================= */}
            <h1 className="text-center font-semibold text-white text-[24px] sm:text-[34px] mb-[40px] lg:text-[50px]">
                What's in it for you!
            </h1>

            {/* ================= BENEFITS GRID ================= */}
            <div className="benefits-grid">
                {BENEFITS_DATA.map((item, index) => (
                    <div
                        key={index}
                        className={`benefit-card ${item.cardClass}`}
                    >
                        <div className="card-content">
                            <div className="card-icon">
                                <i> {item.icon}</i>

                            </div>

                            <h3 className="card-title-benifit">
                                {item.title}
                            </h3>

                            <p className="card-description">
                                {item.description}
                            </p>
                        </div>

                        <div
                            className={`card-diamond ${item.diamondClass}`}
                        ></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;

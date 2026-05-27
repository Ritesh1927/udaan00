import React from "react";
import "./NepEduvoyage.css";

const NepEduvoyage = () => {
    const data = [
        {
            leftTitle: "Skill-Based Education from Class 6",
            leftPoints: [
                "Vocational & skill exposure from Class 6",
                "Coding, AI, financial literacy, entrepreneurship",
                "Practical exposure & internships (6–12)",
            ],
            rightTitle: "AI-integrated skill programs",
            rightPoints: [
                "Coding, digital & future skills curriculum",
                "Industry exposure & structured internships",
            ],
        },
        {
            leftTitle: "Assessment Reforms",
            leftPoints: [
                "Shift from marks to competency-based assessment",
                "Measure critical thinking & application",
                "Regular formative assessments",
            ],
            rightTitle: "Competency-based digital assessment platform XPSOLV",
            rightPoints: [
                "Continuous progress monitoring",
                "Reduced exam pressure frameworks",
            ],
        },
        {
            leftTitle: "Career Guidance & Counselling",
            leftPoints: [
                "Career awareness from middle school",
                "Psychometric testing",
                "Exposure to multiple career pathways",
            ],
            rightTitle: "Psychometric assessments",
            rightPoints: [
                "Career mapping & counselling (Grades 6–12)",
                "University & industry exposure programs",
            ],
        },
        {
            leftTitle: "Teacher Training & Capacity Building",
            leftPoints: [
                "Continuous professional development",
                "Training in pedagogy, assessment & digitaltools",
            ],
            rightTitle: "Assessment & AI based upskilling",
            rightPoints: [
                "Classroom-ready implementation support",
            ],
        },
        {
            leftTitle: "Multidisciplinary Learning",
            leftPoints: [
                "No rigid Science/Commerce/Arts silos",
                "Equal importance to arts & sports",
                "Flexible subject choices",
            ],
            rightTitle: "Multidisciplinary learning pathways",
            rightPoints: [
                "Interest-based subject & skill mapping",
                "Integrated academic + skill journeys",
            ],
        },
        {
            leftTitle: "Digital & Technology Integration",
            leftPoints: [
                "Technology-enabled learning & assessment",
                "Student tracking & AI exposure",
            ],
            rightTitle: "Digital NEP ecosystem for schools",
            rightPoints: [
                "AI-enabled assessments & analytics",
                "Centralized student performance tracking",
            ],
        },
    ];

    return (
        <section className="nep-section">
            <div className="nep-container">
                <div className="text-center mb20">
                    <h2 className=" text-center eduvoyage-heading ">
                        NEP Mandates vs EduVoyage Support
                    </h2>
                </div>


                {data.map((item, index) => (
                    <div className="nep-compare-card" key={index}>

                        {/* NEP Mandates */}
                        <div className="nep-block nep-left">
                            <div className="nep-tag">NEP Mandates</div>
                            <h3>{item.leftTitle}</h3>
                            <ul>
                                {item.leftPoints.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </div>

                        {/* EduVoyage Support */}
                        <div className="nep-block nep-right">
                            <div className="nep-tag support">EduVoyage Support</div>
                            <h3>{item.rightTitle}</h3>
                            <ul>
                                {item.rightPoints.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}

                <div className="nep-footer">
                    Only 26% of Indian graduates are employable in their chosen field
                    (India Skills Report)
                </div>
            </div>
        </section>
    );
};

export default NepEduvoyage;

import React, { useEffect, useRef, useState } from "react";
import "../../dasboard-pages/Eduvoyage.css"
const Eduvagetimline = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute("data-index");
                        setVisibleItems((prev) => [...new Set([...prev, index])]); // ek hi baar
                        observer.unobserve(entry.target); // ek bar trigger hone ke baad fir observe mat karo
                    }
                });
            },
            { threshold: 0.3 }
        );

        itemsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const timelineData = [
        {
            title: "The Problem We Solve",
            side: "left",
            points: [
                "Students of Class 12 often lack clarity on course and career choices.",
                "Parents are confused due to overloaded information and lack of structured guidance.",
                "Schools struggle to provide real exposure beyond academics.",
                "Colleges face challenges in reaching quality students directly.",
            ],
        },
        {
            title: "Our Solution – Education Tourism",
            side: "right",
            points: [
                "1-day & 2-day campus exposure programs.",
                "Workshops & counseling sessions for clarity on courses and careers.",
                "Stream-specific tours – Science, Commerce, Humanities.",
                "College interaction – Faculty, students, alumni sessions.",
                "Pathway to admissions – Connecting students directly with colleges.",
            ],
        },
        {
            title: "Win–Win–Win Triangle",
            side: "left",
            points: [
                "Students/Parents → Career clarity, informed decision-making.",
                "Schools → Added value to their offering, strengthens parent trust.",
                "Colleges → Authentic access to quality students, brand visibility, admissions pipeline.",
                "Adds to the school’s extracurricular portfolio.",
            ],
        },
    ];

    return (
        <div className="timeline-container">
            {timelineData.map((item, index) => (
                <div
                    key={index}
                    ref={(el) => (itemsRef.current[index] = el)}
                    data-index={index}
                    className={`timeline-item ${item.side} ${visibleItems.includes(index.toString()) ? "show" : ""
                        }`}
                >
                    <div className="content">
                        <h2>{item.title}</h2>
                        <ul>
                            {item.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Eduvagetimline
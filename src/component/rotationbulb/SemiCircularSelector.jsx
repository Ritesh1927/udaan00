import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SemiCircularSelector.css";

const ITEMS = [
    {
        title: "1. Career & Academic Counseling",
        desc:
            "Personalized, one-on-one guidance designed around the individual not the system , Interest, aptitude & personality-based counseling , Career mapping aligned with long-term goals , Course and college selection support , Honest, unbiased, pressure-free guidance",
    },
    {
        title: "2. Experiential Learning & Career Exposure",
        desc:
            "We believe learners should experience before they decide , Industry exposure programs , Career discovery workshops , Mentorship with professionals , Hands-on projects and real-world insights ",
    },
    { title: "3. New-Age Learning Colleges & Institutions", desc: "We guide learners toward progressive institutions focused on relevance and outcomes , Industry-aligned degree programs , Interdisciplinary and flexible learning models , Global exposure and modern pedagogy , Strong focus on employability and innovation" },
    { title: "4. Study Abroad & Global Settlement Pathways", desc: "Structured guidance for students planning long-term international careers , Study and settlement pathways abroad , Country, course & institution alignment , Long-term perspective beyond admissions" },
    {
        title: "5. Skilled Migration Pathways – Healthcare Domain", desc: "Focused guidance for healthcare professionals aiming to build global careers , Skilled migration pathways for healthcare roles , Eligibility assessment and pathway planning , Alignment with country-specific healthcare requirements , Career-led migration planning with long-term clarity , Designed for sustainability, compliance, and career growth."
    },
    { title: "6. Online Master’s & DBA Programs", desc: "Flexible, globally relevant programs for working professionals , Online Master’s programs from reputed institutions , Executive and Doctorate (DBA) pathways , Career-oriented, leadership-focused learning , Designed for growth without career breaks" },
    { title: "7. School-Integrated Programs", desc: "Empowering schools to deliver future-ready education within the school ecosystem , Career awareness and early exposure , Integrated competitive exam preparation , Skill and aptitude development modules , Alignment with NEP and modern education practices " },
    { title: "8. Skill-Based & New-Age Learning Courses", desc: "Because future careers demand skills, not just degrees , Industry-relevant skill programs , Career-oriented certifications , Emerging domains and future skills , Learning designed for real-world application" },
];

/* 🔹 ONLY NEW FUNCTION (as requested) */
const truncateText = (text, limit = 70) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
};

export default function SemiCircularSelector() {
    const total = ITEMS.length;
    const angleStep = 360 / total;
    const radius = 240;

    const [rotation, setRotation] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const rotateWheel = (direction) => {
        setRotation((prev) => prev + direction * angleStep);
        setActiveIndex((prev) => (prev - direction + total) % total);
    };

    return (
        <div className="bg-[#0b0214]">
            <h1 className="text-center font-semibold text-white text-[28px] pt-[40px] sm:text-[34px] lg:text-[50px]">
                Career Cycle of Student
            </h1>

            <section className="flex items-center min-h-screen overflow-hidden text-white ">

                <div className="grid items-center w-full grid-cols-1 gap-0 md:gap-24 max-w-7xl md:grid-cols-2">

                    {/* LEFT SEMI WHEEL */}
                    <div className=" relative h-[650px] overflow-hidden">
                        <div
                            className="absolute -left-[260px] top-1/2 w-[400px] h-[520px]"
                            style={{
                                transform: `translateY(-50%) rotate(${rotation}deg)`,
                                transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                            }}
                        >
                            {ITEMS.map((item, i) => {
                                const angle = i * angleStep;
                                const isActive = i === activeIndex;

                                return (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setActiveIndex(i);
                                            setRotation(-i * angleStep);
                                        }}
                                        style={{
                                            top: "50%",
                                            left: "50%",
                                            transform: `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translate(${radius}px)
                    `,
                                        }}
                                        className={`absolute wheel-item ${isActive ? "active" : ""}`}
                                    >
                                        <span className="eduvoyage-btn-outer">
                                            <span
                                                className="eduvoyage-btn-inner"
                                                style={{
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    maxWidth: "260px",
                                                    display: "inline-block"
                                                }}
                                            >
                                                {item.title.length > 80
                                                    ? item.title.slice(0, 80) + "..."
                                                    : item.title}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT CONTENT (FULL TITLE – UNCHANGED) */}
                    <div className="relative px-7">
                        {/* CONTROLS */}
                        <div className="flex flex-col gap-3 my-10 mt-10 w-fit">
                            <button
                                onClick={() => rotateWheel(1)}
                                className="px-6 py-2 text-purple-200 border rounded-full border-purple-500/40 hover:bg-purple-600/20"
                            >
                                ↑ Previous
                            </button>

                            <button
                                onClick={() => rotateWheel(-1)}
                                className="px-6 py-2 text-purple-200 border rounded-full border-purple-500/40 hover:bg-purple-600/20"
                            >
                                ↓ Next
                            </button>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="p-10 border shadow-xl SemiCircularSelector rounded-2xl backdrop-blur-xl bg-white/5 border-white/10 mb-[40px]"
                            >
                                <h2 className="mb-3 text-[26px] font-semibold">
                                    {ITEMS[activeIndex].title}
                                </h2>
                                <p className="text-purple-200 text-[20px]">
                                    {ITEMS[activeIndex].desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>


                    </div>

                </div>
            </section>
        </div>
    );
}

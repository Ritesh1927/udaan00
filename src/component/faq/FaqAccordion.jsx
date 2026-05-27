import React, { useState } from "react";
import "./Faq.css";

const faqData = [
    {
        question: "What is Udaan360?",
        answer:
            "Udaan360 is a career guidance platform helping students choose the right stream, course, and college based on aptitude, interests, and career goals.",
    },
    {
        question: "Who should take career counseling?",
        answer:
            "Students from Class 8–12, college aspirants, and parents seeking clarity before major academic decisions",
    },
    {
        question: "How is Udaan360 different from others?",
        answer:
            "We offer personalized one-to-one counseling, not generic advice—focused on the student, not just marks or trends.",
    },
    {
        question: "Do you help with stream selection after Class 10?",
        answer:
            "Yes. We guide students in choosing Science, Commerce, or Humanities aligned with their strengths and future plans",
    },
    {
        question: "Which country offer PR after study getting job?",
        answer:
            "Absolutely. We help shortlist best-fit courses and colleges in India and abroad, including entrance exam guidance.",
    },
    {
        question: "Is counseling only based on marks?",
        answer:
            "No. We consider aptitude, interests, personality, and aspirations along with academic performance.",
    },
    {
        question: "When is the right time for career counseling?",
        answer:
            "Before choosing streams (Class 9–10), during Class 11–12, or before college admissions.",
    },
        {
        question: "Are parents involved in the process?",
        answer:
            "Yes. Parent involvement is encouraged for better understanding and confident decision-making.",
    },
        {
        question: "Is Udaan360 counseling free?",
        answer:
            "We conduct free orientation sessions and workshops. Detailed one-to-one counseling is available at affordable fees.",
    },
        {
        question: "Online or offline counseling?",
        answer:
            "Both. We offer online sessions pan-India and offline sessions where available.",
    },
        {
        question: "What if a student is confused about career options?",
        answer:
            "That’s common. Our process helps students discover interests, explore options, and gain clarity.",
    },
        {
        question: "How can we book a session?",
        answer:
            "Contact us via website, phone, or WhatsApp to schedule a session.",
    },
];

const FaqAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="space-y-6">
            {faqData.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                    <div
                        key={index}
                        className="relative p-[1px] rounded-2xl
                       bg-gradient-to-r from-purple-500/60 via-pink-500/40 to-indigo-500/60"
                    >
                        <div className="rounded-2xl px-6 py-5    bg-[#0F0919]/90 backdrop-blur-xl">
                            <button
                                onClick={() =>
                                    setActiveIndex(isActive ? null : index)
                                }
                                className="flex items-center justify-between w-full text-lg font-medium text-left text-white"
                            >
                                <span className="pr-4">
                                    {index + 1}. {item.question}
                                </span>

                                <span
                                    className={`text-3xl font-bold transition-transform duration-300
                  ${isActive ? "rotate-180 text-purple-400" : "text-white"}`}
                                >
                                    {isActive ? "−" : "+"}
                                </span>
                            </button>

                            {/* ANSWER */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out
                ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                            >
                                <div className="px-6 overflow-hidden leading-relaxed text-gray-300">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default FaqAccordion;

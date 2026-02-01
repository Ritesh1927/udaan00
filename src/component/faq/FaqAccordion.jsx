import React, { useState } from "react";
import "./Faq.css";

const faqData = [
    {
        question: "How is get admission in abroad university?",
        answer:
            "Getting admission abroad involves choosing the right course and university, meeting academic and language requirements (like IELTS/TOEFL), preparing documents such as your SOP, LORs, and resume, and applying to the university. Once accepted, the next step is securing your student visa.We support you through the entire process—from shortlisting universities to visa approval.",
    },
    {
        question: "Do you offer complete solution for students?",
        answer:
            "Absolutely! We provide end-to-end support—career counseling, university and course selection, application submission, visa assistance, and even post-arrival services like accommodation guidance.You focus on your dreams, and we’ll take care of the process.",
    },
    {
        question: "Which country is safe and better for higher study?",
        answer:
            "Countries like Japan, Australia, Germany, the UK, and the USA are safe, student-friendly, and offer globally recognized education.We help you pick the country that best fits your goals, budget, and lifestyle.",
    },
    {
        question: "Which country offer PR after study getting job?",
        answer:
            "Countries like Japan, Australia, Germany, the UK, and the USA are safe, student-friendly, and offer globally recognized education.We help you pick the country that best fits your goals, budget, and lifestyle.",
    },
    {
        question: "Can I get scholarship with my low CGPA?",
        answer:
            "Yes! Many scholarships consider more than just grades—such as your extracurriculars, leadership, community involvement, or financial need.We’ll help you explore scholarships that match your full profile—not just your marks.",
    },
    {
        question: "Do you allow accommodation for students in abroad?",
        answer:
            "Yes, we do. From university hostels to private apartments and homestays, we help you find safe, comfortable, and budget-friendly accommodation abroad.We make sure you feel at home even when you're miles away",
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

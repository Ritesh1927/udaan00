import React from "react";
import FaqAccordion from "./FaqAccordion";
import { FaWhatsapp } from "react-icons/fa";
const Faq = () => {
    return (
        <section
            className="w-full bg-gradient-to-br from-[#2b1639] via-[#392546] to-[#1a0f26]
                        px-6 py-20 md:px-20"
        >
            <div className="grid grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
                {/* LEFT CONTENT */}
                <div>
                    <p className="mb-4 text-xl font-semibold tracking-wide text-purple-400">
                        FAQ
                    </p>

                    <h1 className="relative mb-8 text-4xl font-bold leading-tight text-white md:text-5xl">
                        Frequently asked questions
                        <span className="block w-20 h-1 mt-4 bg-gradient-to-r from-purple-400 to-pink-400"></span>
                    </h1>

                    <p className="mb-10 text-lg leading-relaxed text-gray-200">
                        Still have questions to ask?
                        <br />
                        Feel free to reach out to our experts anytime.
                    </p>
                    <a
                        href="https://wa.me/917355308287?text=hello%20,i%20want%20to%20know%20more"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
    group relative inline-flex items-center justify-center
    h-12 w-[220px] rounded-full p-[2px]
    bg-gradient-to-r from-green-400 via-emerald-500 to-green-600
    transition-all duration-500
    hover:scale-[1.06]
    hover:shadow-[0_0_35px_rgba(16,185,129,0.55)]
    animate-[pulse_4s_ease-in-out_infinite]
  "
                    >
                        {/* INNER BUTTON */}
                        <span
                            className="relative flex items-center justify-center
               w-full h-full rounded-full
               bg-[#0F1F1A]
               overflow-hidden"
                        >
                            {/* SHINE EFFECT */}
                            <span
                                className="absolute inset-0
                 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]                 
                 transition-transform duration-700"

                            />

                            {/* TEXT */}
                            <span className="absolute left-0 w-full px-4 font-semibold tracking-wide text-white transition-all duration-400 group-hover:opacity-0 group-hover:translate-x-6 group-hover:blur-sm">
                                Ask your Question
                            </span>

                            {/* ICON */}
                            <span
                                className="  absolute right-1 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600
        transition-all duration-500 ease-out group-hover:w-[calc(100%-8px)] group-hover:right-1   ">
                                <FaWhatsapp className="text-xl text-white animate-bounce group-hover:animate-none" />
                            </span>
                        </span>
                    </a>
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    <FaqAccordion />
                </div>
            </div>
        </section>
    );
};

export default Faq;

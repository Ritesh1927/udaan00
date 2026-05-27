import React from "react";
import { FiArrowRight } from "react-icons/fi";

import { FaRocket, FaFlask, FaChartLine } from "react-icons/fa6";
import { MdExplore, MdCastForEducation, MdPolicy } from "react-icons/md";

const Screenthird = () => {
    const offerings = [
        {
            title: "Skillo",
            desc: "Advanced skill development module focusing on 21st-century skills like coding, robotics, and critical thinking.",
            linkText: "Explore Skillo",
            icon: <FaRocket className="text-3xl text-primary" />,
            borderHover: "hover:border-primary/30",
            glow: "bg-primary/10 group-hover:bg-primary/20",
            linkColor: "text-primary",
        },
        {
            title: "Career Exploration",
            desc: "AI-driven career mapping tools that help students discover paths aligned with their aptitudes and interests.",
            linkText: "View Roadmap",
            icon: <MdExplore className="text-3xl text-accent-pink" />,
            borderHover: "hover:border-accent-pink/30",
            glow: "bg-accent-pink/10 group-hover:bg-accent-pink/20",
            linkColor: "text-accent-pink",
        },
        {
            title: "Teacher Training",
            desc: "Continuous professional development (CPD) modules to upskill educators in digital pedagogy.",
            linkText: "Learn More",
            icon: <MdCastForEducation className="text-3xl text-blue-400" />,
            borderHover: "hover:border-blue-500/30",
            glow: "bg-blue-500/10 group-hover:bg-blue-500/20",
            linkColor: "text-blue-400",
        },
        {
            title: "Virtual Labs",
            desc: "Immersive, simulated laboratory environments for STEM subjects, accessible from anywhere.",
            linkText: "Try a Lab",
            icon: <FaFlask className="text-3xl text-yellow-500" />,
            borderHover: "hover:border-yellow-500/30",
            glow: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
            linkColor: "text-yellow-500",
        },
        {
            title: "Holistic Reports",
            desc: "Data-rich dashboards that visualize student progress beyond just grades.",
            linkText: "View Sample",
            icon: <FaChartLine className="text-3xl text-green-500" />,
            borderHover: "hover:border-green-500/30",
            glow: "bg-green-500/10 group-hover:bg-green-500/20",
            linkColor: "text-green-500",
        },
        {
            title: "NEP Alignment",
            desc: "Automated compliance checks ensuring your institution stays aligned with changing policies.",
            linkText: "Learn More",
            icon: <MdPolicy className="text-3xl text-orange-500" />,
            borderHover: "hover:border-orange-500/30",
            glow: "bg-orange-500/10 group-hover:bg-orange-500/20",
            linkColor: "text-orange-500",
        },
    ];

    return (
        <section className="py-24 px-6 bg-[#090516]" id="offerings">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <span className="text-sm font-semibold tracking-wider uppercase text-accent-pink">
                        Our Ecosystem
                    </span>
                    <h2 className="mt-2 mb-6 text-4xl font-bold text-white lg:text-5xl">
                        Premium Offerings
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        A complete suite of tools designed to modernize your institution's
                        educational delivery.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {offerings.map((item, idx) => (
                        <div
                            key={idx}
                            className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all overflow-hidden ${item.borderHover}`}
                        >
                            {/* Glow */}
                            <div
                                className={`absolute top-0 right-0 p-32 blur-[80px] rounded-full transition-all ${item.glow}`}
                            ></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="flex items-center justify-center mb-6 transition-transform border size-14 rounded-2xl bg-gradient-to-br from-gray-800 to-black border-white/10 group-hover:scale-110">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                                    {item.desc}
                                </p>

                                {/* Link */}
                                <a
                                    href="#"
                                    className={`inline-flex items-center font-bold text-sm hover:text-white transition-colors ${item.linkColor}`}
                                >
                                    {item.linkText}
                                    <FiArrowRight className="ml-1 text-sm" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Screenthird;

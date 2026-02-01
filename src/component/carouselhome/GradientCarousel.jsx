import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannerOne from "../../assets/BannerONE.png"
import BannerTow from "../../assets/BannerTwo.png"
import Bannerthree from "../../assets/Bannerthree.png"
import Bannerfour from "../../assets/banner003.png"
import Bannerfive from "../../assets/udanbanner06.png"
import Bannersix from "../../assets/Sir2.png"
import "./GradientCarousel.css";

const slides = [
    {
        title: "More Than Counselling. A Decision-Defining Experience.",
        image: BannerOne,
        text:
            "In a world full of rankings, advertisements, and shortcuts, Udaan 360 stands for honest, unbiased career guidance. We go beyond surface-level advice to help students and professionals make confident, well-informed decisions. Our approach combines clarity, personalized insights, and real-world perspective so every choice is aligned not just with opportunities, but with long-term growth, purpose, and success.",
    },
    {
        title: "We don’t push colleges or courses we help students discover themselves first.",
        image: BannerTow,
        text:
            "Through deep counselling, psychometric insights, real exposure, and expert mentorship, we create a once-in-a-lifetime counselling journey for students and parents together. Because Careers Are Life Decisions, Not Just Admissions",
    },
    {
        title: "Embark on a Global Academic Journey with Udaan360",
        image: Bannerthree,
        text: "At Udaan360, we are dedicated to transforming your aspirations of studying abroad into reality. Tailor counseling to align your academic goals with the right international programs.",
    },
    {
        title: "25,000+ Students counselled Ankur Tyagi",
        image: Bannersix,
        text: "20 years of extensive experience in guiding over 25,000 students towards fulfilling their academic and professional goals.",
    }, {
        title: "90% Admissons in Top Colleges:",
        image: Bannerfour,
        text: "A remarkable 90% of our counseled students have secured placements in esteemed colleges, reflecting our commitment to excellence.",
    },
    {
        title: "Your Gateway to Global Careers in Healthcare & IT",
        image: Bannerfive,
        text: "Udaan360 is a comprehensive platform designed to support skilled professionals in the healthcare and IT sectors seeking international career opportunities.",
    },
];

export default function GradientCarousel() {
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);

    /* ---------- 3D TILT ---------- */
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [8, -8]);
    const rotateY = useTransform(x, [-50, 50], [-8, 8]);

    const prev = () => {
        setExpanded(false);
        setIndex((index - 1 + slides.length) % slides.length);
    };

    const next = () => {
        setExpanded(false);
        setIndex((index + 1) % slides.length);
    };

    return (
        <div className="max-w-6xl px-4 mx-auto my-14">
            {/* OUTER BORDER */}
            <div className="carousel-outer-frame">
                {/* INNER ROTATING BORDER */}
                <div className="carousel-rotating-border">
                    <motion.div
                        className="carousel-card"
                        style={{ rotateX, rotateY }}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            x.set(e.clientX - rect.left - rect.width / 2);
                            y.set(e.clientY - rect.top - rect.height / 2);
                        }}
                        onMouseLeave={() => {
                            x.set(0);
                            y.set(0);
                        }}
                    >
                        <div className="grid items-center gap-6 p-6 md:grid-cols-2 sm:p-8">
                            {/* IMAGE */}
                            <motion.div
                                key={slides[index].image}
                                initial={{ opacity: 0.6, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="rounded-xl overflow-hidden h-[240px] sm:h-[300px]"
                            >
                                <img
                                    src={slides[index].image}
                                    className="object-cover w-full h-full"
                                    alt=""
                                />
                            </motion.div>

                            {/* CONTENT */}
                            <div className="space-y-4 text-white">
                                {/* CONTENT */}

                                {/* HEADING */}
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={slides[index].title}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.45, ease: "easeOut" }}
                                        className="text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl"
                                    >
                                        {slides[index].title}
                                    </motion.h1>
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={expanded ? "full" : "short"}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="text-sm leading-relaxed text-gray-300 sm:text-base"
                                    >
                                        {expanded
                                            ? slides[index].text
                                            : slides[index].text.slice(0, 120) + "..."}
                                    </motion.p>
                                </AnimatePresence>

                                <button
                                    onClick={() => setExpanded(!expanded)}
                                    className="read-more-btn"
                                >
                                    {expanded ? "Read Less" : "Read More"}
                                </button>

                                {/* NAV + PROGRESS */}
                                <div className="flex items-center gap-4 pt-4">
                                    <button onClick={prev} className="nav-arrow">
                                        <ChevronLeft size={18} />
                                    </button>

                                    <button onClick={next} className="nav-arrow">
                                        <ChevronRight size={18} />
                                    </button>

                                    {/* <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden ml-4">
                                        <motion.div
                                            key={index}
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 4 }}
                                            className="h-full bg-gradient-to-r from-violet-500 to-pink-500"
                                        />
                                    </div> */}
                                    <button className="eduvoyage-btn">
                                        <span className="eduvoyage-btn-inner">
                                            <a
                                                href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >  Explore Now
                                            </a>

                                        </span></button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div >
        </div >
    );
}

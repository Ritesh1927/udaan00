import React, { useEffect, useRef, memo } from "react";
import Abtbanner from "../assets/About0002.png";
import Sir from "../assets/Sirimg01.png";
import Mam from "../assets/poojamaam.png";
import bottom from "../assets/homedown.svg";
import {
    FaGraduationCap,
    FaHeart,
    FaHandsHelping,
    FaUsers,
    FaFlag,
    FaEye,
    FaBullseye,
} from "react-icons/fa";
import "./About.css"

const StatItem = memo(({ count, title, desc, big, suffix = "" }) => {
    const ref = useRef(null);

    useEffect(() => {
        let frame;
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                const start = performance.now();
                const duration = 1500;

                const animate = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const value = Math.floor(progress * count).toLocaleString();

                    // ✅ suffix yahin add ho raha hai
                    el.textContent = value + suffix;

                    if (progress < 1) frame = requestAnimationFrame(animate);
                };

                frame = requestAnimationFrame(animate);
                observer.disconnect();
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => cancelAnimationFrame(frame);
    }, [count, suffix]);

    return (
        <div
            className={`
        relative rounded-2xl border border-white/10 
        bg-white/5 backdrop-blur-xl
        p-8 shadow-[0_0_40px_rgba(61 17 76 / 68%)]
        hover:border-white/20 transition
        ${big ? "sm:col-span-2 min-h-[220px]" : "min-h-[180px]"}
      `}
        >
            <div className="pointer-events-none absolute inset-0 bg-#231C2C" />

            <div
                ref={ref}
                className={`text-white font-extrabold ${big ? "text-5xl" : "text-4xl"
                    }`}
            >
                0{suffix}
            </div>

            <div className="mt-4 text-lg font-semibold text-white">
                {title}
            </div>

            {desc && (
                <p className="mt-2 text-sm text-white/70 max-w-[90%]">
                    {desc}
                </p>
            )}
        </div>
    );
});


const About = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="px-4 mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="flex flex-col items-center gap-4 text-3xl font-extrabold text-white sm:text-5xl">
                        <FaGraduationCap className="text-orange-500 animate-bounce" />
                        Empowering dreams through education with purpose, integrity, and excellence
                    </h1>
                </div>

                <img src={bottom} alt="divider" className="mx-auto mb-20" />

                {/* Banner */}
                <img src={Abtbanner} alt="About banner" className="w-full mb-20 rounded-2xl" />

                {/* Values */}
                <div className="p-10 mb-20 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
                        {[FaGraduationCap, FaHeart, FaHandsHelping, FaUsers, FaFlag].map((Icon, i) => (
                            <div key={i} className="p-6 text-center text-white transition rounded-xl bg-white/10 backdrop-blur hover:scale-105">
                                <Icon className="mx-auto mb-3 text-3xl" />
                                <div className="text-xl font-bold">{["शिक्षा", "संस्कार", "सेवा", "मानवता", "राष्ट्रीयता"][i]}</div>
                                <div className="text-xs tracking-wider uppercase opacity-80">{["Education", "Values", "Service", "Humanity", "Nationalism"][i]}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Story */}
                <div className="p-10 mb-20 space-y-6 text-gray-700 bg-white shadow-xl rounded-2xl">
                    <p className="text-lg font-semibold">At Udaan360, we believe in education with purpose, empowering individuals with the right knowledge, skills, and opportunities to soar to new heights. Udaan360 is a premier education solutions provider, offering a 360-degree approach to academic and career success.</p>
                    <p>Rooted in excellence and guided by expertise, we empower students and professionals to achieve their dreams. Guided by the timeless teachings of Lord Krishna, we empower students and professionals to navigate their educational and career aspirations with clarity, confidence, and integrity.</p>
                    <blockquote className="p-6 italic text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600">
                        "Just as Lord Krishna guided Arjuna through the complexities of life, we guide each student through their educational journey with wisdom, compassion, and unwavering support."
                    </blockquote>
                    <p>At Udaan360, we are committed to empowering individuals by providing comprehensive educational and career development services. Our platform offers a seamless journey from academic counseling and admissions guidance to skill enhancement and global career opportunities.</p>
                </div>

                {/* Vision & Mission */}
                <div className="grid gap-10 mb-20 sm:grid-cols-2">
                    <div className="p-10 transition bg-white shadow rounded-2xl hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-4 ">
                            <div className="vm-icon">
                                <FaEye className="text-3xl text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-black">Vision</h2>
                        </div>
                        <p className="text-black">To be a trusted partner in every individual's & institutional educational and professional journey, facilitating success through tailored support and resources.</p>
                    </div>
                    <div className="p-10 transition bg-white shadow rounded-2xl hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="vm-icon2 vm-icon">
                                <FaBullseye className="text-3xl text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-black">Mission</h2>
                        </div>
                        <p className="text-black">To bridge the gap between education and employment by offering integrated solutions that cater to the diverse needs of students and professionals, with specialized focus on career placement assistance .</p>
                    </div>
                </div>

                {/* Stats */}
                {/* Stats Section */}
                <div className="p-10 mb-24 rounded-3xl">
                    <div className="grid gap-6 md:grid-cols-4 auto-rows-fr">

                        {/* BIG CARD */}
                        <StatItem
                            big
                            count={25000}
                            title="Students Counselled"
                            desc="Clients experience over double growth in just two months."
                        />

                        <StatItem
                            count={25}
                            suffix="+"
                            title="Years of Experience"
                            desc="Operational efficiency improved significantly."
                        />

                        <StatItem
                            count={99}
                            suffix="%"
                            title="Visa Success Rate (%)"
                            desc="Strong global academic & tech network."
                        />

                        <StatItem
                            count={5000}
                            suffix="+"
                            title="Global Placements"
                            desc="Trusted by students & institutions worldwide."
                        />

                        {/* EXTRA RELEVANT FIELD (added by me) */}
                        <StatItem
                            big
                            count={120}
                            suffix="+"
                            title="Partner Universities & Institutions"
                            desc="Empowering learners across multiple countries."
                        />

                        <StatItem
                            count={96}
                            suffix="%"
                            title="Student Satisfaction Rate"
                            desc="Better nurturing leads to long-term success."
                        />

                    </div>
                </div>


                {/* Team */}
                <div className="mb-10">
                    <h2 className="flex justify-center gap-4 mb-16 text-3xl font-extrabold text-center text-white sm:text-5xl">
                        <FaUsers className="text-orange-500" /> Our Leadership Team
                    </h2>
                    <div className="grid gap-10 sm:grid-cols-2">
                        {[{ img: Sir, name: "Ankur Tyagi", role: "CEO & Founder", bio: "With over 20 years of experience in the education domain in India, I have worked with top academic institutions like FIITJEE, RAO IIT, co-founded VISTAAR, and served as the CEO of FTV-SOPA. Join me on my journey with Udaan360, where ethical education paves the way for success. Together, let's transform dreams into reality." }, { img: Mam, name: "Pooja Aggarwal", role: "COO & Co-Founder", bio: "With 18 years of experience in education sector, my mission has always been to empower students with the right guidance and opportunities. At Udaan360, I am committed to provide ethical counselling, quality education, and global career pathways." }].map((m, i) => (
                            <div key={i} className="p-10 text-center transition bg-white shadow-xl rounded-2xl hover:-translate-y-2">
                                <img src={m.img} alt={m.name} className="object-cover w-40 h-40 mx-auto mb-6 border-4 border-orange-500 rounded-full" />
                                <h4 className="text-3xl font-bold text-black">{m.name}</h4>
                                <p className="font-semibold tracking-wide text-orange-500 uppercase">{m.role}</p>
                                <p className="mt-4 text-sm text-left text-gray-600">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

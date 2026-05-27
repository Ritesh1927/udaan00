import { motion } from "framer-motion";
import Ashi from "../assets/ashi2.jpg"
import Mehak from "../assets/mehak2.jpg"
import Anjali from "../assets/anjali2.jpg"
import Sachin from "../assets/vinay.jpg"
import Ritik from "../assets/ritik.jpg"
import Kartikey from "../assets/Kartikey2.jpg"
import KartikeyTwo from "../assets/Kartikey2.jpg"
const testimonials = [
    {
        image: Kartikey,
        title: " Best Career Guidance & B. Tech Admission",
        description:
            "Udaan 360 provided exceptional career counselling, helping me choose the best engineering college (ABES) for my B.Tech. Their expert guidance and admission support made the entire process seamless!",
        name: " Kartikey Verma",
        role: "B. Tech (CS) Student",
    },
    {
        image: Mehak,
        title: "MBBS Admission Made Easy",
        description:
            "Getting into a top medical college seemed like a challenge, but with Udaan 360’s genuine counselling and admission support, my daughter secured MBBS seat in Kempagowda, Bangalore. Thank you for making our dream come true!",
        name: "Mehak Kumar",
        role: "MBBS Student",
    },
    {
        image: Anjali,
        title: "Trusted Guidance for My BDS Admission",
        description:
            "Udaan 360 guided me through every step of my BDS admission. Their transparent approach and strong college connections helped us get into Rajiv Gandhi Dental college in Bangalore.",
        name: "Anjali ",
        role: "BDS Student",
    },
    {
        image: Sachin,
        title: "The Best Study Abroad Counselling & Admission Assistance",
        description:
            "I was confused about choosing the best college and destination for my master’s degree, but Udaan 360 provided clear guidance, financial aid options, and admission support. Highly recommended!",
        name: "Sachin Yadav",
        role: "MBA Stundet",
    },
    {
        image: Ritik,
        title: "Smooth & Genuine Admission Process for PGDM",
        description:
            "With so many colleges and options, it was overwhelming to make the right choice. Thanks to Udaan 360, I got admission to a top Business school (IIM Udaipur) with complete clarity and no stress!",
        name: "Ritik Choudhary",
        role: "PGDM Student ",
    },
    {
        image: KartikeyTwo,
        title: "Stress-Free College Admission for My Son",
        description:
            "As a parent, I was worried about my son’s future. Udaan 360 ensured a smooth and ethical coaching and admission process for his BPT (NIMS, Greater Noida) making everything easy for us!",
        name: "Rajiv Ranjan",
        role: "Parent of a BPT Student ",
    },
    {
        image: Ashi,
        title: "Best Counselling for B. Tech Admission",
        description:
            "Udaan 360’s expert counsellors helped me plan my JEE preparation and choose the best engineering course and college (MIT). Their knowledge and support made all the difference!",
        name: "Ashi Gupta",
        role: "B.Tech (AIML) Student",
    },

];

// duplicate for seamless infinite loop
const loopData = [...testimonials, ...testimonials];

const TestimonialSlider = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#12001d] to-[#06000a] overflow-hidden">
            <h2 className="text-3xl font-semibold text-center text-white mb-14 md:text-4xl">
                What Students & Parents Say About Us!
            </h2>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {loopData.map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[320px] p-6 rounded-2xl 
                         bg-white/5 backdrop-blur-xl
                         border border-white/10 shadow-xl"
                        >
                            {/* profile */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-purple-400">{item.role}</p>
                                </div>
                            </div>

                            <h3 className="mb-2 text-sm font-medium text-white">
                                {item.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-300">
                                “{item.description}”
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialSlider;

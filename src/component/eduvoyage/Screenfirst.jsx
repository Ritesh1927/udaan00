import React from "react";
import {
    FiArrowRight,
    FiDownload,
} from "react-icons/fi";

import {
    HiOutlineAcademicCap,
} from "react-icons/hi2";

import { GiGreekTemple, GiOpenBook } from "react-icons/gi";
import "../../dasboard-pages/Eduvoyage.css"
import { FaBrain } from "react-icons/fa6";

const Screenfirst = () => {
    return (
        <section className="relative px-6 pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
            <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-20">
                {/* Left Content */}
                <div className="relative z-10 flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full bg-white/5 border-white/10 w-fit backdrop-blur-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">
                            An initiative by Udaan360
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                        Future-Ready <br />
                        <span className="neon-text-gradient">Education Ecosystem</span>
                    </h1>

                    <p className="max-w-lg text-lg leading-relaxed text-gray-400">
                        Empowering Education for a{" "}
                        <span className="font-medium text-white">Saksham Bharat</span>. Bridge
                        the gap between traditional schooling and modern career requirements
                        with our AI-driven platform.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent-pink hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all text-white font-bold text-base group">
                            <span>Book a School Demo</span>
                            <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                        </button>

                        <button className="flex items-center gap-2 px-8 py-4 text-base font-bold text-white transition-all border rounded-2xl bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md">
                            <FiDownload className="text-lg text-gray-400" />
                            <span>Download Deck</span>
                        </button>
                    </div>

                    {/* Trust Chips */}
                    <div className="pt-8 mt-4 border-t border-white/5">
                        <p className="mb-4 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                            Trusted by visionary institutions
                        </p>

                        <div className="flex flex-wrap gap-6 transition-all duration-500 opacity-50 grayscale hover:grayscale-0">
                            <div className="flex items-center gap-2 text-white">
                                <HiOutlineAcademicCap className="text-lg" />
                                <span className="text-lg font-bold">DPS</span>
                            </div>

                            <div className="flex items-center gap-2 text-white">
                                <GiGreekTemple className="text-lg" />
                                <span className="text-lg font-bold">Ryan Int.</span>
                            </div>

                            <div className="flex items-center gap-2 text-white">
                                <GiOpenBook className="text-lg" />
                                <span className="text-lg font-bold">VIBGYOR</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent-pink/20 blur-[100px] rounded-full"></div>

                    <div className="relative w-full h-full p-2 overflow-hidden border aspect-square lg:aspect-auto glass-panel rounded-3xl border-white/10 group">
                        <div
                            className="relative w-full h-full overflow-hidden bg-gray-900 bg-center bg-cover rounded-2xl"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVfEZYPh6aKYHS5Jhq1_5_OEM2Yj_oHq_sOvyPqaGIdszU9CK4Ihtil9sWNMFCkzCHMHfhzwzxXnvoEL9Lx6bMnxzQze4gDcIURnaX-I5hJznUTP93oPT_GO2M9XFeIPlvDsRQR7yw6q77AwLHkb6gaxs2seosdNfP_g3XUnBR2czA8TgB1E4igIVFAViUrjRNfoZ286-gUfgEGjHCF8WZQYV62sjc1rn3VPbnL-14tNf4XJFkvSA0MeW6VS90R7z3DQmlPmAfO7k')",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80"></div>

                            {/* Floating UI Element */}
                            <div className="absolute p-6 transition-transform duration-500 transform translate-y-4 border-l-4 bottom-10 left-10 right-10 glass-panel rounded-xl group-hover:translate-y-0 border-l-accent-pink">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center rounded-full size-12 bg-accent-violet/20 text-accent-violet">
                                        <FaBrain className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Skill Gap Analysis</h3>
                                        <p className="text-sm text-gray-400">
                                            AI-generated student report ready.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* end floating */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenfirst;

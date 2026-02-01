import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FiAward } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { GiLaurels } from "react-icons/gi";

const Screenfifth = () => {
    return (
        <section
            className="py-20 bg-gradient-to-b from-dark-bg to-[#0d0721]"
            id="stats"
        >
            <div className="px-6 mx-auto max-w-7xl">
                {/* Main 2 Stats */}
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="relative p-10 overflow-hidden text-center glass-panel rounded-3xl group md:text-left">
                        <div className="absolute inset-0 transition-colors bg-primary/5 group-hover:bg-primary/10"></div>

                        <div className="relative z-10">
                            <h3 className="mb-2 font-black tracking-tighter text-white text-7xl">
                                93<span className="text-primary">%</span>
                            </h3>
                            <p className="text-xl font-medium text-gray-300">
                                Students need proper career guidance
                            </p>
                            <p className="mt-4 text-sm text-gray-500">
                                Based on a survey of 10,000+ Indian high school students.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative p-10 overflow-hidden text-center glass-panel rounded-3xl group md:text-left">
                        <div className="absolute inset-0 transition-colors bg-accent-pink/5 group-hover:bg-accent-pink/10"></div>

                        <div className="relative z-10">
                            <h3 className="mb-2 font-black tracking-tighter text-white text-7xl">
                                55<span className="text-accent-pink">%</span>
                            </h3>
                            <p className="text-xl font-medium text-gray-300">
                                Jobs will require completely new skills by 2030
                            </p>
                            <p className="mt-4 text-sm text-gray-500">
                                According to the World Economic Forum&apos;s Future of Jobs
                                Report.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Facts Grid */}
                <div className="grid grid-cols-2 gap-4 mt-12 lg:grid-cols-4">
                    {/* Fact 1 */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <HiOutlineAcademicCap className="mx-auto mb-3 text-3xl text-purple-400" />
                        <h4 className="font-bold text-white">For Schools</h4>
                        <p className="mt-1 text-xs text-gray-500">
                            Better Admissions &amp; Ratings
                        </p>
                    </div>

                    {/* Fact 2 */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <GiLaurels className="mx-auto mb-3 text-3xl text-pink-400" />
                        <h4 className="font-bold text-white">For Colleges</h4>
                        <p className="mt-1 text-xs text-gray-500">
                            Quality Intake of Students
                        </p>
                    </div>

                    {/* Fact 3 */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <FaUsers className="mx-auto mb-3 text-3xl text-blue-400" />
                        <h4 className="font-bold text-white">For Parents</h4>
                        <p className="mt-1 text-xs text-gray-500">Peace of Mind</p>
                    </div>

                    {/* Fact 4 */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                        <FiAward className="mx-auto mb-3 text-3xl text-yellow-400" />
                        <h4 className="font-bold text-white">For Students</h4>
                        <p className="mt-1 text-xs text-gray-500">Future Readiness</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenfifth;

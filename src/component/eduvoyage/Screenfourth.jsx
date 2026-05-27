import React from "react";
import { FiXCircle, FiZap } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2"; // ✅ fixed

const Screenfourth = () => {
    return (
        <section className="relative px-6 py-24 overflow-hidden">
            <div className="absolute left-0 w-1/2 h-full opacity-50 top-1/4 bg-gradient-to-r from-gray-900 to-transparent -z-10"></div>

            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Left: Problems */}
                    <div className="hidden pr-8 border-r border-white/5 lg:block">
                        <h3 className="mb-8 text-2xl font-bold text-gray-500">
                            Current System Challenges
                        </h3>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4 opacity-50">
                                <FiXCircle className="mt-1 text-xl text-red-500" />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-300">
                                        Siloed Subject Learning
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Students fail to see connections between disciplines.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 opacity-50">
                                <FiXCircle className="mt-1 text-xl text-red-500" />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-300">
                                        One-size-fits-all Assessment
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Ignores individual learning styles and paces.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 opacity-50">
                                <FiXCircle className="mt-1 text-xl text-red-500" />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-300">
                                        Lack of Career Guidance
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        Students choose paths based on peer pressure, not aptitude.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Solutions */}
                    <div>
                        <h3 className="mb-8 text-2xl font-bold text-white">
                            How EduVoyage Fixes This
                        </h3>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4 p-5 transition-transform transform border-l-4 glass-panel rounded-xl border-l-primary hover:translate-x-2">
                                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                    <FaProjectDiagram className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">
                                        Integrated Curriculum Matrix
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Our platform maps concepts across subjects to create a cohesive learning web.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 transition-transform transform border-l-4 glass-panel rounded-xl border-l-accent-pink hover:translate-x-2">
                                <div className="p-2 rounded-lg bg-accent-pink/20 text-accent-pink">
                                    <HiOutlineMapPin className="text-xl" /> {/* ✅ fixed */}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">
                                        Adaptive Learning Paths
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-400">
                                        AI adjusts the difficulty and style of content delivery based on real-time performance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 transition-transform transform border-l-4 glass-panel rounded-xl border-l-accent-violet hover:translate-x-2">
                                <div className="p-2 rounded-lg bg-accent-violet/20 text-accent-violet">
                                    <FiZap className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">
                                        Career Discovery Engine
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-400">
                                        Early exposure to diverse careers through virtual shadowing and expert talks.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenfourth;

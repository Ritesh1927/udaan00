import React from "react";
import { FiArrowLeft, FiArrowRight, FiX, FiCheck } from "react-icons/fi";
import "../../dasboard-pages/Eduvoyage.css"
const Screensecond = () => {
    return (
        <section className="relative px-6 py-24" id="nep">
            <div className="mx-auto max-w-7xl">
                {/* Heading Row */}
                <div className="flex flex-col items-end justify-between gap-6 mb-16 md:flex-row">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                            NEP 2020 Mandates <br />
                            <span className="text-gray-500">vs EduVoyage Support</span>
                        </h2>

                        <p className="max-w-xl text-gray-400">
                            We've built our platform from the ground up to not just meet but
                            exceed the National Education Policy 2020 requirements.
                        </p>
                    </div>

                    {/* Arrows (UI buttons only) */}
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center text-white transition-colors border rounded-full size-12 border-white/10 hover:bg-white/5">
                            <FiArrowLeft className="text-lg" />
                        </button>
                        <button className="flex items-center justify-center text-white transition-colors rounded-full size-12 bg-white/10 hover:bg-white/20">
                            <FiArrowRight className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="p-6 glass-panel rounded-2xl neon-border-hover group">
                        <div className="flex flex-col justify-between h-full gap-6">
                            <div className="pb-4 border-b border-white/5">
                                <span className="block mb-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                                    The Mandate
                                </span>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <FiX className="text-sm" />
                                    <span className="line-through decoration-gray-600">
                                        Rote Learning
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span className="block mb-2 text-xs font-semibold tracking-widest uppercase text-accent-violet">
                                    EduVoyage Way
                                </span>

                                <div className="flex items-start gap-3">
                                    <div className="p-1 mt-1 rounded bg-accent-violet/20 text-accent-violet">
                                        <FiCheck className="text-sm font-bold" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Competency-based Learning
                                    </h3>
                                </div>

                                <p className="mt-2 text-sm text-gray-400">
                                    Focus on mastery of concepts with real-world application
                                    assessments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 glass-panel rounded-2xl neon-border-hover group">
                        <div className="flex flex-col justify-between h-full gap-6">
                            <div className="pb-4 border-b border-white/5">
                                <span className="block mb-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                                    The Mandate
                                </span>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <FiX className="text-sm" />
                                    <span className="line-through decoration-gray-600">
                                        Rigid Curriculum
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span className="block mb-2 text-xs font-semibold tracking-widest uppercase text-accent-pink">
                                    EduVoyage Way
                                </span>

                                <div className="flex items-start gap-3">
                                    <div className="p-1 mt-1 rounded bg-accent-pink/20 text-accent-pink">
                                        <FiCheck className="text-sm font-bold" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Flexible &amp; Multidisciplinary
                                    </h3>
                                </div>

                                <p className="mt-2 text-sm text-gray-400">
                                    Students choose subjects across streams with our flexible
                                    scheduling engine.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 glass-panel rounded-2xl neon-border-hover group">
                        <div className="flex flex-col justify-between h-full gap-6">
                            <div className="pb-4 border-b border-white/5">
                                <span className="block mb-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                                    The Mandate
                                </span>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <FiX className="text-sm" />
                                    <span className="line-through decoration-gray-600">
                                        Standard Report Cards
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span className="block mb-2 text-xs font-semibold tracking-widest text-blue-400 uppercase">
                                    EduVoyage Way
                                </span>

                                <div className="flex items-start gap-3">
                                    <div className="p-1 mt-1 text-blue-400 rounded bg-blue-500/20">
                                        <FiCheck className="text-sm font-bold" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Holistic Progress Card (HPC)
                                    </h3>
                                </div>

                                <p className="mt-2 text-sm text-gray-400">
                                    360-degree evaluation covering cognitive, affective, and
                                    psychomotor domains.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End grid */}
            </div>
        </section>
    );
};

export default Screensecond;

import React from "react";
import { FiCheck } from "react-icons/fi";

const Screensixth = () => {
    return (
        <section className="relative px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="glass-panel rounded-[2.5rem] p-8 lg:p-16 border border-white/10 relative overflow-hidden">
                    {/* Background Gradient inside CTA */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/20 to-transparent blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-24">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center">
                            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                                Build a <br />
                                <span className="neon-text-gradient">Saksham Bharat</span>
                            </h2>

                            <p className="mb-8 text-lg leading-relaxed text-gray-300">
                                Join the revolution in Indian education. Partner with EduVoyage
                                to empower the next generation of thinkers, makers, and leaders.
                            </p>

                            <div className="flex flex-col gap-4">
                                {/* Item 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center rounded-full size-10 bg-white/10">
                                        <FiCheck className="text-lg text-green-400" />
                                    </div>
                                    <span className="text-gray-300">NEP 2020 Compliant</span>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center rounded-full size-10 bg-white/10">
                                        <FiCheck className="text-lg text-green-400" />
                                    </div>
                                    <span className="text-gray-300">Seamless LMS Integration</span>
                                </div>

                                {/* Item 3 */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center rounded-full size-10 bg-white/10">
                                        <FiCheck className="text-lg text-green-400" />
                                    </div>
                                    <span className="text-gray-300">24/7 Support for Educators</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="p-8 border bg-black/40 backdrop-blur-xl rounded-2xl border-white/10">
                            <form className="flex flex-col gap-5">
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    Partner With Us
                                </h3>

                                {/* Full Name */}
                                <div className="space-y-1">
                                    <label className="ml-1 text-xs font-semibold text-gray-500 uppercase">
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 text-white placeholder-gray-600 transition-colors border-0 border-b-2 rounded-t-lg bg-white/5 border-white/10 focus:border-accent-pink focus:ring-0"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>

                                {/* Institution */}
                                <div className="space-y-1">
                                    <label className="ml-1 text-xs font-semibold text-gray-500 uppercase">
                                        Institution Name
                                    </label>
                                    <input
                                        className="w-full px-4 py-3 text-white placeholder-gray-600 transition-colors border-0 border-b-2 rounded-t-lg bg-white/5 border-white/10 focus:border-accent-pink focus:ring-0"
                                        placeholder="St. Mary's School"
                                        type="text"
                                    />
                                </div>

                                {/* Email + Phone */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="ml-1 text-xs font-semibold text-gray-500 uppercase">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 text-white placeholder-gray-600 transition-colors border-0 border-b-2 rounded-t-lg bg-white/5 border-white/10 focus:border-accent-pink focus:ring-0"
                                            placeholder="email@school.edu"
                                            type="email"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="ml-1 text-xs font-semibold text-gray-500 uppercase">
                                            Phone
                                        </label>
                                        <input
                                            className="w-full px-4 py-3 text-white placeholder-gray-600 transition-colors border-0 border-b-2 rounded-t-lg bg-white/5 border-white/10 focus:border-accent-pink focus:ring-0"
                                            placeholder="+91 98765..."
                                            type="tel"
                                        />
                                    </div>
                                </div>

                                {/* Button */}
                                <button
                                    className="w-full py-4 mt-4 text-lg font-bold text-white transition-all rounded-xl bg-gradient-to-r from-primary to-accent-pink hover:shadow-lg hover:shadow-accent-pink/30"
                                    type="button"
                                >
                                    Request Callback
                                </button>

                                <p className="mt-2 text-xs text-center text-gray-500">
                                    By submitting, you agree to our Privacy Policy.
                                </p>
                            </form>
                        </div>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screensixth;

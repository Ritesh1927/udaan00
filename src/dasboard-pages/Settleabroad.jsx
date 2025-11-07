import React, { useEffect } from 'react';
import "./Settleabroad.css"
import { Link } from 'react-router-dom';
import {
    MdPublic,
    MdSpellcheck,
    MdAccountBalanceWallet,
    MdWork,
    MdVerifiedUser,
    MdCreditScore,
    MdSchool,
    MdGroups,
    MdRoomService,
    MdTrendingUp,
    MdTranslate,
    MdArticle
} from "react-icons/md";
import Image1 from "../assets/setleabroad1.png"
import Image2 from "../assets/setleabroad2.png"
import Image3 from "../assets/setleabroad3.png"
import Image4 from "../assets/setleabroad4.png"
// Single-file React component named Settleabroad
// Uses only custom CSS included in a <style> block — no Tailwind or other frameworks.
// This component is a near-exact JSX conversion of the provided HTML and styling.

export default function Settleabroad() {
    useEffect(() => {
        // Add Google fonts and Material Icons links to document head (same as original)
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
        fontLink.rel = 'stylesheet';
        const iconLink = document.createElement('link');
        iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        iconLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
        document.head.appendChild(iconLink);

        return () => {
            document.head.removeChild(fontLink);
            document.head.removeChild(iconLink);
        };
    }, []);

    return (
        <div className="settle-root">
            {/* Custom CSS (keeps layout and visual similar to original Tailwind-based HTML) */}

            <div className="bg-pattern">
                <section className="hero">
                    <div className="container">
                        <div className="hero-grid">
                            <div style={{ textAlign: 'left' }}>
                                <h1>Start Your Global Hospitality Career Today</h1>
                                <p className="mt-4">Affordable access to world-class hospitality education. No IELTS required. Start online in India, go abroad after visa confirmation.</p>
                                <div className="hero-actions">
                                    <Link className="btn btn-primary" href="#">Book Free Counselling</Link>
                                    <Link className="btn btn-secondary" href="#">Explore Programs</Link>
                                </div>
                            </div>

                            <div className="hero-image-wrap">
                                <div className="accent-bg" aria-hidden="true"></div>
                                <img alt="Smiling student in a professional kitchen environment" src={Image1} />

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section alt why-student-choose-us" id="why-us">
                    <div className="container">
                        <div className="section-title">
                            <h2 className='settle-abroad-first-heading'>Why Students Choose Us</h2>
                            <p className="mt-4">The trusted path to your international career since 2013.</p>
                        </div>

                        <div className="grid-4">
                            <div className="card-feature">
                                <div className="icon">
                                    <i>
                                        <MdPublic />
                                    </i>
                                </div>
                                <div>
                                    <h3>Top Destinations</h3>
                                    <p>Study in Mauritius, Singapore, Malta, Cyprus &amp; more.</p>
                                </div>
                            </div>

                            <div className="card-feature">
                                <div className="icon">
                                    <i>
                                        <MdSpellcheck />
                                    </i>
                                </div>
                                <div>
                                    <h3>No IELTS / PTE Required</h3>
                                    <p>Begin your journey without language barriers.</p>
                                </div>
                            </div>

                            <div className="card-feature">
                                <div className="icon">
                                    <i>
                                        <MdAccountBalanceWallet />
                                    </i></div>
                                <div>
                                    <h3>Affordable Fees</h3>
                                    <p>Courses start from just ₹2 Lakhs.</p>
                                </div>
                            </div>

                            <div className="card-feature">
                                <div className="icon">
                                    <i>
                                        <MdWork />
                                    </i>
                                </div>
                                <div>
                                    <h3>Internships from Day 1</h3>
                                    <p>Gain practical experience immediately.</p>
                                </div>
                            </div>

                            <div className="card-feature">
                                <div className="icon">
                                    <i><MdVerifiedUser />
                                    </i>
                                </div>
                                <div>
                                    <h3>High Visa Success</h3>
                                    <p>Transparent process with a high success rate.</p>
                                </div>
                            </div>

                            <div className="card-feature">
                                <div className="icon">
                                    <i>
                                        <MdCreditScore />
                                    </i>
                                </div>
                                <div>
                                    <h3>Pay After Visa</h3>
                                    <p>Flexible payment options for your peace of mind.</p>
                                </div>
                            </div>

                            <div className="card-feature">
                                <div className="icon">
                                    <i>
                                        <MdSchool />
                                    </i>
                                </div>
                                <div>
                                    <h3>Govt. Approved Colleges</h3>
                                    <p>Partnerships with trusted international institutions.</p>
                                </div>
                            </div>

                            <div className="card-feature">
                                <div className="icon">
                                    <i>
                                        <MdGroups />
                                    </i>
                                </div>
                                <div>
                                    <h3>Trusted Since 2013</h3>
                                    <p>Over 10,000 students have trusted us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="learning">
                    <div className="container">
                        <div className="hero-grid">
                            <div className='grid-img-container'>
                                <img
                                    alt="Students learning in a modern kitchen setting"
                                    src={Image2}
                                />
                            </div>
                            <div>
                                <h2 className='mb5'>Practical Learning &amp; Internships</h2>
                                <p className="mt5 mb10 practical-learing-sub-heading">
                                    We believe real-world exposure is just as important as classroom learning.
                                </p>
                                <div className="cards-vertical">
                                    <div className="feature-card">
                                        <i>
                                            <MdRoomService />
                                        </i>

                                        <div>
                                            <h4 style={{ margin: 0 }}>Real Hospitality Environments</h4>
                                            <p style={{ margin: 0 }}>Learn directly in real hotels, resorts, and restaurants.</p>
                                        </div>
                                    </div>

                                    <div className="feature-card">
                                        <i>
                                            <MdTrendingUp />
                                        </i>

                                        <div>
                                            <h4 style={{ margin: 0 }}>Boost Your Career</h4>
                                            <p style={{ margin: 0 }}>Gain international experience to stand out to employers.</p>
                                        </div>
                                    </div>

                                    <div className="feature-card">
                                        <i>
                                            <MdTranslate />
                                        </i>

                                        <div>
                                            <h4 style={{ margin: 0 }}>Develop Key Skills</h4>
                                            <p style={{ margin: 0 }}>Improve language, service, and customer handling skills.</p>
                                        </div>
                                    </div>

                                    <div className="feature-card">
                                        <i>
                                            <MdArticle />
                                        </i>

                                        <div>
                                            <h4 style={{ margin: 0 }}>Build a Strong Resume</h4>
                                            <p style={{ margin: 0 }}>Create pathways to future jobs or permanent residency.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section alt" id="countries">
                    <div className="container">
                        <div className="section-title">
                            <h2>Choose Your Dream Country</h2>
                            <p className="mt4">Explore top destinations for your hospitality studies.</p>
                        </div>

                        <div className="countries-grid">
                            <div className="country-card">
                                <img alt="Mauritius beach" src={Image3} />
                                <div className="card-body">
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                        <span className="flag">🇲🇺</span>
                                        <h3 style={{ margin: 0 }}>Mauritius</h3>
                                    </div>
                                    <p>Starts from ₹3.5 Lakhs</p>
                                </div>
                            </div>

                            <div className="country-card">
                                <img alt="Malta coast" src={Image4} />
                                <div className="card-body">
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                        <span className="flag">🇲🇹</span>
                                        <h3 style={{ margin: 0 }}>Malta</h3>
                                    </div>
                                    <p>Starts from ₹5 Lakhs</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

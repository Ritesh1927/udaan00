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
                                <img alt="Smiling student in a professional kitchen environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACoKWUcTj2DgqEk8fVvGUQ_pKmcGdC0d5-WMoj1R_A-wMiLqzrm3M7_I4nKQJDc3795j5_vxmyYQVGwdqXVK_nnwoPXowSNKE5DgSmI2SpevFnaPM40cmtbLTz3UHjwKfzotCeva66prhk0stIsWCA_xlRgEwPP3HL3M_BMnLNXOVsMSzBrZLACw_eRFKXznOUmb-D-DIH_pgfVgmJHEjUFM2wvShCa1MK_CLPQx3rurYcLfmypVGq-JmBzk1bM4yLXAyi-HxNEYbx" />
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
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAee7tYGMF3qfwPgcv_Cd0mGhvbMXlH6JEVAiwr9tQ-pYK8jcwKFLrenLOcX6mZy3THWDufWPTBR5bExmAQAfizAY9a5Urn51MIW9yUQux70dVV6Jws_7HyUAybY-ZZEHOdm2vNRefNxRBb8ygVtQbcYz2x-61vo_VnQsA5kAgAtHjAbs-nEFk1HdeRIQp7EXJnNrsdVqJ-WDhtXGpPSDOR9XD6Ahsgsu35Yn8T3LrAjpcAObN5ihhQZGKdyI-eaDpyZz1NQZ5Sk1ol"
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
                                <img alt="Mauritius beach" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjvqmoBqek1P6YiXou8bSJcTHsRw_kke3vLA2KspQ1Mf3Akz9dVwB_Eypa_IVftogcnCc5BoH_DhQS5W_CIQmIheGIrVuhfGubDrPBnth847STvhJ4c6XNNr0zZaZGf68Vus6PIgDhVnhnnXGOmjeXYPSmBzsPyIFpwtDu1z1f2Zg9PhjJuZAwaUURzgk14DBsKJY8lomM6Z4txEXEII5WRqcHHFt09boV7GDbACl1lB4-hHX8OaOmgS_nxTlMe8lxk4d8HpeZIoR9" />
                                <div className="card-body">
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                        <span className="flag">🇲🇺</span>
                                        <h3 style={{ margin: 0 }}>Mauritius</h3>
                                    </div>
                                    <p>Starts from ₹3.5 Lakhs</p>
                                </div>
                            </div>

                            <div className="country-card">
                                <img alt="Malta coast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4oEDPkbdHq2urxNUYD6bCA0gXOZ_6SQpPT0P2mG3MUPZKJCXX_Kw0Xn-_1GMH1HSIgO7I3Gg3Lljbe8AbKKEW4l1OZBc25xGCjQa_GIm0DDLVag1jzv6s1vWtSMP0GBAW49f-xgy7osX6JzaPGLRQb8sAGKVtyAqMyxL1xwczVhe4zLb4xoONZYiSCXBtefq2J1sNx0gHzvQ490ACwStezGVQCLYFQnjh3t41G-aZsH-I_NuuYAwE7ntUQ-iKs3D_822CaV2S-vfy" />
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

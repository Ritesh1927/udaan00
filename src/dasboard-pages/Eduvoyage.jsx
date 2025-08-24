import React from 'react'
import "./Eduvoyage.css"
import UdaanLogo from "../assets/Udaan_logo2.png"
import Eduvagetimline from '../component/eduvoyagetimeline/Eduvagetimline'
const Eduvoyage = () => {
    return (
        <>

            <div className='eduvoyage-upper-section'>
                <div className='eduvoyage-inner-upper-section'>
                    <div className='eduvoyage-hero'>
                        <h1 className="eduvoyage-hero-title">
                            EduVoyage – An initiative by  :  <img src={UdaanLogo} alt="Udaan360" className="brand-logo" />
                        </h1>
                        <p className="eduvoyage-hero-description">
                            A journey beyond classrooms
                        </p>
                    </div>

                </div>

            </div>
            <div className='Eduvoyage-container'>

                <div className='Eduvoyage-container-main-container '>
                    <div className="eduvoyage-contact-page-header">
                        <h2 className='eduvoyage-heading '>
                            About EduVoyage
                        </h2>
                        <p>EduVoyage – An Experiential Learning Journey by Udaan360</p>
                    </div>

                    {/* /////////////// */}
                    <p className='first-upper-eduvoyage-container'>
                        EduVoyage is a unique initiative by Udaan360 designed to give school students first-hand exposure to top colleges and universities. Through curated campus visits, interactive sessions with faculty, and insights into diverse courses, EduVoyage helps students explore real academic environments, understand career opportunities, and make confident, well-informed decisions about their future.
                    </p>

                    <Eduvagetimline />
                </div>
            </div>

        </>
    )
}

export default Eduvoyage
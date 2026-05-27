import React from "react";
import "./Edudiamond.css";

const CollegeIcon = () => '🏛️';
const SchoolIcon = () => '🏫';
const ParentsIcon = () => '👨‍👩‍👧‍👦';
const StudentsIcon = () => '🧑‍🎓';

const EduDiamond = () => {
    return (
        <div className="pyramid-wrapper">
            <div className="pyramid">
                <div className="pyramid__section first-section" >
                    <div className="content">
                        <span className="icon"><CollegeIcon /></span>
                        <h4 className="colleges-eduvoyage-inner-heading-1"> Colleges</h4>
                        <p className="mt2  colleges-eduvoyage-inner-heading"> Find it hard to <br />    connect directly<br />  with  <br />quality  students.</p>
                    </div>
                </div>
                <div className="pyramid__section">
                    <div className="content">
                        <span className="icon"><SchoolIcon /></span>
                        <h3 className="mt5">Schools</h3>
                        <p className="mb5">Struggle to provide real <br />world   exposure  beyond <br /> academics.</p>
                    </div>
                </div>
                <div className="pyramid__section">
                    <div className="content">
                        <span className="icon"><ParentsIcon /></span>
                        <h3>Parents</h3>
                        <p>Overwhelmed by too <br /> much information & lack of structured guidance.</p>
                    </div>
                </div>
                <div className="pyramid__section">
                    <div className="content">
                        <span className="icon"><StudentsIcon /></span>
                        <p className="pyramid-footer-text">
                            Often uncertain about <br /> choosing the right course or career path.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduDiamond;

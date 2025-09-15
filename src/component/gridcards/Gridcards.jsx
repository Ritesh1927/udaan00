import React from 'react';
import "../../component/gridcards/GridCards.css";

function Gridcards() {
    const cardData = [
        {
            color: "green",
            title: "Humanities Skills Matter",
            text: "Fortune 500 companies now prioritize humanities skills like communication, empathy, and cultural awareness as key leadership traits—driving teamwork, innovation, and inclusive workplace culture."
        },
        {
            color: "orange",
            title: "Graduate Skill Gap",
            text: "Only 26% of Indian graduates are employable in their chosen field, exposing a major gap between academic education and the practical skills needed by industries today."
        },
        {
            color: "blue",
            title: "Bridging Education & Industry",
            text: "This gap highlights the urgent need for programs that connect students with real-world experiences, internships, and career guidance to improve job readiness and employability."
        }
    ];

    return (
        <section className='eduvouage-bottom-fact-container'>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    color={card.color}
                    title={card.title}
                    text={card.text}
                    delay={index * 0.3}
                />
            ))}
        </section>
    );
}

const Card = ({ color, title, text, delay }) => {
    return (
        <div className={`card-wrapper ${color}`} style={{ animationDelay: `${delay}s` }}>
            <div className="card-inner">
                <div className="card-header">
                    <div className="date">{title}</div>
                </div>
                <div className="card-body">
                    <p>{text}</p>
                </div>
                <div className="card-texture"></div>
            </div>
        </div>
    );
};

export default Gridcards;

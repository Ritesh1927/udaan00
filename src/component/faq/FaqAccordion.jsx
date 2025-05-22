import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "How is get admission in abroad university?",
    answer:
      "To get admission abroad, you'll need to research universities, prepare documents like SOP, LOR, and academic transcripts, take necessary exams (like IELTS, TOEFL, or GRE), and apply through their online portal.",
  },
  {
    question: "Do you offer complete solution for students?",
    answer:
      "Yes, we offer end-to-end services including counseling, application assistance, visa support, scholarship guidance, and accommodation support.",
  },
  {
    question: "Which country is safe and better for higher study?",
    answer:
      "Countries like Canada, Germany, and the UK are considered safe and offer top-quality education, with excellent student support and post-study opportunities.",
  },
  {
    question: "Which country offer PR after study getting job?",
    answer:
      "Canada and Australia are known for offering PR pathways to international students after they secure a job and meet specific residency criteria.",
  },
  {
    question: "Can I get scholarship with my low CGPA?",
    answer:
      "Yes, scholarships are available based on extracurriculars, special talents, and financial need, even if your CGPA is not high.",
  },
  {
    question: "Do you allow accommodation for students in abroad?",
    answer:
      "Yes, we assist in finding on-campus or off-campus accommodation options tailored to your preferences and budget.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-wrapper">
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {index + 1}. {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;

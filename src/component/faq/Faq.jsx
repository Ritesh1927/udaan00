import React, { Fragment } from "react";
import "./Faq.css";
import FaqAccordion from "./FaqAccordion";
const Faq = () => {
  return (
    <Fragment>
      <section className="Faq-container-wrapper">
        <div className="left-side-container">
          <p className="faq-little-heading">FAQ</p>
          <h1 className="faq-big-heading">Frequently asked question</h1>
          <h2>
            Still do you have any questions to know? <br />
            Feel free to ask our experts here.
          </h2>
          <button className="Faq-ask-question">
            <a
              href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
              target="_blank"
            >
              Ask Your Question
            </a>
          </button>
        </div>
        <div className="right-side-container">
          <FaqAccordion />
        </div>
      </section>
    </Fragment>
  );
};

export default Faq;

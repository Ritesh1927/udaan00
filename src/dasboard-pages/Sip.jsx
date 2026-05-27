import React from "react";

const Sip = () => {
  return (
    <section className="w-full min-h-screen text-white font-display">

      {/* HERO */}
      <div className="">
        <div className="mx-auto max-w-[1100px] px-4 pt-12 pb-16 text-center">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            School Integrated Programs (SIP)
            <br />
            <span className="text-[#C4B5FD] text-lg sm:text-xl font-semibold">
              One school. One journey. No confusion.
            </span>
          </h1>

          <div className="mx-auto mt-5 w-fit rounded-md border border-[#7F13EC]/40 bg-white/5 px-4 py-1.5 backdrop-blur">
            <p className="text-[20px] italic text-[#A78BFA]">
              “Students need mentors, not marketing”
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-6 space-y-4 text-gray-300 text-l sm:text-base">
            <p>
              At Udaan360, we believe schools should be the complete learning
              ecosystem—not just a place for academics, but a space where
              preparation, guidance, and growth happen seamlessly.
            </p>
            <p>
              Our School Integrated Programs (SIP) are designed to bring
              high-quality competitive exam preparation directly into schools,
              in collaboration with top institutes and experienced faculties,
              without disrupting the academic rhythm or burdening students and
              parents.
            </p>
            <p className="font-medium text-[#DDD6FE]">
              We don’t bring brands into schools.
              <br />
              We bring the best teachers.
            </p>
          </div>
          <button className="eduvoyage-btn mt-[30px]">
            <span className="eduvoyage-btn-inner">
              <a
                href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
              </a>
            </span>
          </button>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-[1100px]">

        {/* WHAT WE OFFER */}
        <div className="px-4 pt-16">
          <h2 className="border-l-4 border-[#7F13EC] pl-3  font-semibold text-white text-[28px] sm:text-[34px] lg:text-[50px]">
            What We Offer Through SIP
          </h2>
          <p className="pl-4 mt-2 text-sm text-gray-400">
            In collaboration with leading institutes and subject-matter experts,
            Udaan360 enables schools to offer:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 pt-8 sm:grid-cols-3">
          {[
            "JEE, NEET & CUET Preparation",
            "Olympiads & Competitive Exams",
            "Foundation Programs (Middle School onwards)",
            "Career-oriented academic mentoring",
            "Structured assessments & progress tracking",
            "Student reporting & parent communication",
          ].map((item, i) => (
            <div
              key={i}
              className="
                rounded-xl bg-white/5 p-5
                border border-white/10
                backdrop-blur-md
                hover:border-[#7F13EC]/40
                hover:shadow-[0_0_20px_rgba(127,19,236,0.25)]
                hover:-translate-y-1
                transition-all
              "
            >
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>

        <p className="px-4 pt-6 text-sm text-center text-gray-400">
          All delivered within school premises, aligned with the school timetable
          and academic goals.
        </p>

        {/* STAKEHOLDERS */}
        <div className="px-4 pt-20">
          <h2 className="border-l-4 border-[#7F13EC] pl-3  font-semibold text-white text-[28px] sm:text-[34px] lg:text-[50px]">
            How SIP Empowers Stakeholders
          </h2>
        </div>

        <div className="flex flex-col gap-4 px-4 pt-8 sm:flex-row">
          {/* Schools */}
          <div className="flex-1 p-5 border rounded-xl bg-white/5 border-white/10">
            <h3 className="mb-3 text-base font-bold text-[#C4B5FD]">
              For Schools
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Become a one-stop academic destination</li>
              <li>• Strengthen academic results and institutional credibility</li>
              <li>• Retain students by offering value beyond textbooks</li>
              <li>• NEP-aligned, competency-driven learning integration</li>
            </ul>
          </div>

          {/* Students */}
          <div className="flex-1 p-5 border rounded-xl bg-white/5 border-white/10">
            <h3 className="mb-3 text-base font-bold text-[#C4B5FD]">
              For Students
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Balanced preparation without burnout</li>
              <li>• Guidance from the right teachers at the right time</li>
              <li>• Better clarity, confidence, and consistency</li>
              <li>• No compromise between school and competitive prep</li>
            </ul>
          </div>

          {/* Parents */}
          <div className="flex-1 p-5 border rounded-xl bg-white/5 border-white/10">
            <h3 className="mb-3 text-base font-bold text-[#C4B5FD]">
              For Parents
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Reduced travel, time, and safety concerns</li>
              <li>• Transparent academic tracking and reporting</li>
              <li>• Assurance of ethical, student-first guidance</li>
            </ul>
          </div>
        </div>

        {/* PROMISE */}
        <div className="px-4 pt-20">
          <h2 className="border-l-4 border-[#7F13EC] pl-3  font-semibold text-white text-[28px] sm:text-[34px] lg:text-[50px]">
            Our Promise
          </h2>
        </div>

        <div className="flex flex-col gap-3 px-4 pt-8">
          {[
            "Quality faculty over brand hype",
            "Ethical preparation, not pressure-driven coaching",
            "Integrated learning, not fragmented schedules",
            "Guidance aligned with NEP 2020",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg bg-[#7F13EC]/10 p-4 border border-[#7F13EC]/20"
            >
              <span className="text-[#7F13EC]">✔</span>
              <span className="text-sm text-gray-200">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="m-[20px] rounded-[2.5rem] bg-gradient-to-b from-[#1A0B2E] to-[#12071F] px-6 py-20 text-center border-t border-[#7F13EC]/30">
        <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl">
          Building Strong Schools.
          <br />
          Shaping Confident Futures.
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-sm text-gray-400">
          With Udaan360 School Integrated Programs, schools don’t outsource
          education—they own it, strengthen it, and elevate it.
          <br />
          Because the right preparation belongs in the classroom, not on the
          road.
        </p>

        <button className="eduvoyage-btn mt-[30px]">
          <span className="eduvoyage-btn-inner">
            <a
              href="https://wa.me/917355308287?text=hello%20%2C%20i%20want%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Sip;

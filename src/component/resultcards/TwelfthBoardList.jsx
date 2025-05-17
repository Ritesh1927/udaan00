// src/pages/TwelfthBoardList.js
import React, { useState } from "react";
import "./BoardList.css";
import CBSE from "../../assets/boards/Cbse.png";

import ICSE from "../../assets/boards/icse.png";
import NIOS from "../../assets/boards/Nios.png";
import APBOARD from "../../assets/boards/Ap-Board.png";
import Assam from "../../assets/boards/Assam.jpg";
import UPboard from "../../assets/boards/Upboard.jpg";
import Bihar from "../../assets/boards/biharboard.jpg";
import Cgboard from "../../assets/boards/cgboard.jpg";
import Goa from "../../assets/boards/GoaBoard.jpg";
import Gujrat from "../../assets/boards/Gujrat.jpg";
import Haryana from "../../assets/boards/haryana.png";
import Jharkhand from "../../assets/boards/Jharkhand.jpg";
import Karnataka from "../../assets/boards/Karnataka.png";
import Kerala from "../../assets/boards/Kerala.png";
import MpBoard from "../../assets/boards/mpboard.jpg";
import Manipur from "../../assets/boards/manipur.png";
import Meghalaya from "../../assets/boards/Meghalaya.png";
import Nagaland from "../../assets/boards/Nagaland.jpg";
import Odisha from "../../assets/boards/odisha.jpg";
import Punjab from "../../assets/boards/punjab.jpg";
import Rajasthan from "../../assets/boards/rajasthan.jpg";
import Sikkim from "../../assets/boards/sikkim.png";
import TamilNadu from "../../assets/boards/TamilNadu.png";
import Telangana from "../../assets/boards/telangana.jpg";
import Tripura from "../../assets/boards/Tripura.jpg";
import Uttarakhand from "../../assets/boards/Uttarakhand.jpg";
import WestBengal from "../../assets/boards/WestBengal.png";
import Jammu from "../../assets/boards/jammu.jpg";
const twelfthBoards = [
  {
    name: "CBSE Board",
    url: "https://cbseresults.nic.in/class_xii_jh_2025/ClassTwelfth_bn_2025.htm",
    image: CBSE,
    declared: true,
  },

  {
    name: "ICSE 12th (ISC)",
    url: "https://results.cisce.org/",
    image: ICSE,
    declared: true,
  },
  {
    name: "NIOS 12th ",
    url: "https://results.nios.ac.in/home/on-demand?type=2",
    image: NIOS,
    declared: true,
  },
  {
    name: "UP Board 12th",
    url: "https://ubse.upmsp.edu.in/ResultIntermediate.aspx",
    image: UPboard,
    declared: true,
  },

  {
    name: "Bihar Board 12th",
    url: "https://results.biharboardonline.com/sec25/",
    image: Bihar,
    declared: true,
  },
  // Add more as needed

  {
    name: "Andhra Pradesh Board",
    url: "https://results.eenadu.net/ap-inter-2025/ap-inter-2nd-year-results-general.aspx",
    image: APBOARD,
    declared: true,
  },
  {
    name: "Assam Board",
    url: "https://results.ahsecregistration.in/as/ahsec/class-12th-exam-result-2025-ahsec/query.htm?isource=News&id=197796&isource=News&id=197792",
    image: Assam,
    declared: true,
  },

  {
    name: "Chhattisgarh Board ",
    url: "https://cg.results.nic.in/2025results/XII_Main25.html",
    image: Cgboard,
    declared: true,
  },
  {
    name: "Goa Board ",
    url: "https://results.gbshsegoa.net/#/home",
    image: Goa,
    declared: true,
  },
  {
    name: "Gujrat Board ",
    url: "https://gujarat.indiaresults.com/?utm_source=chatgpt.com",
    image: Gujrat,
    declared: true,
  },
  {
    name: "Haryana Board ",
    url: "https://result.bsehexam2017.in/zxcmnbv/mainresult.aspx",
    image: Haryana,
    declared: true,
  },
  {
    name: "Jharkhand Board ",
    url: "https://jharkhand.indiaresults.com/?utm_source=chatgpt.com",
    image: Jharkhand,
    declared: true,
  },
  {
    name: "Karnataka Board ",
    url: "https://karresults.nic.in/slpufirst25_1.asp",
    image: Karnataka,
    declared: true,
  },
  {
    name: "Kerala Board ",
    url: "https://results.kerala.gov.in/",
    image: Kerala,
    declared: false,
  },
  {
    name: "Madhya Pradesha Board ",
    url: "https://result.mponline.gov.in/Result/Result?rspbmhsh=MgfgfJHGFFtytytykoReiLmezA1kUfdsfdsfsdai4eyrZZGnPzi9K1pc7sKI0vs==",
    image: MpBoard,
    declared: true,
  },
  {
    name: "Manipur Board ",
    url: "https://manresults.nic.in/hse/index.htm",
    image: Manipur,
    declared: true,
  },
  {
    name: "Meghalaya Board ",
    url: "https://megresults.nic.in/",
    image: Meghalaya,
    declared: true,
  },
  {
    name: "Nagaland Board ",
    url: "https://nbsenl.edu.in/board-results/hsslc",
    image: Nagaland,
    declared: true,
  },
  {
    name: "Odisha  Board ",
    url: "https://orissaresults.nic.in/CHSE?utm_source=chatgpt.com",
    image: Odisha,
    declared: true,
  },
  {
    name: "Punjab Board ",
    url: "https://www.jagranjosh.com/results/punjab-pseb-12th-result-online-12th-145527",
    image: Punjab,
    declared: false,
  },
  {
    name: "Rajasthan Board ",
    url: "https://punjab-12th-result.indiaresults.com/pb/pseb/result-of-12-class-march-2025/query.htm",
    image: Rajasthan,
    declared: false,
  },
  {
    name: "Sikkim Board ",
    url: "https://punjab-12th-result.indiaresults.com/pb/pseb/result-of-12-class-march-2025/query.htm",
    image: Sikkim,
    declared: false,
  },
  {
    name: "Tamil Nadu Board ",
    url: "https://tnresults.nic.in/",
    image: TamilNadu,
    declared: true,
  },

  {
    name: "Telangana Board ",
    url: "https://results.cgg.gov.in/",
    image: Telangana,
    declared: true,
  },
  {
    name: "Tripura Board ",
    url: "https://www.results.shiksha/tripura/",
    image: Tripura,
    declared: true,
  },
  {
    name: "Uttarakhand Board ",
    url: "https://www.results.shiksha/uttarakhand/class-12.htm",
    image: Uttarakhand,
    declared: true,
  },
  {
    name: "West Bengal Board ",
    url: "https://www.results.shiksha/west-bengal/wbchse/",
    image: WestBengal,
    declared: true,
  },
  {
    name: "Jammu & Kashmir Board ",
    url: "https://jkresults.nic.in/jkboseresults.aspx",
    image: Jammu,
    declared: true,
  },
];

const TwelfthBoardList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBoardClick = (e, declared, url) => {
    if (!declared) {
      e.preventDefault();
      setShowModal(true);
    } else {
      window.open(url, "_blank", "noopener noreferrer");
    }
  };
  return (
    <div className="tenth-board-container">
      <h2 className="board-title">12th Board Results</h2>

      <div className="board-grid-container">
        <div className="board-grid">
          {twelfthBoards.map((board, i) => (
            <div
              key={i}
              className="board-card"
              onClick={(e) => handleBoardClick(e, board.declared, board.url)}
              style={{ cursor: "pointer" }}
            >
              <img src={board.image} alt={board.name} className="board-logo" />
              <span className="board-name">{board.name}</span>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <p>
              Result not declared yet. This link will be activated after the
              result is declared.
            </p>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwelfthBoardList;

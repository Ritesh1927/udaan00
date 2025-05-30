// src/pages/TenthBoardList.js
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

const tenthBoards = [
  {
    name: "CBSE Board",
    url: "https://cbseresults.nic.in/class_x_jh_2025/ClassTenth_po_2025.htm",
    image: CBSE,
    declared: true,
  },
  {
    name: "ICSE - ISC Board",
    url: "https://results.cisce.org/",
    image: ICSE,
    declared: true,
  },
  {
    name: "NIOS Board",
    url: "https://results.nios.ac.in/home/on-demand?type=2",
    image: NIOS,
    declared: true,
  },
  {
    name: "Andhra Pradesh Board",
    url: "https://www.results.shiksha/andhra-pradesh/ssc.htm",
    image: APBOARD,
    declared: true,
  },
  {
    name: "Assam Board",
    url: "https://assam-hslc-result.indiaresults.com/as/seba/class-10-hslc-rechecking-exam-result-2025/query.htm",
    image: Assam,
    declared: true,
  },
  {
    name: "Uttar Pradesh Board",
    url: "https://ubse.upmsp.edu.in/ResultScrutinyHighSchool.aspx",
    image: UPboard,
    declared: true,
  },
  {
    name: "Bihar Board",
    url: "https://results.biharboardonline.com/sec25/",
    image: Bihar,
    declared: true,
  },
  {
    name: "Chhattisgarh Board ",
    url: "https://vidia.cgbse.nic.in/2025Results/X_Main25.html",
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
    url: "https://result.gseb.org/",
    image: Gujrat,
    declared: true,
  },
  {
    name: "Haryana Board ",
    url: "https://result.bsehexam2017.in/Akjhkh/hosresult.aspx",
    image: Haryana,
    declared: true,
  },
  {
    name: "Jharkhand Board ",
    url: "https://result.bsehexam2017.in/Akjhkh/hosresult.aspx",
    image: Jharkhand,
    declared: false,
  },
  {
    name: "Karnataka Board ",
    url: "https://karresults.nic.in/first_sl_kar_resssl_1.asp?utm_source=shiksha&utm_medium=Shiksha-ED&utm_campaign=Shiksha-Onsite",
    image: Karnataka,
    declared: true,
  },
  {
    name: "Kerala Board ",
    url: "https://results.kerala.gov.in/",
    image: Kerala,
    declared: true,
  },
  {
    name: "Madhya Pradesha Board ",
    url: "https://mpresults.nic.in/mpbse/Xhsc-21/X_class_21.htm",
    image: MpBoard,
    declared: true,
  },
  {
    name: "Manipur Board ",
    url: "https://manresults.nic.in/",
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
    url: "https://nbsenl.edu.in/board-results/hslc",
    image: Nagaland,
    declared: true,
  },
  {
    name: "Odisha  Board ",
    url: "https://orissaresults.nic.in/",
    image: Odisha,
    declared: true,
  },
  {
    name: "Punjab Board ",
    url: "https://punjab-12th-result.indiaresults.com/pb/pseb/result-of-12-class-march-2025/query.htm",
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
    url: "https://tnresults.nic.in/rdclex.htm",
    image: TamilNadu,
    declared: true,
  },

  {
    name: "Telangana Board ",
    url: "https://www.results.shiksha/telangana/ssc.htm",
    image: Telangana,
    declared: true,
  },
  {
    name: "Tripura Board ",
    url: "https://education.indianexpress.com/boards-exam/tripura-tbse-10th-result",
    image: Tripura,
    declared: true,
  },
  {
    name: "Uttarakhand Board ",
    url: "https://uaresults.nic.in/",
    image: Uttarakhand,
    declared: true,
  },
  {
    name: "West Bengal Board ",
    url: "https://www.results.shiksha/west-bengal/wbbse/",
    image: WestBengal,
    declared: true,
  },
  {
    name: "Jammu & Kashmir Board ",
    url: "https://jkresults.nic.in/",
    image: Jammu,
    declared: true,
  },
];

const TenthBoardList = () => {
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
      <h2 className="board-title">10th Board Results</h2>

      <div className="board-grid-container">
        <div className="board-grid">
          {tenthBoards.map((board, i) => (
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

export default TenthBoardList;

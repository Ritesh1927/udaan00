// src/pages/TwelfthBoardList.js
import React from "react";
import "./BoardList.css";

const twelfthBoards = [
  {
    name: "CBSE 12th",
    url: "https://cbseresults.nic.in/class_xii_jh_2025/ClassTwelfth_bn_2025.htm",
  },
  { name: "ICSE 12th (ISC)", url: "https://results.cisce.org/" },
  { name: "UP Board 12th", url: "https://upmsp.edu.in/ResultInter.aspx" },
  {
    name: "Bihar Board 12th",
    url: "http://results.biharboardonline.com/seniorsecondary23",
  },
  // Add more as needed
];

const TwelfthBoardList = () => {
  return (
    <div className="board-page container">
      <h2>12th Board Results</h2>
      <ul className="board-list">
        {twelfthBoards.map((board, i) => (
          <li key={i}>
            <a href={board.url} target="_blank" rel="noopener noreferrer">
              {board.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwelfthBoardList;

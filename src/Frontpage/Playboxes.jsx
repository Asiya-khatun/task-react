import React, { useState } from "react";
import './playboxes.css';

function Playbox() {
  const [selectYear, setSelectYear] = useState(1);

  const options = {
    1: ["0-12 weeks", "3-4 months", "5-6 months", "7-8 months", "9-10 months", "11-12 months"],
    2: ["13-15 months", "16-18 months", "19-21 months", "22-24 months"],
  };

  const year1Icons = [
    <svg width="48" height="48" key="0"><circle cx="24" cy="24" r="16" fill="#ffe066" stroke="#eee" strokeWidth="2"/></svg>,
    <svg width="48" height="48" key="1"><ellipse cx="24" cy="18" rx="12" ry="6" fill="#8b8c3f"/><ellipse cx="24" cy="30" rx="12" ry="6" fill="#8b8c3f"/></svg>,
    <svg width="48" height="48" key="2"><rect x="10" y="18" width="28" height="16" rx="6" fill="#cbe7e2"/><path d="M14 18 Q16 10 20 18 Q24 10 28 18 Q32 10 34 18" fill="#cbe7e2"/></svg>,
    <svg width="48" height="48" key="3"><circle cx="18" cy="24" r="8" fill="#e6d6f3"/><circle cx="30" cy="24" r="8" fill="#e6d6f3"/><circle cx="24" cy="18" r="8" fill="#e6d6f3"/><circle cx="24" cy="30" r="8" fill="#e6d6f3"/></svg>,
    <svg width="48" height="48" key="4"><path d="M18 16 Q24 24 18 32" stroke="#ff7b54" strokeWidth="6" fill="none"/><path d="M24 16 Q30 24 24 32" stroke="#ff7b54" strokeWidth="6" fill="none"/><path d="M30 16 Q36 24 30 32" stroke="#ff7b54" strokeWidth="6" fill="none"/></svg>,
    <svg width="48" height="48" key="5"><ellipse cx="24" cy="32" rx="12" ry="6" fill="#b7e3fa"/><rect x="14" y="18" width="20" height="10" fill="#b7e3fa"/><polygon points="18,18 30,18 24,10" fill="#b7e3fa"/></svg>,
  ];

  return (
    <div className="playboxes-container">
      <div className="playbox-left">
        <h3>Shop Play Boxes</h3>
        <ul>
          <li>Play Box Subscription</li>
          <li>Newborn Box</li>
          <li>Gift Play Boxes</li>
          <li>Redeem Gift</li>
          <li>All Play Boxes</li>
        </ul>
      </div>

      <div className="playbox-center">
        <div className="year-buttons">
          <button className={selectYear === 1 ? "active" : ""} onClick={() => setSelectYear(1)}>Year 1</button>
          <button className={selectYear === 2 ? "active" : ""} onClick={() => setSelectYear(2)}>Year 2</button>
        </div>

        <div className="year-list">
          <ul>
            {options[selectYear].map((item, idx) => (
              <li key={item}>
                {selectYear === 1 && year1Icons[idx]}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="playbox-right">
        <h5>Play Box Gifts & Subscriptions</h5>
        <div className="image-container">
          <div className="image-box">
            <img src="/abcimage.jpg" alt="product"/>
            <div className="image-info">
              <h4>First Bites Full Kit</h4>
              <h5>$40/month</h5>
            </div>
          </div>
          <div className="image-box">
            <img src="/abcimage.jpg" alt="product"/>
            <div className="image-info">
              <h4>First Bites Full Kit</h4>
              <h5>$40/month</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playbox;
import React, { useState } from "react";
import "./playboxes.css";

function Playbox() {
  const [selectYear, setSelectYear] = useState(1);

  const options = {
    1: ["0-12 weeks", "3-4 mos", "5-6 mos", "7-8 mos", "9-10 mos", "11-12 mos"],
    2: ["13-15 mos", "16-18 mos", "19-21 mos", "22-24 mos"],
  };

  const year1Icons = [
    <svg width="28" height="28" key="0"><circle cx="14" cy="14" r="10" fill="#ffe066"/></svg>,
    <svg width="28" height="28" key="1"><ellipse cx="14" cy="11" rx="9" ry="4.5" fill="#8b8c3f"/><ellipse cx="14" cy="19" rx="9" ry="4.5" fill="#8b8c3f"/></svg>,
    <svg width="28" height="28" key="2"><rect x="5" y="10" width="18" height="10" rx="4" fill="#cbe7e2"/></svg>,
    <svg width="28" height="28" key="3"><circle cx="10" cy="14" r="5" fill="#e6d6f3"/><circle cx="18" cy="14" r="5" fill="#e6d6f3"/><circle cx="14" cy="10" r="5" fill="#e6d6f3"/><circle cx="14" cy="18" r="5" fill="#e6d6f3"/></svg>,
    <svg width="28" height="28" key="4"><path d="M9 8 Q14 14 9 20" stroke="#ff7b54" strokeWidth="4" fill="none"/><path d="M14 8 Q19 14 14 20" stroke="#ff7b54" strokeWidth="4" fill="none"/><path d="M19 8 Q24 14 19 20" stroke="#ff7b54" strokeWidth="4" fill="none"/></svg>,
    <svg width="28" height="28" key="5"><ellipse cx="14" cy="18" rx="8" ry="4.5" fill="#b7e3fa"/><rect x="8" y="10" width="12" height="6" fill="#b7e3fa"/></svg>,
  ];

  return (
    <div className="playboxes-container">
      <div className="playboxes-inner">
        <div className="playbox-left">
          <h3>Shop Play boxes</h3>
          <ul className="playbox-left-list">
            <li className="has-sparkle">Play Box Subscription</li>
            <li>Newborn Box</li>
            <li>Gift Play Boxes</li>
            <li>Redeem Gift</li>
            <li className="accent-link">All Play Boxes</li>
          </ul>
        </div>

        <div className="playbox-center">
          <div className="year-switch">
            <button
              type="button"
              className={selectYear === 1 ? "active" : ""}
              onClick={() => setSelectYear(1)}
            >
              Year 1
            </button>
            <button
              type="button"
              className={selectYear === 2 ? "active" : ""}
              onClick={() => setSelectYear(2)}
            >
              Year 2
            </button>
          </div>

          <div className="age-grid">
            {options[selectYear].map((label, idx) => (
              <div className="age-card" key={label}>
                <div className="age-icon-wrap">
                  {selectYear === 1 ? year1Icons[idx] : <div className="age-placeholder" />}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="playbox-right">
          <h5>Play Box Gifts & Subscriptions</h5>
          <div className="cards">
            <article className="card">
              <img src="./abcimage.jpg" alt="First Bites Full Kit" />
              <div className="meta">
                <span className="badge">BEST SELLER</span>
                <h4>First Bites Full Kit</h4>
                <div className="price">$40/month</div>
              </div>
            </article>
            <article className="card">
              <img src="./abcimage.jpg" alt="First Bites Full Kit" />
              <div className="meta">
                <span className="badge">BEST SELLER</span>
                <h4>First Bites Full Kit</h4>
                <div className="price">$40/month</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playbox;
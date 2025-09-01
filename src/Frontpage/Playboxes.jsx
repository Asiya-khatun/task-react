import React, { useState } from "react";
import './playboxes.css';

function Playbox() {
  const [selectYear, setSelectYear] = useState(1);

  const options = {
    1: ["0-12 weeks", "3-4 months", "5-6 months", "7-8 months", "9-10 months", "11-12 months"],
    2: ["13-15 months", "16-18 months", "19-21 months", "22-24 months"],
  };

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
          <button onClick={() => setSelectYear(1)}>Year 1</button>
          <button onClick={() => setSelectYear(2)}>Year 2</button>
        </div>

        <div className="year-list">
          <ul>
            {options[selectYear].map((item) => (
              <li >
                <i className="fa-regular fa-circle"></i>
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

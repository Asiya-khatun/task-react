import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './mealtime.css';



function Mealtime() {
   const navigate = useNavigate();

  const handleBack = () => {
    setNavbarOpen(true);
    setTimeout(() => navigate("/"), 400);
  };
  return (
    <div className="body">
      <div className="body-container ">
        <div className="left-body ">
          <span className='back-arrow' onClick={handleBack}>&#60;</span>
          <h1>Shop Mealtime</h1>
          <ul>
            <li>High Chair</li>
            <li>Booster</li>
            <li>Tableware & Bibs</li>
            <li>Mealtime Accessories</li>
            <li>Bundle & Save</li>
            <li>All Mealtime</li>
          </ul>
        </div>

        <div className="right-body ">
          <h2>Featured Mealtime</h2>
          <div className="image-list">
            <div className="image-item ">
              <img src="/abcimage.jpg" alt="imagea" />
              <h5>The Chair</h5>
            </div>

            <div className="image-item ">
              <img src="/abcimage.jpg" alt="imagea" />
              <h5>First Bites Full kit</h5>
            </div>

            <div className="image-item ">
              <img src="/abcimage.jpg" alt="imagea" />
              <h5>Suction Plate</h5>
            </div>
            <div className="image-item ">
              <img src="/abcimage.jpg" alt="imagea" />
              <h5>Little Cup</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Mealtime;
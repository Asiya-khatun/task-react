import React, { useMemo, useState } from 'react';
import './mealtime.css';

function Mealtime() {
  const items = useMemo(
    () => [
      { src: './abcimage.jpg', title: 'The Chair' },
      { src: './abcimage.jpg', title: 'First Bites Full Kit' },
      { src: './abcimage.jpg', title: 'Suction Plate' },
      { src: './abcimage.jpg', title: 'Little Cup' },
      { src: './abcimage.jpg', title: 'Dining table' },
      { src: './abcimage.jpg', title: 'Spoon, fork & knife' },
    ],
    []
  );

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < items.length; i += 3) out.push(items.slice(i, i + 3));
    return out;
  }, [items]);

  const [page, setPage] = useState(0);
  const canPrev = page > 0;
  const canNext = page < pages.length - 1;

  const prev = () => canPrev && setPage((p) => p - 1);
  const next = () => canNext && setPage((p) => p + 1);

  return (
    <div className="mealtime-container">
      <div className="mealtime-inner">
        <div className="mealtime-left">
          <h3>Shop Mealtime</h3>
          <ul className="mealtime-left-list">
            <li>High Chair</li>
            <li>Booster</li>
            <li>Tableware & Bibs</li>
            <li>Mealtime Accessories</li>
            <li>Bundle & Save</li>
            <li className="accent-link">All Mealtime</li>
          </ul>
        </div>

        <div className="mealtime-center">
          <div className="section-header">
            <h5>Featured Mealtime</h5>
            <div className="carousel-controls">
              <button
                className="section-prev"
                aria-label="Previous"
                onClick={prev}
                disabled={!canPrev}
              >
                ‹
              </button>
              <button
                className="section-next"
                aria-label="Next"
                onClick={next}
                disabled={!canNext}
              >
                ›
              </button>
            </div>
          </div>

          <div className="image-viewport">
            <div
              className="image-track"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, idx) => (
                <div className="image-page" key={idx}>
                  {group.map((it, i) => (
                    <div className="image-item" key={i}>
                      <img src={it.src} alt={it.title} />
                      <h5>{it.title}</h5>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mealtime-right"></div>
      </div>
    </div>
  );
}

export default Mealtime;
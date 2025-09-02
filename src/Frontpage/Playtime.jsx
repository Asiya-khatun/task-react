import React, { useState, useRef, useEffect } from 'react';
import './playtime.css';

const slides = [
  {
    image: '/icecream.png',
    videos: [
      { src: '/video1.mp4', poster: '/poster1.jpg' },
      { src: '/video2.mp4', poster: '/poster2.jpg' }
    ],
    vimeos: [
      { src: 'https://player.vimeo.com/video/76979871' },
      { src: 'https://player.vimeo.com/video/357274789' }
    ],
    accordion: {
      title: `It's not magic. It's science`,
      description:
        'Lorem Ipsum Lorem ipsum dolor sit amet consectetur. Elit non ultricies sed ipsum dictum erat ut eu tempor erat. Duis feugiat dictum egestas erat.',
      items: ['Lorem ipsum dolor', 'Amet consectetur', 'Tellus bibendum sapien'],
      footertitle: 'A friendly translator',
      footerdescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.',
    },
  },
  {
    image: '/icecream',
    videos: [
      { src: '/video.mp4', poster: '/abcimage.jpg' },
      { src: '/video.mp4', poster: '/abcimage.jpg' }
    ],
    vimeos: [
      { src: 'https://player.vimeo.com/video/76979871' },
      { src: 'https://player.vimeo.com/video/76979871' }
    ],
    accordion: {
      title: `Another Slide Title`,
      description:
        'Another slide description goes here. Duis feugiat dictum egestas erat.',
      items: ['First item', 'Second item', 'Third item'],
      footertitle: 'Another friendly note',
      footerdescription:
        'Another footer description for this slide.',
    },
  }
];

function Playtime() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className={`playtime-container${inView ? ' animate' : ''}`} ref={sectionRef}>
      <div className="left-playtime">
        {activeSlide?.image && (
          <div className="image-box">
            <img src={activeSlide.image} alt="Slide" />
          </div>
        )}

        {activeSlide?.videos?.map((vid, i) => (
          <video
            key={i}
            controls
            autoPlay={inView}
            muted={false}
            width="100%"
            height="180"
            poster={vid.poster}
            style={{ marginTop: 12, borderRadius: 10 }}
          >
            <source src={vid.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}

        {activeSlide?.vimeos?.map((vimeo, i) => (
          <iframe
            key={i}
            src={`${vimeo.src}?autoplay=${inView ? 1 : 0}&muted=0`}
            width="100%"
            height="180"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={`Vimeo ${i}`}
            style={{ marginTop: 12, borderRadius: 10, background: '#000' }}
          />
        ))}
      </div>

      <div className="right-playtime">
        <h2
          style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 700,
            color: '#1a2a4a',
            fontStyle: 'normal',
            fontSize: '2.2rem',
            marginBottom: 12,
            lineHeight: 1.1,
          }}
        >
        </h2>

        <div style={{ marginBottom: 16 }}>
          <b>Lorem Ipsum</b>
          <div
            style={{
              fontStyle: 'normal',
              color: '#222',
              fontWeight: 400,
              fontSize: '1rem',
              marginTop: 4,
            }}
          >
            {activeSlide?.accordion?.description || 'No description available'}
          </div>
        </div>

        <div className="accordion-list">
          {activeSlide?.accordion?.items?.map((item, idx) => (
            <div
              key={idx}
              className={`accordion-item${activeIndex === idx ? ' active' : ''}`}
              style={{
                color: activeIndex === idx ? '#1976d2' : (idx === 0 ? '#b7b7b7' : idx === 1 ? '#b7c59c' : '#cbe7e2'),
                borderBottom: '1px solid #eee',
                padding: '8px 0',
                fontSize: '1.08rem',
                fontStyle: 'normal',
                cursor: 'pointer',
                fontWeight: activeIndex === idx ? 600 : 400
              }}
              onClick={() => setActiveIndex(idx)}
            >
              {item}
            </div>
          ))}
        </div>

        <footer
          className="accordion-footer"
          style={{ marginTop: 24, fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          <span
            style={{
              fontWeight: 600,
              color: '#1a2a4a',
              fontStyle: 'italic',
              fontSize: '1rem',
            }}
          >
            {activeSlide?.accordion?.footertitle || 'No Footer Title'}
          </span>
          <br />
          <span
            style={{
              fontSize: '0.95rem',
              color: '#222',
              fontStyle: 'normal',
            }}
          >
            {activeSlide?.accordion?.footerdescription || 'No footer description'}
          </span>
        </footer>
      </div>
    </section>
  );
}

export default Playtime;
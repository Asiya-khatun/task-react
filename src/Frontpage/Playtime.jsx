import React, { useEffect, useMemo, useRef, useState } from 'react';
import './playtime.css';

const slides = [
  {
    image: '/icecream.png',
    accordion: {
      title: "It's not magic. It's science",
    },
  },
  {
    videos: [{ src: '/video1.mp4', poster: '/poster1.jpg' }],
    accordion: {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur. Euismod ultricies sed ipsum duis at arcu sit urna proin.  Erat feugiat diam pharetra nisl. .',
    },
  },
  {
    videos: [{ src: '/video1.mp4', poster: '/poster1.jpg' }],
    accordion: {
      title: 'Lorem Ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero quidem! Esse expedita, quam, et alias quidem dolores accusamus beatae ex nostrum qui nisi dolore ipsam adipisci, magnam fugiat praesentium.',
    },
  },
  {
    vimeos: [{ src: 'https://player.vimeo.com/video/76979871' }],
    accordion: {
      title: 'Amet consectetur',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vero quidem! Esse expedita, quam.',
    },
  },
  {
    vimeos: [{ src: 'https://player.vimeo.com/video/76979871' }],
    accordion: {
      title: 'Tellus bibendum sapien',
      description:
        'Lorem ipsum dolor sit amet consectetur. Euismod ultricies sed ipsum duis at arcu sit urna proin. Erat feugiat diam pharetra nisl.',
    },
  },
  {
    footer_title: 'A friendly feminder',
    footer_description:
      'Alcohol will still probably affect your well-being and your sleep. A healthy breakfast and coffee should have you up and running by mid-morning.',
  },
];

const mediaSlides = slides.slice(0, Math.max(1, slides.length  + 2));
const footer = slides[slides.length - 1];

function useInViewport(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.10 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function Playtime() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInViewport(sectionRef);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (inView && mediaSlides.length > 0) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % mediaSlides.length);
        setOpenAccordion((prev) => (prev + 1) % mediaSlides.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [inView]);

  useEffect(() => {
    setOpenAccordion(activeIndex);
  }, [activeIndex]);

  const sectionTitle = mediaSlides[0]?.accordion?.title ?? '';

  const renderMedia = (slide, idx) => {
    const isActive = activeIndex === idx;
    const primary = useMemo(() => {
      if (slide?.image) return { type: 'image', value: slide.image };
      if (slide?.videos?.[0]) return { type: 'video', value: slide.videos[0] };
      if (slide?.vimeos?.[0]) return { type: 'vimeo', value: slide.vimeos[0] };
      return null;
    }, [slide]);

    return (
      <div
        key={idx}
        className={`slide${isActive ? ' active' : ''}`}
        style={{ display: isActive ? 'block' : 'none' }}
      >
        {primary?.type === 'image' && (
          <img src={primary.value} alt={slide?.accordion?.title ?? 'Slide'} />
        )}
        {primary?.type === 'video' && (
          <video
            src={primary.value.src}
            poster={primary.value.poster}
            autoPlay={isActive && inView}
            controls
            muted={false}
            playsInline
            style={{ width: '100%' }}
          />
        )}
        {primary?.type === 'vimeo' && (
          <iframe
            src={`${primary.value.src}?autoplay=${isActive && inView ? 1 : 0}&muted=0`}
            width="100%"
            height="300"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={slide?.accordion?.title ?? `Vimeo ${idx + 1}`}
            style={{ background: '#000' }}
          />
        )}
      </div>
    );
  };

  const handleAccordionClick = (idx) => {
    setActiveIndex(idx);
    setOpenAccordion(idx);
  };

  return (
    <section
      ref={sectionRef}
      className={`slider-accordion-section${inView ? ' animate' : ''}`}
      aria-label="Playtime carousel"
    >
      <div className="content-wrapper">
        <div className="slider">
          {mediaSlides.map((slide, idx) => renderMedia(slide, idx))}
        </div>

        <div className="accordion-column">
          <div className="section-title">
            {sectionTitle?.includes("It's") ? sectionTitle.replace('.', ',') : sectionTitle}
          </div>

          <div className="accordion">
            {mediaSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`accordion-item${openAccordion === idx ? ' open' : ''}`}
              >
                <div
                  className="accordion-title"
                  onClick={() => handleAccordionClick(idx)}
                >
                  {slide.accordion?.title ?? ``}
                </div>
                {openAccordion === idx && slide.accordion?.description && (
                  <div className="accordion-desc">{slide.accordion.description}</div>
                )}
              </div>
            ))}

            <h5>{footer?.footer_title || 'No Footer Title'}</h5>
            <div className="footer-note">
              {footer?.footer_description || 'No footer description'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Playtime;
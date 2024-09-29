import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Import arrows

const HeroSection = () => {
  const images = [
    {
      src: 'https://www.kcmt.in/img/img7.png',
      title: 'Image Title 1',
      description: 'This is the description for image 1.',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Fcarousel%20images%2F1.png?alt=media&token=7d6998ec-2f89-4ece-9c9f-e2d2058d5a3e',
      title: 'Image Title 2',
      description: 'This is the description for image 2.',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Fcarousel%20images%2F2.png?alt=media&token=a16a432a-b0e6-41fc-903d-f57318be0941',
      title: 'Image Title 3',
      description: 'This is the description for image 3.',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Fcarousel%20images%2F4.png?alt=media&token=c1a2f094-8410-4c2a-91a1-ecfa85c10dae',
      title: 'Image Title 4',
      description: 'This is the description for image 4.',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/kcmt-92788.appspot.com/o/duggu-store%2Fcarousel%20images%2F5.png?alt=media&token=b19d8904-9ce3-442b-9290-edf7ec5a9358',
      title: 'Image Title 5',
      description: 'This is the description for image 5.',
    },
  ];

  const videoUrl = 'https://www.kcmt.in/images/kcmt-video.mp4';

  // Slider settings
  const settings = {
    infinite: true,
    speed: 1000, // Smooth transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Switch images every 3 seconds
    cssEase: 'ease-in-out',
    fade: false, // disable fade to apply custom animation
    nextArrow: <NextArrow />, // Custom next button
    prevArrow: <PrevArrow />, // Custom prev button
    dots: false, // Hide dots
    beforeChange: (oldIndex, newIndex) => {
      const newSlide = document.querySelector(`.slick-slide[data-index="${newIndex}"]`);
      if (newSlide) {
        newSlide.classList.add('animate');
      }
    },
    afterChange: (current) => {
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach((slide) => {
        slide.classList.remove('animate');
      });
    },
  };

  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      // Move to the next slide after the video finishes playing
      sliderRef.current.slickNext();
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      videoElement.play();
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <div className="relative w-full  overflow-hidden">
      <Slider {...settings} ref={sliderRef}>
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-full"
            style={{
              animation: 'popUpShadeUp 1s ease-in-out both',
            }}
          >
            <img
              src={img.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg transition-opacity duration-500">
              <h2 className="text-lg font-bold">{img.title}</h2>
              <p className="text-sm">{img.description}</p>
            </div>
          </div>
        ))}
        <div
          className="relative w-full h-full"
          style={{
            animation: 'popUpShadeUp 1s ease-in-out both',
          }}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop={false} // Do not loop the video
          />
        </div>
      </Slider>
    </div>
  );
};

// Custom Next Arrow using React Icons
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer hover:bg-gray-900 z-10"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

// Custom Prev Arrow using React Icons
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full cursor-pointer hover:bg-gray-900 z-10"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

export default HeroSection;
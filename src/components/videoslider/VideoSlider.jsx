import  { useState, useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VideoSlider.css"; // Import your custom CSS
import { Link } from 'react-router-dom';

const VideoSlider = () => {
 const texts= ["Muzaffarpur .", "Patna .", "Smastipur ."];


  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === "") {
        // Move to the next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timeout = setTimeout(handleTyping, 100);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, texts, currentTextIndex, 100, 1500]);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Define videos for different screen sizes
  const videos = [
    {
      desktop: "cooking1.mp4",
      mobile: "cooking2.mp4",
    },
    {
      desktop: "cleaning1.mp4",
      mobile: "cleaning2.mp4",
    },
    {
      desktop: "baby-caretaker1.mp4",
      mobile: "baby-caretaker2.mp4",
    },
  ];

  // Function to determine which video to display
  const isMobile = window.innerWidth < 768;

  return (
    <div className='videodiv'>
    <div className="video-container">
    <div className="heading">
      <h1>
        Best Maid Services in <span className='animatedtext'>{displayedText}</span>
      </h1>
      <p>
             
The <span>inner MELBOURNE maids </span>
         is the simplest way to get housemaid in order with the right domestic help .
      </p>

<Link  to={'/Services'}>      <button className="servicebtn">All Services</button>
</Link>    
 </div>
    </div>

    <div className="video-slider">
      <Slider {...settings}>
        {videos.map((video, index) => (

          

          <div key={index} className="video-slide">

            <video
              src={isMobile ? video.mobile : video.desktop}
              autoPlay
              loop
              muted
              className="responsive-video"
            />

          </div>
          

        ))}
      </Slider>
    </div>
    </div>);
};

export default VideoSlider;

import React from 'react';
import VideoSlider from "../components/videoslider/VideoSlider";
import Services from '../components/service/Services';
import About from './about/About';
// import About from "./about/About";
import Contact from '../components/contact/Contact';
const Home = () => {
  return (
    <>
      <VideoSlider />
      <Services />

<About />
<Contact />

    </>
  );
}

export default Home;

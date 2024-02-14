import React from "react";
import "./Home.css";
import Homebg from "../images/Bg.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="home"
      className="home"
      style={{
        backgroundImage: `url(${Homebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-left" data-aos="fade-right" data-aos-duration="3000">
        <div className="h-left-txt">
          <h5>Hello there!</h5>
          <h1>I'm Kanhary</h1>

          <p>
            a passionate computer science student with a <br /> focus on
            front-end development. Welcome to <br /> my portfolio website.
          </p>
          <div className="h-left-btn-box">
            <a href="#about">
              <button className="btn-h-more">
                View More <FaArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-right">
        <div className="cssload-container">
          <ul className="cssload-flex-container">
            <li>
              <span className="cssload-loading cssload-one"></span>
              <span className="cssload-loading cssload-two"></span>
              <span className="cssload-loading-center"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

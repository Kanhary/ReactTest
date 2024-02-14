import React from "react";
import "./Education.css";
import { LuCalendarDays } from "react-icons/lu";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="education" id="Education" data-aos="fade-up" data-aos-duration="3000">
        <h3 className="e-heading">My Journey</h3>
      <div className="education-row">
        <div className="education-column" data-aos="fade-right" data-aos-duration="2000">
          <h3 className="title">education</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i>
                    <LuCalendarDays />
                  </i>{" "}
                  2021-Present
                </div>
                <h3>University</h3>
                <p>
                  Studying at Royal University of Phnom Penh in Major Computer
                  Science.
                </p>
              </div>
            </div>
          </div>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i>
                    <LuCalendarDays />
                  </i>{" "}
                  2020-2021
                </div>
                <h3>High School</h3>
                <p>Graduated grade 12 at Somrong Ponley High School.</p>
              </div>
            </div>
          </div>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i>
                    <LuCalendarDays />
                  </i>{" "}
                  2017-2018
                </div>
                <h3>Secondary</h3>
                <p>Graduated grade 9 at Somrong Ponley High School</p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-column" data-aos="fade-left" data-aos-duration="2000">
          <h3 className="title">Volunteer & Course</h3>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i>
                    <LuCalendarDays />
                  </i>
                  July-2023
                </div>
                <h3>Volunteer</h3>
                <p>
                I used to work as a volunteer, participating in parliamentary elections
                </p>
              </div>
            </div>
          </div>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i>
                    <LuCalendarDays />
                  </i>
                  2022
                </div>
                <h3>ETEC</h3>
                <p>
                  Studied (C/C++ OOP) and (HTML CSS Boostrap Javascript
                  JQuery)at Engineering I.T Professional Training Center (ETEC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

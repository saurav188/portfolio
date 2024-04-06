import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import experience from "../data/experience"
import "../styles/Expirience.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from "react-icons/md";


function Education() {
  return ( 
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper">
            <div className="education">
                <p className="title-education"><span className="python-class-name">Education:</span></p>
                <p className="text-detail last">
                    &emsp;<span className="span-highlight">School Level:</span><br />
                    &emsp;&emsp;From = <span style={{color:"#CA8F79"}}>"Occidental Public School"</span><br />
                    &emsp;&emsp;GPA &nbsp;= <span className="span-highlight">3.9</span>
                </p>
                <p className="text-detail last">
                    &emsp;<span className="span-highlight">High School Level(Science Major):</span><br />
                    &emsp;&emsp;From = <span style={{color:"#CA8F79"}}>"Kathmandu Model College"</span><br />
                    &emsp;&emsp;GPA &nbsp;= <span className="span-highlight">3.57</span>
                </p>
                <p className="text-detail last">
                    &emsp;<span className="span-highlight">Bsc. Computer Science and Information Technology(CSIT):</span><br />
                    &emsp;&emsp;From = <span style={{color:"#CA8F79"}}>"Texas International College"</span><br />
                    {/* &emsp;&emsp;GPA &nbsp;= <span className="span-highlight">3.9</span> */}
                </p>

            </div>
            <img 
              src={require('../images/degree.png')} alt="degree icon" 
              className="image-perfil"
            />
        </main>
      </section>
      <SideBar /> 
    </section>
    <Footer />
  </body>
  );
}

export default Education;
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


function Expirience() {
  return ( 
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper recommendation">
          <h1 className="title-recommendation">My Work Experience</h1>
          <VerticalTimeline>
            {experience.map( data => <VerticalElement data={data} />)}
        </VerticalTimeline>

        </main>
      </section>
      <SideBar />
    </section>
    <Footer />
  </body>
  );
}

const VerticalElement = ({ data }) => {
  return <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      // date={`${data.start.getYear()}-${(data.start.getMonth()+1)} to ${data.end ? data.end.getYear() + '-' + (data.end.getMonth()+1) : "present"}`}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<MdWorkHistory />}
      // icon={<WorkIcon />}
  >
    <span style={{color:"darkpink"}}>{"{"}</span><br />
      &emsp;<span style={{color:"rgb(33, 150, 243)"}}>position:</span> <span style={{color:"brown"}}>"{data.position}"</span><br />
      &emsp;<span style={{color:"rgb(33, 150, 243)"}}>company:</span> <span style={{color:"brown"}}>"{data.company}"</span><br />
      &emsp;<span style={{color:"rgb(33, 150, 243)"}}>description</span> <span style={{color:"brown"}}>"{data.description}"</span><br />
      &emsp;<span style={{color:"rgb(33, 150, 243)"}}>date:</span> <span style={{color:"brown"}}>"{`${data.start.getFullYear()}-${(data.start.getMonth()+1)} to ${data.end ? data.end.getFullYear() + '-' + (data.end.getMonth()+1) : "present"}`}"</span><br />
    <span style={{color:"darkpink"}}>{"}"}</span>
  </VerticalTimelineElement>
}

export default Expirience;
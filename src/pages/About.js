import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br/>
              <span className="span-tag body">{'<body>'}</span>
              <br/>
              <span className="span-tag content">{'<h1>'}</span>
                <h1 className="title-about">Hi,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content">{'<p>'}</span>
                <p className="text-about">
                  My name is <span className="span-highlight">Saurav Thakur</span>. <span className="span-highlight"></span>
                </p>
                <p className="text-about">
                  <span className="span-highlight">Python and  Javascript developer </span>
                  who has hands-on experience working in a software company as a Python System Engineer as well as a hands on experience working with 3 different international clients to build their system.

                </p>
                <p className="text-about last">
                  Ms Skills are: <span className="span-highlight">Html, CSS, JavaScript, Python, Django, Odoo, React, Git/Github.</span>
                </p>
              <span className="span-tag content">{'</p>'}</span>
              <br/>
              <span className="span-tag body">{'</body>'}</span>
              <br/>
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;
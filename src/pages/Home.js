import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import '../styles/Home.css';
import image from '../images/img-perfil.png';
import { FiDownload } from 'react-icons/fi';
import MenuMobile from "../components/MenuMobile";
import Typical from 'react-typical';

function Home() {
  return ( 
    <body>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p><span className="span">{'<'}</span>Hi, I am</p>
              <h1>Saurav Thakur <span className="span">{'/>'}</span> </h1>
              <Typical 
                steps={['Python and JS Developer', 1000, 'Machine Learning Enthusiast', 1000]}
                loop={Infinity}
                wrapper="h2"
              />
              <a 
                href="https://docs.google.com/document/d/1kiVJcKw1pGGFatbgC3pzNtKuOBbrUZDWxQHGYFf-isc/edit?usp=sharing" 
                target="_blank"
                className="btn-download" rel="noreferrer"
              >
                View CV
                {/* <FiDownload /> */}
              </a>
            </div>
            <img 
              src={image} alt="Saurav Thakur an OK human" 
              className="image-perfil"
            />
          </main>
        </section>
        {/* <SideBar /> */}
      </section>
      <Footer />
    </body>
  );
}

export default Home;
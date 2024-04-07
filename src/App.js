import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Recommendation from './pages/Recommendation';

import AppProvider from './context/AppProvider';
import Expirience from './pages/Expirience';
import Education from './pages/Education';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/recommendation" element={ <Recommendation /> } />
        <Route path="/expirience" element={ <Expirience /> } />
        <Route path="/education" element={ <Education /> } />
      </Routes>
    </AppProvider>
  );
}

export default App;

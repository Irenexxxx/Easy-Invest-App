
import './App.scss';
import Intro from './components/Intro/Intro';
import Intro4 from './components/Intro/Intro4/Intro4';
import CoursesPage from './components/CoursesPage/CoursesPage';
import Invest101Page from './components/Invest101Page/Invest101Page';
import Module1Page from './components/Module1Page/Module1Page';
import Simulation from './components/Simulation/Simulation';
// import {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="title">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/intro" element={<Intro />} />
            <Route path="/intro4" element={<Intro4 />} />
          <Route path="/courses" element={<CoursesPage />}/>
          <Route path="/invest101" element={<Invest101Page />} />
          <Route path="module1" element={<Module1Page />} />
          <Route path="/simulation" element={<Simulation />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//import logo from './logo.svg';

import './App.css';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./components/Home";
// import Schedule from "./components/Schedule";
import History from "./components/History";
import NavLinks from "./components/Navs";
import Header from "./components/Header";
import UpperFooter from "./components/UpperFooter";
import MiddleFooter from "./components/MiddleFooter";
import LowerFooter from "./components/LowerFooter";
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter>
        <NavLinks />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/schedule' element={<Schedule />} />
          <Route path="#history" element={<History />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <NavLinks />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="*" element={<History />} />
        </Routes>
      </BrowserRouter>
      <UpperFooter></UpperFooter>
      <MiddleFooter></MiddleFooter>
      <LowerFooter></LowerFooter>
      <MobileFooter></MobileFooter>
    </>
  );
}

export default App;
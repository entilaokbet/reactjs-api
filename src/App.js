//import logo from './logo.svg';

import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Schedule from "./components/Schedule";
import History from "./components/History";
import NavLinks from "./components/Navs";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavLinks />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/schedule' element={<Schedule />} />
          <Route exat path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

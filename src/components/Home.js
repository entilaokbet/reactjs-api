import React from "react";
import Header from "./Header";
import MainContent from "../components/MainContent";
import UpperFooter from "../components/UpperFooter";
import MiddleFooter from "../components/MiddleFooter";
import LowerFooter from "../components/LowerFooter";

const Home = () => {
    return (
        <>
            <MainContent></MainContent>
            <UpperFooter></UpperFooter>
            <MiddleFooter></MiddleFooter>
            <LowerFooter></LowerFooter>
        </>
    )
}

export default Home;
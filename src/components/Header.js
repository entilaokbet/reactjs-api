import React from "react";
import headerBanner from "../assets/img/banner.webp";
import Facebook from "./Facebook";
import Telegram from "./Telegram";

const Header = () => {
    return (
        <>
            <header className="container">
                <img src={headerBanner} className="App-logo" alt="OKBET" />
            </header>

            <div id="floating-icons">
                <ul>
                    <li>
                        <Telegram />
                    </li>
                    <li>
                        <Facebook />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
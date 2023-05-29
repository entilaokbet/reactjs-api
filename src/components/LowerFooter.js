import React from "react";
import logo from "../assets/img/logo.svg"

const LowerFooter = () => {
    return (
        <>
            <footer>
                <div className="container padding">
                    <div className="grid grid-align-center">
                        <div className="logo-container padding-left">
                            <a href="https://okbet.com" target="_blank">
                                <img
                                    src={logo}
                                    alt="okbet"
                                />
                            </a>
                        </div>

                        <div className="copyright-container text-center">
                            <p>OkBet Sportsbook Best Sportsbook Platform</p>
                            <p>© 2023 OKBET ALL RIGHTS RESERVED</p>
                        </div>

                        <div className="download-container text-right padding-right">
                            <button className="btn btn-primary">Download</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LowerFooter;
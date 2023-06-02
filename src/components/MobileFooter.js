import React from "react";
import logo from "../assets/img/logo.svg"

const MobileFooter = () => {
    return (
        <>
            <div className="mobile-footer">
                <div className="stickyfoot">
                    <div className="ccol">

                        <div className="ccol-3"><img src={logo} className="app-download-logos" alt="Download OKBET" /></div>

                        <div className="ccol-6">
                            <div>OKbet Sportsbook Best Sportsbook Platform</div>
                        </div>

                        <div className="ccol-3">
                            <a href="https://apps.apple.com/ph/app/okbet-casino/id1609173057" aria-label="Apps" target="_blank" className="btn btn-secondary">Download</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileFooter;
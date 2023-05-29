import React from "react";
import GamePrediction from "../assets/img/bg4.webp";
const MiddleFooter = () => {
    return (
        <>
            <section>
                <div className="container container-wrapper">
                    <img
                        className="banner"
                        src={GamePrediction}
                        alt="Game Prediction"
                    />
                    <div className="flex text-wrap">
                        <h2>How can we maintain our 95% match score accuracy? How did we do it?</h2>

                        <ul>
                            <li>We have been gathering data of global sports leagues for the past 15 years.</li>
                            <li>All of these data are digitized, constantly updated and been stored in data warehouse system.</li>
                            <li>We have a team of top analysts with at least 5 years of experience in big data.</li>
                            <li>That use powerful resource system combine with analytical algorithm to make predictions.</li>
                            <li>Our system continues to improve accuracy every day.</li>
                            <li>For each day's game predictions, we carefully review them before posting them on our website.</li>
                        </ul>
                        <p>However if you are looking for a system that provides absolute accuracy, then you may find another system, because we cannot be 100% accurate.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MiddleFooter;
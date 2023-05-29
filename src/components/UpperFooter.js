import React from "react";
import HowToPlay from "../assets/img/hw4.webp";

const UpperFooter = () => {
    return (
        <>
            <section>
                <div className="container container-wrapper">
                    <img
                        className="banner"
                        src={HowToPlay}
                        alt="How to play"
                    />

                    <div className="flex text-wrap">
                        <h2>How to get safe and high return of investment?</h2>
                        <p>Everyone wants to make fast money, but not everyone choose the right path!</p>
                        <p>Based on technical background of our leading calculation analyst, we are proud of ourselves when it comes to consistency of delivering score prediction with accuracy of as high as 95-99%, that help thousands of people enjoying affluent life.</p>
                        <p>What does it take for us to get rich?</p>
                        <ul>
                            <li>For you to get rich, you are required to be passionate enough in terms of calculation and sports.</li>
                            <li>Get our score prediction data for free.</li>
                            <li>Must be willing to use small capital to gain large profit.</li>
                            <li>Must have patience and most of all the urge to act now.</li>
                        </ul>
                        <p>If you are ready to get rich with us, take a look at our high accuracy game score prediction data above now.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperFooter;
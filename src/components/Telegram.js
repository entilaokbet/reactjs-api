import React from "react";
import tg from "../assets/img/tg.svg";
const sites = [
    'https://t.me/okbet_tips',
    'https://t.me/okbet_nba'
];

const Telegram = () => {
    var i = parseInt(Math.random() * sites.length);

    function handleSites(e) {
        e.preventDefault();
        window.location = sites[i];
    }
    return (
        <>
            <img
                src={tg}
                width="48px"
                height="48px"
                onClick={handleSites}
                alt="telegram"
            />
        </>
    )
}

export default Telegram;
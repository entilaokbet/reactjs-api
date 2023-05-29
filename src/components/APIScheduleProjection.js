import React from "react";

const APIScheduleProjection = () => {
    return fetch('https://www.okbet.com/api/front/match/odds/simple/list', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "endTime": "", "startTime": "", "leagueIdList": [], "matchIdList": [], "gameType": "BK", "matchType": "LGPC", "playCateMenuCode": "LGPC" })
    });
}

export default APIScheduleProjection;
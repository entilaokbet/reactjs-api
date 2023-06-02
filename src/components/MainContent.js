import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScheduleMsg from '../object/ScheduleMsg';

//import APIScheduleProjection from "./APIScheduleProjection";
//const baseURL = "https://www.okbet.com/api/front/match/odds/simple/list";

export default function MainContent() {

    const [mainLoop, setDataLoop] = useState([]);
    const [GetMatchInfo, setMatchOdds] = useState([]);
    const [GetLeagueOdds, setleagueOdds] = useState([]);
    const [GetleagueOddsIcon, setleagueOddsIcon] = useState([]);
    const [GetLists, CntleagueOdds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "endTime": "", "startTime": "", "leagueIdList": [], "matchIdList": [], "gameType": "BK", "matchType": "LGPC", "playCateMenuCode": "LGPC" })
        };
        fetch('https://www.okbet.com/api/front/match/odds/simple/list', requestOptions)
            .then(response => response.json())
            .then((usefulData) => {
                //console.log(usefulData);
                setMsg(usefulData.msg);
                setDataLoop(usefulData.t);
                //CntleagueOdds(usefulData.t.leagueOdds.length);
                CntleagueOdds(5);
                setleagueOdds(usefulData.t.leagueOdds[0].league);
                setleagueOddsIcon(usefulData.t.leagueOdds[0].league.categoryIcon);
                setMatchOdds(usefulData.t.leagueOdds[0].matchOdds[0].matchInfo);
                setLoading(false);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    const FirstSVG = <svg className="svg-wrap" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: GetleagueOddsIcon }}></svg>;

    /* StartTime */
    const fgetStartTimeDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(GetMatchInfo.startTime);
    const fgetStartTimeTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(GetMatchInfo.startTime);
    /* EndTime */

    if (msg == 'System maintenance') {
        return (
            <>
                <ScheduleMsg />
            </>
        )

    } else {
        return (
            <>
                <section id="prediction">
                    <div className="container" data-aos="fade-up">
                        <div id="game_location" className="">
                            {loading && <p>Loading...</p>}
                            {/* {!loading && <p>Fetched data</p>} */}
                            {error && <div className="container-title"><p>There are currently no basketball games {error}</p></div>}
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{FirstSVG} {GetLeagueOdds.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="ingame-wrap border-b" id="leagueID" key={GetLeagueOdds.id}>
                                            <div className="flex-custom padding">
                                                <div className="team-vs">
                                                    <div className="team1">
                                                        <div className="img-wrap"><img src={GetMatchInfo.homeIcon} alt={GetMatchInfo.homeName} /></div>
                                                        <div className="text-color team-name">{GetMatchInfo.homeName}</div>
                                                        <div style={{ height: 40 + 'px' }}></div>
                                                    </div>
                                                    <div className="vs">
                                                        <div className="vs-wrap space16">
                                                            <span className="timerGame">{fgetStartTimeDate} <br /> {fgetStartTimeTime}</span>
                                                        </div>
                                                        <div className="vs-wrap pad-8"><span className="bold">VS</span></div>
                                                        <div className="vs-wrap">
                                                            <div style={{ height: 40 + 'px' }}></div>
                                                            <a href="https://www.okbet.com/en/?inviteCode=sportsph" className="btn btn-primary padding-32" target="_blank">Betting</a>
                                                        </div>
                                                    </div>
                                                    <div className="team2">
                                                        <div className="img-wrap"><img src={GetMatchInfo.awayIcon} alt={GetMatchInfo.awayName} /></div>
                                                        <div className="text-color team-name">{GetMatchInfo.awayName}</div>
                                                        <div style={{ height: 40 + 'px' }}></div>
                                                    </div>
                                                </div>
                                                <div id="score-filter">
                                                    {(function (NumRand, j, len) {
                                                        while (++j <= len) {
                                                            const randOdds = Math.floor((Math.random() * 9) + 2);
                                                            const randEven = Math.floor((Math.random() * 9) + 1);
                                                            NumRand.push(<div className="show score-board" key={j}>{randOdds} - {randEven}</div>)
                                                        }
                                                        return NumRand;
                                                    })([], 0, 30)}
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {(function (Arr, i, len) {
                                    while (++i < len) {

                                        const miniFlags = mainLoop.leagueOdds[i].league.categoryIcon;
                                        const svgFlags = <svg className="svg-wrap" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: miniFlags }}></svg>;

                                        const gameName = mainLoop.leagueOdds[i].league.name;
                                        const CntMatch = mainLoop.leagueOdds[i].matchOdds.length;

                                        Arr.push(<Accordion.Item eventKey={i}>
                                            <Accordion.Header>{svgFlags} {gameName}</Accordion.Header>

                                            {(function (ArrBody, o, matchinfoLen) {
                                                while (++o < matchinfoLen) {

                                                    const gamePlay = mainLoop.leagueOdds[i].matchOdds[o].matchInfo;

                                                    /* StartTime */
                                                    const getStartTimeDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(gamePlay.startTime);
                                                    const getStartTimeTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(gamePlay.startTime);
                                                    /* EndTime */

                                                    ArrBody.push(<Accordion.Body>
                                                        <div className="ingame-wrap border-b" id="leagueID" key={gamePlay.id}>
                                                            <div className="flex-custom padding">
                                                                <div className="team-vs">
                                                                    <div className="team1">
                                                                        <div className="img-wrap"><img src={gamePlay.homeIcon} alt={gamePlay.homeName} /></div>
                                                                        <div className="text-color team-name">{gamePlay.homeName}</div>
                                                                        <div style={{ height: 40 + 'px' }}></div>
                                                                    </div>
                                                                    <div className="vs">
                                                                        <div className="vs-wrap space16">
                                                                            <span className="timerGame">{getStartTimeDate} <br /> {getStartTimeTime}</span>
                                                                        </div>
                                                                        <div className="vs-wrap pad-8"><span className="bold">VS</span></div>
                                                                        <div className="vs-wrap">
                                                                            <div style={{ height: 40 + 'px' }}></div>
                                                                            <a href="https://www.okbet.com/en/?inviteCode=sportsph" className="btn btn-primary padding-32" target="_blank">Betting</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="team2">
                                                                        <div className="img-wrap"><img src={gamePlay.awayIcon} alt={gamePlay.awayName} /></div>
                                                                        <div className="text-color team-name">{gamePlay.awayName}</div>
                                                                        <div style={{ height: 40 + 'px' }}></div>
                                                                    </div>
                                                                </div>
                                                                <div id="score-filter">
                                                                    {(function (NumRand, j, len) {
                                                                        while (++j <= len) {
                                                                            const randOdds = Math.floor((Math.random() * 9) + 2);
                                                                            const randEven = Math.floor((Math.random() * 9) + 1);
                                                                            NumRand.push(<div className="show score-board" key={j}>{randOdds} - {randEven}</div>)
                                                                        }
                                                                        return NumRand;
                                                                    })([], 0, 30)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>)
                                                }
                                                return ArrBody;
                                            })([], -1, CntMatch)}

                                        </Accordion.Item>)
                                    }
                                    return Arr;
                                })([], 0, GetLists)}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}


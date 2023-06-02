import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstRandom from '../object/FirstRandom';
import SecondRandom from '../object/SecondRandom';
import ThirdRandom from '../object/ThirdRandom';
import FourthRandom from '../object/FourthRandom';
import FifthRandom from '../object/FifthRandom';
import SixthRandom from '../object/SixthRandom';
import ScheduleMsg from '../object/ScheduleMsg';


export default function History() {

    const [parentLoop, setDataLoop] = useState([]);
    const [CountRows, CntRows] = useState([]);
    const [CountList, CntList] = useState([]);
    const [GetLeague, setLeague] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState('');

    const startTimeDate = new Date(new Date().setDate(new Date().getDate() - 2));
    const endTimeDate = new Date(new Date().setDate(new Date().getDate() - 2));

    const startTime = startTimeDate.setDate(startTimeDate.getDate() - 1);
    const endTime = endTimeDate.setDate(endTimeDate.getDate() + 0);

    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "startTime": startTime, "endTime": endTime, "gameType": "BK", "leagueId": null, "matchId": null })
        };
        fetch('https://www.okbet.com/api/front/match/result/list', requestOptions)
            .then(response => response.json())
            .then((usefulData) => {
                console.log(usefulData.rows);
                setMsg(usefulData.msg);
                setDataLoop(usefulData.rows);
                setLeague(usefulData.rows[0].league);

                CntRows(5);
                //CntList(5);
                //CntRows(usefulData.rows.length);
                CntList(usefulData.rows[0].list.length);
                setLoading(false);
                //console.log('countrows: ' + usefulData.rows.length);
                //console.log('cnt: ' + usefulData.rows[0].list.length);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    const HeaderGameIcons = <svg className="svg-wrap" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: GetLeague.categoryIcon }}></svg>;
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
                    <div className="container">
                        <div id="game_location">
                            {loading && <p>Loading...</p>}
                            {/* {!loading && <p>Fetched data</p>} */}
                            {error && <div className="container-title"><p>There are currently no basketball games {error}</p></div>}
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{HeaderGameIcons} {GetLeague.name}</Accordion.Header>
                                    {(function (FirstKey, y, ListsGame) {
                                        while (++y < ListsGame) {

                                            const gameinfo = parentLoop[0].list[y].matchInfo;
                                            const Score = parentLoop[0].list[y].matchStatusList[4];

                                            /* StartTime */
                                            const fgetStartTimeDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(gameinfo.startTime);
                                            const fgetStartTimeTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(gameinfo.startTime);
                                            /* EndTime */
                                            const betHomeScore = Score.homeScore % 10;
                                            const betAwayScore = Score.awayScore % 10;


                                            FirstKey.push(<Accordion.Body>
                                                <div className="ingame-wrap border-b" id="leagueID">
                                                    <div className="flex-custom padding">
                                                        <div className="team-vs">
                                                            <div className="team1">
                                                                <div className="text-color team-name">{gameinfo.homeName}</div>
                                                                <div style={{ height: 40 + 'px' }}></div>
                                                            </div>
                                                            <div className="vs">
                                                                <div className="vs-wrap space16">
                                                                    <span className="timerGame">{fgetStartTimeDate} <br /> {fgetStartTimeTime}</span>
                                                                </div>
                                                                <div className="vs-wrap pad-8"><span className="bold">VS</span></div>
                                                                <div className="vs-wrap">
                                                                    <span className="team-name bold score-font">{Score.homeScore} - {Score.awayScore}</span>
                                                                    <input type="hidden" id="actualScore" value={betHomeScore + "" + "" + betAwayScore} />
                                                                    <a href="https://www.okbet.com/en/?inviteCode=sportsph" className="btn btn-primary padding-32" target="_blank">Betting</a>
                                                                </div>
                                                            </div>
                                                            <div className="team2">
                                                                <div className="text-color team-name">{gameinfo.awayName}</div>
                                                                <div style={{ height: 40 + 'px' }}></div>
                                                            </div>
                                                        </div>
                                                        {(function () {
                                                            if ('0' == y) {
                                                                return <FirstRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                            } else if ('1' == y) {
                                                                return <SecondRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                            } else if ('2' == y) {
                                                                return <ThirdRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                            } else if ('3' == y) {
                                                                return <FourthRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                            } else if ('4' == y) {
                                                                return <FifthRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                            } else if ('5' == y) {
                                                                return <SixthRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                            }
                                                        })()}

                                                    </div>
                                                </div>
                                            </Accordion.Body>)
                                        }
                                        return FirstKey;
                                    })([], -1, CountList)}
                                </Accordion.Item>

                                {(function (AccItemsLocation, ol, CountRows) {
                                    while (++ol < CountRows) {

                                        const HeaderGameName = parentLoop[ol].league;
                                        const HeaderGameIcons = <svg className="svg-wrap" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: HeaderGameName.categoryIcon }}></svg>;

                                        const CntMatch = parentLoop[ol].list.length;

                                        AccItemsLocation.push(<Accordion.Item eventKey={ol}>
                                            <Accordion.Header>{HeaderGameIcons} {HeaderGameName.name}</Accordion.Header>
                                            {(function (DisplayGameLists, k, CntMatch) {
                                                while (++k < CntMatch) {

                                                    const gameinfo = parentLoop[ol].list[k].matchInfo;

                                                    const Score = parentLoop[ol].list[k].matchStatusList[0];

                                                    /* StartTime */
                                                    const getStartTimeDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(gameinfo.startTime);
                                                    const getStartTimeTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(gameinfo.startTime);
                                                    /* EndTime */

                                                    const betHomeScore = Score.homeScore % 10;
                                                    const betAwayScore = Score.awayScore % 10;

                                                    DisplayGameLists.push(<Accordion.Body eventKey={ol}>
                                                        <div className="ingame-wrap border-b" id="leagueID" key={gameinfo.id}>
                                                            <div className="flex-custom padding">
                                                                <div className="team-vs">
                                                                    <div className="team1">

                                                                        <div className="text-color team-name">{gameinfo.homeName}</div>
                                                                        <div style={{ height: 40 + 'px' }}></div>
                                                                    </div>
                                                                    <div className="vs">
                                                                        <div className="vs-wrap space16">
                                                                            <span className="timerGame">{getStartTimeDate} <br /> {getStartTimeTime}</span>
                                                                        </div>
                                                                        <div className="vs-wrap pad-8"><span className="bold">VS</span></div>
                                                                        <div className="vs-wrap">
                                                                            <span className="team-name bold score-font">{Score.homeScore} - {Score.awayScore}</span>
                                                                            <input type="hidden" id="actualScore" value={betHomeScore + "" + "" + betAwayScore} />

                                                                            <a href="https://www.okbet.com/en/?inviteCode=sportsph" className="btn btn-primary padding-32" target="_blank">Betting</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="team2">
                                                                        <div className="text-color team-name">{gameinfo.awayName}</div>
                                                                        <div style={{ height: 40 + 'px' }}></div>
                                                                    </div>
                                                                </div>
                                                                {(function () {
                                                                    if ('0' == k) {
                                                                        return <FirstRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                                    } else if ('1' == k) {
                                                                        return <SecondRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                                    } else if ('2' == k) {
                                                                        return <ThirdRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                                    } else if ('3' == k) {
                                                                        return <FourthRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                                    } else if ('4' == k) {
                                                                        return <FifthRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                                    } else if ('5' == k) {
                                                                        return <SixthRandom postScore={betHomeScore + "" + "" + betAwayScore} load={loading} gameID={gameinfo.id} key={gameinfo.id} />
                                                                    } else {
                                                                        <></>
                                                                    }
                                                                })()}
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>)
                                                }
                                                return DisplayGameLists;
                                            })([], -1, CntMatch)}
                                        </Accordion.Item>)
                                    }
                                    return AccItemsLocation;
                                })([], 0, CountRows)}
                            </Accordion>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
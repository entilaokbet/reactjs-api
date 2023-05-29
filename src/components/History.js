import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function History() {

    const [parentLoop, setDataLoop] = useState([]);
    const [CountList, CntList] = useState([]);
    const [GetLeague, setLeague] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/cors')
            .then(response => response.json())
            .then((usefulData) => {
                console.log(usefulData);
                setDataLoop(usefulData.rows);
                setLeague(usefulData.rows[0].league);
                CntList(usefulData.rows[0].list.length)
                setLoading(false);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    const GetLists = parentLoop.length;
    const HeaderGameIcons = <svg className="svg-wrap" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: GetLeague.categoryIcon }}></svg>;

    console.log('name : ' + GetLeague.name);

    return (
        <>
            <section id="prediction">
                <div className="container">
                    <div id="game_location">
                        {loading && <p>Loading...</p>}
                        {/* {!loading && <p>Fetched data</p>} */}
                        {error && <p>Error {error}</p>}
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{HeaderGameIcons} {GetLeague.name}</Accordion.Header>
                                {(function (FirstKey, y, ListsGame) {
                                    while (++y < ListsGame) {

                                        const gameinfo = parentLoop[0].list[0].matchInfo;

                                        /* StartTime */
                                        const fgetStartTimeDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(gameinfo.startTime);
                                        const fgetStartTimeTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(gameinfo.startTime);
                                        /* EndTime */

                                        FirstKey.push(<Accordion.Body eventKey="1">
                                            <div className="ingame-wrap border-b" id="leagueID">
                                                <div className="flex-custom padding">
                                                    <div className="team-vs">
                                                        <div className="team1">
                                                            <div className="img-wrap"></div>
                                                            <div className="text-color team-name">{gameinfo.homeName}</div>
                                                            <div style={{ height: 40 + 'px' }}></div>
                                                        </div>
                                                        <div className="vs">
                                                            <div className="vs-wrap space16">
                                                                <span className="timerGame">{fgetStartTimeDate} <br /> {fgetStartTimeTime}</span>
                                                            </div>
                                                            <div className="vs-wrap pad-8"><span className="bold">VS</span></div>
                                                            <div className="vs-wrap">
                                                                <div style={{ height: 40 + 'px' }}></div>
                                                                <a href="https://okbet.com" className="btn btn-primary padding-32" target="_blank">Betting</a>
                                                            </div>
                                                        </div>
                                                        <div className="team2">
                                                            <div className="img-wrap"></div>
                                                            <div className="text-color team-name">{gameinfo.awayName}</div>
                                                            <div style={{ height: 40 + 'px' }}></div>
                                                        </div>
                                                    </div>
                                                    <div id="score-filter" key={gameinfo.id}>
                                                        {(function (NumRand, j, len) {
                                                            while (++j <= len) {
                                                                const randOdds = Math.floor((Math.random() * 9) + 2);
                                                                const randEven = Math.floor((Math.random() * 9) + 1);
                                                                NumRand.push(<div className="show score-board" key={j}>{randOdds} - {randEven}</div>)
                                                            }
                                                            return NumRand;
                                                        })([], 0, 30)}
                                                    </div>
                                                    <div id={'score-message_' + gameinfo.id} class="errorMsg">Error</div>
                                                </div>
                                            </div>
                                        </Accordion.Body>)
                                    }
                                    return FirstKey;
                                })([], 0, CountList)}
                            </Accordion.Item>

                            {(function (AccItemsLocation, x, lenGame) {
                                while (++x < lenGame) {

                                    console.log('test : ' + AccItemsLocation);
                                    const GetMatches = parentLoop[x].list.length;
                                    const HeaderGameName = parentLoop[x].league;
                                    const HeaderGameIcons = <svg className="svg-wrap" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: HeaderGameName.categoryIcon }}></svg>;


                                    AccItemsLocation.push(<Accordion.Item eventKey={x}>
                                        <Accordion.Header eventKey={x}>{HeaderGameIcons} {HeaderGameName.name}</Accordion.Header>
                                        {(function (DisplayGameLists, y, ListsGame) {
                                            while (++y < ListsGame) {

                                                const gameinfo = parentLoop[x].list[y].matchInfo;

                                                /* StartTime */
                                                const getStartTimeDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(gameinfo.startTime);
                                                const getStartTimeTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(gameinfo.startTime);
                                                /* EndTime */

                                                DisplayGameLists.push(<Accordion.Body eventKey={x}>
                                                    <div className="ingame-wrap border-b" id="leagueID" key={gameinfo.id}>
                                                        <div className="flex-custom padding">
                                                            <div className="team-vs">
                                                                <div className="team1">
                                                                    <div className="img-wrap"></div>
                                                                    <div className="text-color team-name">{gameinfo.homeName}</div>
                                                                    <div style={{ height: 40 + 'px' }}></div>
                                                                </div>
                                                                <div className="vs">
                                                                    <div className="vs-wrap space16">
                                                                        <span className="timerGame">{getStartTimeDate} <br /> {getStartTimeTime}</span>
                                                                    </div>
                                                                    <div className="vs-wrap pad-8"><span className="bold">VS</span></div>
                                                                    <div className="vs-wrap">
                                                                        <div style={{ height: 40 + 'px' }}></div>
                                                                        <a href="https://okbet.com" className="btn btn-primary padding-32" target="_blank">Betting</a>
                                                                    </div>
                                                                </div>
                                                                <div className="team2">
                                                                    <div className="img-wrap"></div>
                                                                    <div className="text-color team-name">{gameinfo.awayName}</div>
                                                                    <div style={{ height: 40 + 'px' }}></div>
                                                                </div>
                                                            </div>
                                                            <div id="score-filter" key={gameinfo.id}>
                                                                {(function (NumRand, j, len) {
                                                                    while (++j <= len) {
                                                                        const randOdds = Math.floor((Math.random() * 9) + 2);
                                                                        const randEven = Math.floor((Math.random() * 9) + 1);
                                                                        NumRand.push(<div className="show score-board" key={j}>{randOdds} - {randEven}</div>)
                                                                    }
                                                                    return NumRand;
                                                                })([], 0, 30)}
                                                            </div>
                                                            <div id={'score-message_' + gameinfo.id} class="errorMsg">Error</div>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>)
                                            }
                                            return DisplayGameLists;
                                        })([], 0, GetMatches)}
                                    </Accordion.Item>)
                                }
                                return AccItemsLocation;
                            })([], 1, GetLists)}
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}


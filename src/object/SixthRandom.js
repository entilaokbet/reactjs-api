import React, { useRef, useEffect, useState } from 'react';

const inref = null;
const SixthRandom = (props) => {
    const ref = useRef(null);
    //const [getId, actScore] = useState('');
    const getId = props.postScore;
    useEffect(() => {
        //actScore(document.getElementById('actualScore').value);
        //console.log(ref.current); //perfect!
    }, []);
    return (
        <>
            <div id="score-filter" key={props.gameID}>
                <div className={'score-board' + (getId == '63' ? ' correct-score' : '')} ref={(getId == '63' ? ref : inref)}><div className="randBorder">6 - 3</div></div >
                <div className={'score-board' + (getId == '47' ? ' correct-score' : '')} ref={(getId == '47' ? ref : inref)}><div className="randBorder">4 - 7</div></div>
                <div className={'score-board' + (getId == '46' ? ' correct-score' : '')} ref={(getId == '46' ? ref : inref)}><div className="randBorder">4 - 6</div></div>
                <div className={'score-board' + (getId == '56' ? ' correct-score' : '')} ref={(getId == '56' ? ref : inref)}><div className="randBorder">5 - 6</div></div>
                <div className={'score-board' + (getId == '73' ? ' correct-score' : '')} ref={(getId == '73' ? ref : inref)}><div className="randBorder">7 - 3</div></div>
                <div className={'score-board' + (getId == '47' ? ' correct-score' : '')} ref={(getId == '47' ? ref : inref)}><div className="randBorder">4 - 7</div></div>
                <div className={'score-board' + (getId == '76' ? ' correct-score' : '')} ref={(getId == '76' ? ref : inref)}><div className="randBorder">7 - 6</div></div>
                <div className={'score-board' + (getId == '53' ? ' correct-score' : '')} ref={(getId == '53' ? ref : inref)}><div className="randBorder">5 - 3</div></div>
                <div className={'score-board' + (getId == '74' ? ' correct-score' : '')} ref={(getId == '74' ? ref : inref)}><div className="randBorder">7 - 4</div></div>
                <div className={'score-board' + (getId == '65' ? ' correct-score' : '')} ref={(getId == '65' ? ref : inref)}><div className="randBorder">6 - 5</div></div>
                <div className={'score-board' + (getId == '57' ? ' correct-score' : '')} ref={(getId == '57' ? ref : inref)}><div className="randBorder">5 - 7</div></div>
                <div className={'score-board' + (getId == '53' ? ' correct-score' : '')} ref={(getId == '53' ? ref : inref)}><div className="randBorder">5 - 3</div></div>
                <div className={'score-board' + (getId == '65' ? ' correct-score' : '')} ref={(getId == '65' ? ref : inref)}><div className="randBorder">6 - 5</div></div>
                <div className={'score-board' + (getId == '05' ? ' correct-score' : '')} ref={(getId == '05' ? ref : inref)}><div className="randBorder">0 - 5</div></div>
                <div className={'score-board' + (getId == '66' ? ' correct-score' : '')} ref={(getId == '66' ? ref : inref)}><div className="randBorder">6 - 6</div></div>
                <div className={'score-board' + (getId == '53' ? ' correct-score' : '')} ref={(getId == '53' ? ref : inref)}><div className="randBorder">5 - 3</div></div>
                <div className={'score-board' + (getId == '67' ? ' correct-score' : '')} ref={(getId == '67' ? ref : inref)}><div className="randBorder">6 - 7</div></div>
                <div className={'score-board' + (getId == '44' ? ' correct-score' : '')} ref={(getId == '44' ? ref : inref)}><div className="randBorder">4 - 4</div></div>
                <div className={'score-board' + (getId == '73' ? ' correct-score' : '')} ref={(getId == '73' ? ref : inref)}><div className="randBorder">7 - 3</div></div>
                <div className={'score-board' + (getId == '56' ? ' correct-score' : '')} ref={(getId == '56' ? ref : inref)}><div className="randBorder">5 - 6</div></div>
                <div className={'score-board' + (getId == '61' ? ' correct-score' : '')} ref={(getId == '61' ? ref : inref)}><div className="randBorder">6 - 1</div></div>
                <div className={'score-board' + (getId == '40' ? ' correct-score' : '')} ref={(getId == '40' ? ref : inref)}><div className="randBorder">4 - 0</div></div>
                <div className={'score-board' + (getId == '63' ? ' correct-score' : '')} ref={(getId == '63' ? ref : inref)}><div className="randBorder">6 - 3</div></div>
                <div className={'score-board' + (getId == '44' ? ' correct-score' : '')} ref={(getId == '44' ? ref : inref)}><div className="randBorder">4 - 4</div></div>
                <div className={'score-board' + (getId == '45' ? ' correct-score' : '')} ref={(getId == '45' ? ref : inref)}><div className="randBorder">4 - 5</div></div>
                <div className={'score-board' + (getId == '74' ? ' correct-score' : '')} ref={(getId == '74' ? ref : inref)}><div className="randBorder">7 - 4</div></div>
                <div className={'score-board' + (getId == '54' ? ' correct-score' : '')} ref={(getId == '54' ? ref : inref)}><div className="randBorder">5 - 4</div></div>
                <div className={'score-board' + (getId == '63' ? ' correct-score' : '')} ref={(getId == '63' ? ref : inref)}><div className="randBorder">6 - 3</div></div>
                <div className={'score-board' + (getId == '85' ? ' correct-score' : '')} ref={(getId == '85' ? ref : inref)}><div className="randBorder">8 - 5</div></div>
                <div className={'score-board' + (getId == '75' ? ' correct-score' : '')} ref={(getId == '75' ? ref : inref)}><div className="randBorder">7 - 5</div></div>
            </div >
            <div className={(ref.current != null ? 'passMsg' : 'errorMsg')}>
                {(ref.current != null ? 'Correct' : 'Error')}
            </div>
        </>
    )
}

export default SixthRandom;
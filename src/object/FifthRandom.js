import React, { useRef, useEffect, useState } from 'react';

const inref = null;
const FifthRandom = (props) => {
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
                <div className={'score-board' + (getId == '66' ? ' correct-score' : '')} ref={(getId == '66' ? ref : inref)}><div className="randBorder">6 - 6</div></div >
                <div className={'score-board' + (getId == '57' ? ' correct-score' : '')} ref={(getId == '57' ? ref : inref)}><div className="randBorder">5 - 7</div></div>
                <div className={'score-board' + (getId == '49' ? ' correct-score' : '')} ref={(getId == '49' ? ref : inref)}><div className="randBorder">4 - 9</div></div>
                <div className={'score-board' + (getId == '59' ? ' correct-score' : '')} ref={(getId == '59' ? ref : inref)}><div className="randBorder">5 - 9</div></div>
                <div className={'score-board' + (getId == '87' ? ' correct-score' : '')} ref={(getId == '87' ? ref : inref)}><div className="randBorder">8 - 7</div></div>
                <div className={'score-board' + (getId == '46' ? ' correct-score' : '')} ref={(getId == '46' ? ref : inref)}><div className="randBorder">4 - 6</div></div>
                <div className={'score-board' + (getId == '68' ? ' correct-score' : '')} ref={(getId == '68' ? ref : inref)}><div className="randBorder">6 - 8</div></div>
                <div className={'score-board' + (getId == '87' ? ' correct-score' : '')} ref={(getId == '87' ? ref : inref)}><div className="randBorder">8 - 7</div></div>
                <div className={'score-board' + (getId == '61' ? ' correct-score' : '')} ref={(getId == '61' ? ref : inref)}><div className="randBorder">6 - 1</div></div>
                <div className={'score-board' + (getId == '60' ? ' correct-score' : '')} ref={(getId == '60' ? ref : inref)}><div className="randBorder">6 - 0</div></div>
                <div className={'score-board' + (getId == '79' ? ' correct-score' : '')} ref={(getId == '79' ? ref : inref)}><div className="randBorder">7 - 9</div></div>
                <div className={'score-board' + (getId == '59' ? ' correct-score' : '')} ref={(getId == '59' ? ref : inref)}><div className="randBorder">5 - 9</div></div>
                <div className={'score-board' + (getId == '48' ? ' correct-score' : '')} ref={(getId == '48' ? ref : inref)}><div className="randBorder">4 - 8</div></div>
                <div className={'score-board' + (getId == '77' ? ' correct-score' : '')} ref={(getId == '77' ? ref : inref)}><div className="randBorder">7 - 7</div></div>
                <div className={'score-board' + (getId == '64' ? ' correct-score' : '')} ref={(getId == '64' ? ref : inref)}><div className="randBorder">6 - 4</div></div>
                <div className={'score-board' + (getId == '76' ? ' correct-score' : '')} ref={(getId == '76' ? ref : inref)}><div className="randBorder">7 - 6</div></div>
                <div className={'score-board' + (getId == '86' ? ' correct-score' : '')} ref={(getId == '86' ? ref : inref)}><div className="randBorder">8 - 6</div></div>
                <div className={'score-board' + (getId == '67' ? ' correct-score' : '')} ref={(getId == '67' ? ref : inref)}><div className="randBorder">6 - 7</div></div>
                <div className={'score-board' + (getId == '46' ? ' correct-score' : '')} ref={(getId == '46' ? ref : inref)}><div className="randBorder">4 - 6</div></div>
                <div className={'score-board' + (getId == '59' ? ' correct-score' : '')} ref={(getId == '59' ? ref : inref)}><div className="randBorder">5 - 9</div></div>
                <div className={'score-board' + (getId == '76' ? ' correct-score' : '')} ref={(getId == '76' ? ref : inref)}><div className="randBorder">7 - 6</div></div>
                <div className={'score-board' + (getId == '56' ? ' correct-score' : '')} ref={(getId == '56' ? ref : inref)}><div className="randBorder">5 - 6</div></div>
                <div className={'score-board' + (getId == '69' ? ' correct-score' : '')} ref={(getId == '69' ? ref : inref)}><div className="randBorder">6 - 9</div></div>
                <div className={'score-board' + (getId == '60' ? ' correct-score' : '')} ref={(getId == '60' ? ref : inref)}><div className="randBorder">6 - 0</div></div>
                <div className={'score-board' + (getId == '79' ? ' correct-score' : '')} ref={(getId == '79' ? ref : inref)}><div className="randBorder">7 - 9</div></div>
                <div className={'score-board' + (getId == '67' ? ' correct-score' : '')} ref={(getId == '67' ? ref : inref)}><div className="randBorder">6 - 7</div></div>
                <div className={'score-board' + (getId == '56' ? ' correct-score' : '')} ref={(getId == '56' ? ref : inref)}><div className="randBorder">5 - 6</div></div>
                <div className={'score-board' + (getId == '40' ? ' correct-score' : '')} ref={(getId == '40' ? ref : inref)}><div className="randBorder">4 - 0</div></div>
                <div className={'score-board' + (getId == '89' ? ' correct-score' : '')} ref={(getId == '89' ? ref : inref)}><div className="randBorder">8 - 9</div></div>
                <div className={'score-board' + (getId == '78' ? ' correct-score' : '')} ref={(getId == '78' ? ref : inref)}><div className="randBorder">7 - 8</div></div>
            </div >
            <div className={(ref.current != null ? 'passMsg' : 'errorMsg')}>
                {(ref.current != null ? 'Correct' : 'Error')}
            </div>
        </>
    )
}

export default FifthRandom;
import React, { useRef, useEffect, useState } from 'react';

const inref = null;
const ThirdRandom = (props) => {
    const ref = useRef(null);
    //const [getId, actScore] = useState([]);
    const getId = props.postScore;
    //console.log('post score: ' + getId);

    useEffect(() => {
        //actScore(document.getElementById('actualScore').value);
        //console.log('third: ' + ref.current); //perfect!
    }, []);

    return (
        <>
            <div id="score-filter" key={props.gameID}>
                <div className={'score-board' + (getId == '88' ? ' correct-score' : '')} ref={(getId == '88' ? ref : inref)}><div className="randBorder">8 - 8</div></div>
                <div className={'score-board' + (getId == '18' ? ' correct-score' : '')} ref={(getId == '18' ? ref : inref)}><div className="randBorder">1 - 8</div></div>
                <div className={'score-board' + (getId == '34' ? ' correct-score' : '')} ref={(getId == '34' ? ref : inref)}><div className="randBorder">3 - 4</div></div>
                <div className={'score-board' + (getId == '56' ? ' correct-score' : '')} ref={(getId == '56' ? ref : inref)}><div className="randBorder">5 - 6</div></div>
                <div className={'score-board' + (getId == '27' ? ' correct-score' : '')} ref={(getId == '27' ? ref : inref)}><div className="randBorder">2 - 7</div></div>
                <div className={'score-board' + (getId == '23' ? ' correct-score' : '')} ref={(getId == '23' ? ref : inref)}><div className="randBorder">2 - 3</div></div>
                <div className={'score-board' + (getId == '97' ? ' correct-score' : '')} ref={(getId == '97' ? ref : inref)}><div className="randBorder">9 - 7</div></div>
                <div className={'score-board' + (getId == '66' ? ' correct-score' : '')} ref={(getId == '66' ? ref : inref)}><div className="randBorder">6 - 6</div></div>
                <div className={'score-board' + (getId == '81' ? ' correct-score' : '')} ref={(getId == '81' ? ref : inref)}><div className="randBorder">8 - 1</div></div>
                <div className={'score-board' + (getId == '52' ? ' correct-score' : '')} ref={(getId == '52' ? ref : inref)}><div className="randBorder">5 - 2</div></div>
                <div className={'score-board' + (getId == '59' ? ' correct-score' : '')} ref={(getId == '59' ? ref : inref)}><div className="randBorder">5 - 9</div></div>
                <div className={'score-board' + (getId == '72' ? ' correct-score' : '')} ref={(getId == '72' ? ref : inref)}><div className="randBorder">7 - 2</div></div>
                <div className={'score-board' + (getId == '73' ? ' correct-score' : '')} ref={(getId == '73' ? ref : inref)}><div className="randBorder">7 - 3</div></div>
                <div className={'score-board' + (getId == '61' ? ' correct-score' : '')} ref={(getId == '61' ? ref : inref)}><div className="randBorder">6 - 1</div></div>
                <div className={'score-board' + (getId == '47' ? ' correct-score' : '')} ref={(getId == '47' ? ref : inref)}><div className="randBorder">4 - 7</div></div>
                <div className={'score-board' + (getId == '11' ? ' correct-score' : '')} ref={(getId == '11' ? ref : inref)}><div className="randBorder">1 - 1</div></div>
                <div className={'score-board' + (getId == '35' ? ' correct-score' : '')} ref={(getId == '35' ? ref : inref)}><div className="randBorder">3 - 5</div></div>
                <div className={'score-board' + (getId == '36' ? ' correct-score' : '')} ref={(getId == '36' ? ref : inref)}><div className="randBorder">3 - 6</div></div>
                <div className={'score-board' + (getId == '01' ? ' correct-score' : '')} ref={(getId == '01' ? ref : inref)}><div className="randBorder">0 - 1</div></div>
                <div className={'score-board' + (getId == '62' ? ' correct-score' : '')} ref={(getId == '62' ? ref : inref)}><div className="randBorder">6 - 2</div></div>
                <div className={'score-board' + (getId == '81' ? ' correct-score' : '')} ref={(getId == '81' ? ref : inref)}><div className="randBorder">8 - 1</div></div>
                <div className={'score-board' + (getId == '68' ? ' correct-score' : '')} ref={(getId == '68' ? ref : inref)}><div className="randBorder">6 - 8</div></div>
                <div className={'score-board' + (getId == '46' ? ' correct-score' : '')} ref={(getId == '46' ? ref : inref)}><div className="randBorder">4 - 6</div></div>
                <div className={'score-board' + (getId == '23' ? ' correct-score' : '')} ref={(getId == '23' ? ref : inref)}><div className="randBorder">2 - 3</div></div>
                <div className={'score-board' + (getId == '62' ? ' correct-score' : '')} ref={(getId == '62' ? ref : inref)}><div className="randBorder">6 - 2</div></div>
                <div className={'score-board' + (getId == '98' ? ' correct-score' : '')} ref={(getId == '98' ? ref : inref)}><div className="randBorder">9 - 8</div></div>
                <div className={'score-board' + (getId == '26' ? ' correct-score' : '')} ref={(getId == '26' ? ref : inref)}><div className="randBorder">2 - 6</div></div>
                <div className={'score-board' + (getId == '45' ? ' correct-score' : '')} ref={(getId == '45' ? ref : inref)}><div className="randBorder">4 - 5</div></div>
                <div className={'score-board' + (getId == '06' ? ' correct-score' : '')} ref={(getId == '06' ? ref : inref)}><div className="randBorder">0 - 6</div></div>
                <div className={'score-board' + (getId == '52' ? ' correct-score' : '')} ref={(getId == '52' ? ref : inref)}><div className="randBorder">5 - 2</div></div>
            </div >
            {/* <div className={(ref.current != null ? 'passMsg' : 'errorMsg')}>
                {(ref.current != null ? 'Correct' : 'Error')}
            </div> */}
            <div className='passMsg'>Correct</div>
        </>
    )
}

export default ThirdRandom;
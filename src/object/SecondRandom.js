import React, { useRef, useEffect, useState } from 'react';

const inref = null;
const SecondRandom = (props) => {
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
                <div className={'score-board' + (getId == '83' ? ' correct-score' : '')} ref={(getId == '83' ? ref : inref)}><div className="randBorder">8 - 3</div></div>
                <div className={'score-board' + (getId == '70' ? ' correct-score' : '')} ref={(getId == '70' ? ref : inref)}><div className="randBorder">7 - 0</div></div>
                <div className={'score-board' + (getId == '41' ? ' correct-score' : '')} ref={(getId == '41' ? ref : inref)}><div className="randBorder">4 - 2</div></div>
                <div className={'score-board' + (getId == '43' ? ' correct-score' : '')} ref={(getId == '43' ? ref : inref)}><div className="randBorder">4 - 3</div></div>
                <div className={'score-board' + (getId == '83' ? ' correct-score' : '')} ref={(getId == '83' ? ref : inref)}><div className="randBorder">8 - 3</div></div>
                <div className={'score-board' + (getId == '82' ? ' correct-score' : '')} ref={(getId == '82' ? ref : inref)}><div className="randBorder">8 - 2</div></div>
                <div className={'score-board' + (getId == '64' ? ' correct-score' : '')} ref={(getId == '64' ? ref : inref)}><div className="randBorder">6 - 4</div></div>
                <div className={'score-board' + (getId == '05' ? ' correct-score' : '')} ref={(getId == '05' ? ref : inref)}><div className="randBorder">0 - 5</div></div>
                <div className={'score-board' + (getId == '10' ? ' correct-score' : '')} ref={(getId == '10' ? ref : inref)}><div className="randBorder">1 - 0</div></div>
                <div className={'score-board' + (getId == '71' ? ' correct-score' : '')} ref={(getId == '71' ? ref : inref)}><div className="randBorder">7 - 1</div></div>
                <div className={'score-board' + (getId == '61' ? ' correct-score' : '')} ref={(getId == '61' ? ref : inref)}><div className="randBorder">6 - 1</div></div>
                <div className={'score-board' + (getId == '63' ? ' correct-score' : '')} ref={(getId == '63' ? ref : inref)}><div className="randBorder">6 - 3</div></div>
                <div className={'score-board' + (getId == '73' ? ' correct-score' : '')} ref={(getId == '73' ? ref : inref)}><div className="randBorder">7 - 3</div></div>
                <div className={'score-board' + (getId == '54' ? ' correct-score' : '')} ref={(getId == '54' ? ref : inref)}><div className="randBorder">5 - 4</div></div>
                <div className={'score-board' + (getId == '51' ? ' correct-score' : '')} ref={(getId == '51' ? ref : inref)}><div className="randBorder">5 - 1</div></div>
                <div className={'score-board' + (getId == '80' ? ' correct-score' : '')} ref={(getId == '80' ? ref : inref)}><div className="randBorder">8 - 0</div></div>
                <div className={'score-board' + (getId == '82' ? ' correct-score' : '')} ref={(getId == '82' ? ref : inref)}><div className="randBorder">8 - 2</div></div>
                <div className={'score-board' + (getId == '62' ? ' correct-score' : '')} ref={(getId == '62' ? ref : inref)}><div className="randBorder">6 - 2</div></div>
                <div className={'score-board' + (getId == '44' ? ' correct-score' : '')} ref={(getId == '44' ? ref : inref)}><div className="randBorder">4 - 4</div></div>
                <div className={'score-board' + (getId == '53' ? ' correct-score' : '')} ref={(getId == '53' ? ref : inref)}><div className="randBorder">5 - 3</div></div>
                <div className={'score-board' + (getId == '50' ? ' correct-score' : '')} ref={(getId == '50' ? ref : inref)}><div className="randBorder">5 - 0</div></div>
                <div className={'score-board' + (getId == '42' ? ' correct-score' : '')} ref={(getId == '42' ? ref : inref)}><div className="randBorder">4 - 2</div></div>
                <div className={'score-board' + (getId == '51' ? ' correct-score' : '')} ref={(getId == '51' ? ref : inref)}><div className="randBorder">5 - 1</div></div>
                <div className={'score-board' + (getId == '70' ? ' correct-score' : '')} ref={(getId == '70' ? ref : inref)}><div className="randBorder">7 - 0</div></div>
                <div className={'score-board' + (getId == '78' ? ' correct-score' : '')} ref={(getId == '78' ? ref : inref)}><div className="randBorder">7 - 8</div></div>
                <div className={'score-board' + (getId == '79' ? ' correct-score' : '')} ref={(getId == '79' ? ref : inref)}><div className="randBorder">7 - 9</div></div>
                <div className={'score-board' + (getId == '62' ? ' correct-score' : '')} ref={(getId == '62' ? ref : inref)}><div className="randBorder">6 - 2</div></div>
                <div className={'score-board' + (getId == '41' ? ' correct-score' : '')} ref={(getId == '41' ? ref : inref)}><div className="randBorder">4 - 1</div></div>
                <div className={'score-board' + (getId == '61' ? ' correct-score' : '')} ref={(getId == '61' ? ref : inref)}><div className="randBorder">6 - 1</div></div>
                <div className={'score-board' + (getId == '49' ? ' correct-score' : '')} ref={(getId == '49' ? ref : inref)}><div className="randBorder">4 - 9</div></div>
            </div>
            {/* <div className={(ref.current != null ? 'passMsg' : 'errorMsg')}>
                {(ref.current != null ? 'Correct' : 'Error')}
            </div> */}
            <div className='passMsg'>Correct</div>
        </>
    )
}

export default SecondRandom;
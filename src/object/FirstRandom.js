import React, { useRef, useEffect, useState } from 'react';

const inref = null;

const FirstRandom = (props) => {
    { props.loading && <p>Loading...</p> }

    const ref = useRef(null);
    //const [getId, actScore] = useState('');
    const getId = props.postScore;
    useEffect(() => {
        //actScore(document.getElementById('actualScore').value);

    }, []);
    console.log(ref.current);
    return (
        <>
            <div id="score-filter" key={props.gameID}>
                <div className={'score-board' + (getId == '66' ? ' correct-score' : '')} ref={(getId == '66' ? ref : inref)}><div className="randBorder">6 - 6</div></div>
                <div className={'score-board' + (getId == '54' ? ' correct-score' : '')} ref={(getId == '54' ? ref : inref)}><div className="randBorder">5 - 4</div></div>
                <div className={'score-board' + (getId == '45' ? ' correct-score' : '')} ref={(getId == '45' ? ref : inref)}><div className="randBorder">4 - 5</div></div>
                <div className={'score-board' + (getId == '15' ? ' correct-score' : '')} ref={(getId == '15' ? ref : inref)}><div className="randBorder">1 - 5</div></div>
                <div className={'score-board' + (getId == '53' ? ' correct-score' : '')} ref={(getId == '53' ? ref : inref)}><div className="randBorder">5 - 3</div></div>
                <div className={'score-board' + (getId == '78' ? ' correct-score' : '')} ref={(getId == '73' ? ref : inref)}><div className="randBorder">7 - 8</div></div>
                <div className={'score-board' + (getId == '56' ? ' correct-score' : '')} ref={(getId == '56' ? ref : inref)}><div className="randBorder">5 - 6</div></div>
                <div className={'score-board' + (getId == '73' ? ' correct-score' : '')} ref={(getId == '73' ? ref : inref)}><div className="randBorder">7 - 3</div></div>
                <div className={'score-board' + (getId == '87' ? ' correct-score' : '')} ref={(getId == '87' ? ref : inref)}><div className="randBorder">8 - 7</div></div>
                <div className={'score-board' + (getId == '46' ? ' correct-score' : '')} ref={(getId == '46' ? ref : inref)}><div className="randBorder">4 - 6</div></div>
                <div className={'score-board' + (getId == '83' ? ' correct-score' : '')} ref={(getId == '83' ? ref : inref)}><div className="randBorder">8 - 3</div></div>
                <div className={'score-board' + (getId == '75' ? ' correct-score' : '')} ref={(getId == '75' ? ref : inref)}><div className="randBorder">7 - 5</div></div>
                <div className={'score-board' + (getId == '85' ? ' correct-score' : '')} ref={(getId == '85' ? ref : inref)}><div className="randBorder">8 - 5</div></div>
                <div className={'score-board' + (getId == '56' ? ' correct-score' : '')} ref={(getId == '56' ? ref : inref)}><div className="randBorder">5 - 6</div></div>
                <div className={'score-board' + (getId == '43' ? ' correct-score' : '')} ref={(getId == '43' ? ref : inref)}><div className="randBorder">4 - 3</div></div>
                <div className={'score-board' + (getId == '65' ? ' correct-score' : '')} ref={(getId == '65' ? ref : inref)}><div className="randBorder">6 - 5</div></div>
                <div className={'score-board' + (getId == '84' ? ' correct-score' : '')} ref={(getId == '84' ? ref : inref)}><div className="randBorder">8 - 4</div></div>
                <div className={'score-board' + (getId == '30' ? ' correct-score' : '')} ref={(getId == '30' ? ref : inref)}><div className="randBorder">3 - 0</div></div>
                <div className={'score-board' + (getId == '46' ? ' correct-score' : '')} ref={(getId == '46' ? ref : inref)}><div className="randBorder">4 - 6</div></div>
                <div className={'score-board' + (getId == '74' ? ' correct-score' : '')} ref={(getId == '74' ? ref : inref)}><div className="randBorder">7 - 4</div></div>
                <div className={'score-board' + (getId == '87' ? ' correct-score' : '')} ref={(getId == '87' ? ref : inref)}><div className="randBorder">8 - 7</div></div>
                <div className={'score-board' + (getId == '63' ? ' correct-score' : '')} ref={(getId == '63' ? ref : inref)}><div className="randBorder">6 - 3</div></div>
                <div className={'score-board' + (getId == '66' ? ' correct-score' : '')} ref={(getId == '66' ? ref : inref)}><div className="randBorder">6 - 6</div></div>
                <div className={'score-board' + (getId == '57' ? ' correct-score' : '')} ref={(getId == '57' ? ref : inref)}><div className="randBorder">5 - 7</div></div>
                <div className={'score-board' + (getId == '67' ? ' correct-score' : '')} ref={(getId == '67' ? ref : inref)}><div className="randBorder">6 - 7</div></div>
                <div className={'score-board' + (getId == '59' ? ' correct-score' : '')} ref={(getId == '59' ? ref : inref)}><div className="randBorder">5 - 9</div></div>
                <div className={'score-board' + (getId == '83' ? ' correct-score' : '')} ref={(getId == '83' ? ref : inref)}><div className="randBorder">8 - 3</div></div>
                <div className={'score-board' + (getId == '19' ? ' correct-score' : '')} ref={(getId == '19' ? ref : inref)}><div className="randBorder">1 - 9</div></div>
                <div className={'score-board' + (getId == '09' ? ' correct-score' : '')} ref={(getId == '09' ? ref : inref)}><div className="randBorder">0 - 9</div></div>
                <div className={'score-board' + (getId == '76' ? ' correct-score' : '')} ref={(getId == '76' ? ref : inref)}><div className="randBorder">7 - 6</div></div>
            </div>
            {/* <div className={(ref.current != null ? 'passMsg' : 'errorMsg')}>
                {(ref.current != null ? 'Correct' : 'Error')}
            </div> */}
            <div className='passMsg'>Correct</div>

        </>
    )
}

export default FirstRandom;
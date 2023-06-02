import React, { useRef, useEffect, useState } from 'react';

const inref = null;
const FourthRandom = (props) => {
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
                <div className={'score-board' + (getId == '21' ? ' correct-score' : '')} ref={(getId == '21' ? ref : inref)}><div className="randBorder">2 - 1</div></div>
                <div className={'score-board' + (getId == '12' ? ' correct-score' : '')} ref={(getId == '12' ? ref : inref)}><div className="randBorder">1 - 2</div></div>
                <div className={'score-board' + (getId == '54' ? ' correct-score' : '')} ref={(getId == '54' ? ref : inref)}><div className="randBorder">5 - 4</div></div>
                <div className={'score-board' + (getId == '22' ? ' correct-score' : '')} ref={(getId == '22' ? ref : inref)}><div className="randBorder">2 - 2</div></div>
                <div className={'score-board' + (getId == '41' ? ' correct-score' : '')} ref={(getId == '41' ? ref : inref)}><div className="randBorder">4 - 1</div></div>
                <div className={'score-board' + (getId == '23' ? ' correct-score' : '')} ref={(getId == '23' ? ref : inref)}><div className="randBorder">2 - 3</div></div>
                <div className={'score-board' + (getId == '24' ? ' correct-score' : '')} ref={(getId == '24' ? ref : inref)}><div className="randBorder">2 - 4</div></div>
                <div className={'score-board' + (getId == '54' ? ' correct-score' : '')} ref={(getId == '54' ? ref : inref)}><div className="randBorder">5 - 4</div></div>
                <div className={'score-board' + (getId == '22' ? ' correct-score' : '')} ref={(getId == '22' ? ref : inref)}><div className="randBorder">2 - 2</div></div>
                <div className={'score-board' + (getId == '30' ? ' correct-score' : '')} ref={(getId == '30' ? ref : inref)}><div className="randBorder">3 - 0</div></div>
                <div className={'score-board' + (getId == '54' ? ' correct-score' : '')} ref={(getId == '54' ? ref : inref)}><div className="randBorder">5 - 4</div></div>
                <div className={'score-board' + (getId == '14' ? ' correct-score' : '')} ref={(getId == '14' ? ref : inref)}><div className="randBorder">1 - 4</div></div>
                <div className={'score-board' + (getId == '50' ? ' correct-score' : '')} ref={(getId == '50' ? ref : inref)}><div className="randBorder">5 - 0</div></div>
                <div className={'score-board' + (getId == '53' ? ' correct-score' : '')} ref={(getId == '53' ? ref : inref)}><div className="randBorder">5 - 3</div></div>
                <div className={'score-board' + (getId == '11' ? ' correct-score' : '')} ref={(getId == '11' ? ref : inref)}><div className="randBorder">1 - 1</div></div>
                <div className={'score-board' + (getId == '52' ? ' correct-score' : '')} ref={(getId == '52' ? ref : inref)}><div className="randBorder">5 - 2</div></div>
                <div className={'score-board' + (getId == '23' ? ' correct-score' : '')} ref={(getId == '23' ? ref : inref)}><div className="randBorder">2 - 3</div></div>
                <div className={'score-board' + (getId == '55' ? ' correct-score' : '')} ref={(getId == '55' ? ref : inref)}><div className="randBorder">5 - 5</div></div>
                <div className={'score-board' + (getId == '11' ? ' correct-score' : '')} ref={(getId == '11' ? ref : inref)}><div className="randBorder">1 - 1</div></div>
                <div className={'score-board' + (getId == '61' ? ' correct-score' : '')} ref={(getId == '61' ? ref : inref)}><div className="randBorder">6 - 1</div></div>
                <div className={'score-board' + (getId == '10' ? ' correct-score' : '')} ref={(getId == '10' ? ref : inref)}><div className="randBorder">1 - 0</div></div>
                <div className={'score-board' + (getId == '13' ? ' correct-score' : '')} ref={(getId == '13' ? ref : inref)}><div className="randBorder">1 - 3</div></div>
                <div className={'score-board' + (getId == '93' ? ' correct-score' : '')} ref={(getId == '93' ? ref : inref)}><div className="randBorder">9 - 3</div></div>
                <div className={'score-board' + (getId == '14' ? ' correct-score' : '')} ref={(getId == '14' ? ref : inref)}><div className="randBorder">1 - 4</div></div>
                <div className={'score-board' + (getId == '83' ? ' correct-score' : '')} ref={(getId == '83' ? ref : inref)}><div className="randBorder">8 - 3</div></div>
                <div className={'score-board' + (getId == '82' ? ' correct-score' : '')} ref={(getId == '82' ? ref : inref)}><div className="randBorder">8 - 2</div></div>
                <div className={'score-board' + (getId == '32' ? ' correct-score' : '')} ref={(getId == '32' ? ref : inref)}><div className="randBorder">3 - 2</div></div>
                <div className={'score-board' + (getId == '20' ? ' correct-score' : '')} ref={(getId == '20' ? ref : inref)}><div className="randBorder">2 - 0</div></div>
                <div className={'score-board' + (getId == '42' ? ' correct-score' : '')} ref={(getId == '42' ? ref : inref)}><div className="randBorder">4 - 2</div></div>
                <div className={'score-board' + (getId == '13' ? ' correct-score' : '')} ref={(getId == '13' ? ref : inref)}><div className="randBorder">1 - 3</div></div>
            </div >
            <div className={(ref.current != null ? 'passMsg' : 'errorMsg')}>
                {(ref.current != null ? 'Correct' : 'Error')}
            </div>
        </>
    )
}

export default FourthRandom;
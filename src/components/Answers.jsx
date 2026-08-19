import {useState,useCallback, useRef} from 'react';
export default function Answers({answers,selectdAnswer,answerState, onSelectAnswer}) {
    const suffledAnswerRef = useRef();
    if(!suffledAnswerRef.current) {
        suffledAnswerRef.current = [...answers ];
        suffledAnswerRef.current.sort(() => Math.random()-0.5);
    }

    return (
        <ul id='answers'>
            {suffledAnswerRef.current.map((answer) => 
                {
                    let cssClass = "";
                    let isSelected = selectdAnswer === answer;
                    if(answerState === 'answered' && isSelected) {
                        cssClass = "selected";
                    } 
                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClass = answerState;
                    }
                    return <li key={answer} className='answer'>
                        <button onClick={() => onSelectAnswer(answer)} className={cssClass}>{answer}</button>
                    </li>;
                }
            )}
        </ul>
    );
}
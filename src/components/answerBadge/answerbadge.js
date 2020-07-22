import React from 'react';
import './answerbadge.scss';

function AnswerBadge({status}) {
    return (
    <div className={`answerBadge animate__animated animate__bounceIn ${status !=null ? "show" : "hide"} ${status ? 'right': 'wrong'}` } >{status ? 'Correct': 'Wrong!'}</div>
    );
}

export default AnswerBadge;


import React from 'react';
import './answerbadge.scss';

function AnswerBadge({status}) {
    return (
    <div className={`answerBadge ${status !=null ? "show" : "hide"}`}>{status ? 'Correct': 'Wrong!'}</div>
    );
}

export default AnswerBadge;


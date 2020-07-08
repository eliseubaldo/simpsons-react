import React from 'react';
import './question.scss';

function Question({question}) {

    return (
            <div className="question">
                <h3 className="question_title animated slideInLeft">{question.question}</h3>
                <div className="row">
                    <div className="col-12 answer-container">
                        <div className="boxAnswer">
                            <div className="boxAnswer_number">A</div>
                            <div className="boxAnswer_answer">{question.answer1}</div>
                        </div>
                        <div className="boxAnswer mt-1">
                            <div className="boxAnswer_number">B</div>
                            <div className="boxAnswer_answer">{question.answer2}</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Question;
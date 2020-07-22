import React, { useState, useEffect}from 'react';
import './question.scss';

function Question({question}) {

    const [removeAnimation, setRemoveAnimation] = useState(false);

    useEffect(() => {
        setRemoveAnimation(false); 
        setTimeout( () => {
            setRemoveAnimation(true)
        }, 1500);
    }, [question]);
    


    return (
            <div className={`question animate__animated ${removeAnimation ? '':'animate__slideInLeft'}`}>
                <h3 className="question_title">{question.question}</h3>
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
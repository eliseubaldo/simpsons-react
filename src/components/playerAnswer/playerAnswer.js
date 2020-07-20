import React, { useState, useEffect} from 'react';
import './playerAnswer.scss';

function PlayerAnswer({answerQuestion, selectedAnswer, clickable}) {

    const [answerClass, setAnswerClass] = useState(selectedAnswer);

    const handleClickA = () => {
        if (clickable && answerQuestion) {
            setAnswerClass('answer1');
            answerQuestion('answer1');
        }
    }

    const handleClickB = () => {
        if (clickable && answerQuestion) {
            setAnswerClass('answer2');
            answerQuestion('answer2');
        }
    }

    useEffect(() => { 
        setAnswerClass(selectedAnswer);
    }, [selectedAnswer]);


    return (
        <div className="PlayerAnswer">
            <button type="button" className={`btn btn-answer ${answerClass === 'answer1' ? "active" : ""}`} onClick={handleClickA}>A</button>
            <button type="button" className={`btn btn-answer ${answerClass === 'answer2' ? "active" : ""}`} onClick={handleClickB}>B</button>
        </div>
    );
}

export default PlayerAnswer;
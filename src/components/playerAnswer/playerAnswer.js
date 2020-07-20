import React, { useState, useEffect} from 'react';
import './playerAnswer.scss';

function PlayerAnswer({answerQuestion, selectedAnswer, clickable}) {

    const [answerClass, setAnswerClass] = useState(selectedAnswer);

    //let answerClass = selectedAnswer;
    console.log('answerClass:',answerClass);

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
        console.log("component updated");
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
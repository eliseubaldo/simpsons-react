import React, { useState, useEffect}from 'react';
import globalConstants from '../../constants/globalConstants';
import './question.scss';

function Question({question}) {

    const [removeAnimation, setRemoveAnimation] = useState(false);

    useEffect(() => {
        setRemoveAnimation(false); 
        setTimeout( () => {
            setRemoveAnimation(true)
        }, 1500);
    }, [question]);
    
    const QuestionImage = () => {
        return(
        <div className="col-md-2 col-sm-3 question_image-container">
            <div className="question_image">
                <img src={`${globalConstants.charsImagesUrl}${question.image}`} className="" alt=''/>
            </div>
        </div>
        )
    }


    return (
            <div className={`question animate__animated ${removeAnimation ? '':'animate__slideInLeft'}`}>
                <div className="row justify-content-center">
                    <div className={question.image ? 'col-md-7 col-sm-7' : 'col-12'}>
                    <h3 className="question_title">{question.question}</h3>
                        <div className="row justify-content-center">
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

                    {question.image ? <QuestionImage></QuestionImage> : null}
                </div>

                
            </div>
    );
}

export default Question;
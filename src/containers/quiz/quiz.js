import React, {useState, useEffect} from 'react';
import Question from '../../components/question/question';
import Player from '../../components/player/player';
import PlayerAnswer from '../../components/playerAnswer/playerAnswer';
import Loaderspinner from '../../components/loaderspinner/LoaderSpinner';
import './quiz.css';

function Quiz() {

    const baseURL = 'https://marvelheroes-1d22.restdb.io/rest/simpsons-trivia';
    
    const [questions, setQuestions] = useState([{
        question: null,
        answer1: null,
        answer2: null,
        correctAnswer: null
    }]);

    const [loading, setLoading] = useState(true);

    const [quizScore, setQuizScore] = useState({
        player: 0,
        computer: 0
    });

    let [computerAnswer, setComputerAnswer] = useState('oque');

    let [questionCounter, setQuestionCounter] = useState(0);
    
    useEffect(() => {
        const headers = {
            'x-apikey': '5c3f94b966292476821ca01e',
            'content-type': 'application/json',
        };
        fetch(baseURL, {headers: headers})
        .then((res) => res.json())
        .then((data) => {
            setQuestions(data);
            setLoading(false);
            console.log(data);
            
        })
    }, []);

    function answerQuestion(answer) {

        if(answer === questions[questionCounter].correctAnswer) {
            console.log('correct');
        } else {
            console.log('wrong');
        }

        chooseComputerAnswer();
    }

    function chooseComputerAnswer() {
        const rnd = Math.floor(Math.random() * 2);
        console.log('result:', rnd);

        switch (rnd) {
            case 0:
                setComputerAnswer('answer1');
                console.log('curr comp answer1: ', computerAnswer);
            break;
            case 1:
                setComputerAnswer('answer2');
                console.log('curr comp answer2: ', computerAnswer);
            break;
        
            default:
                break;
        }

        setQuestionCounter(questionCounter += 1);
    }



    return (
        <div className='Quiz'>
            { loading ? <Loaderspinner></Loaderspinner> : null }
                <section className="bigQuestion"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                { loading ? null : <Question question={questions[questionCounter]}></Question> }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="playersBG">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Player></Player>
                                    </div>
                                    <div className="col-md-6">
                                        <PlayerAnswer selectedAnswer={computerAnswer} clickable={false}></PlayerAnswer>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <PlayerAnswer answerQuestion={answerQuestion} selectedAnswer={''} clickable={true}></PlayerAnswer>
                                    </div>

                                    <div className="col-md-6">
                                        <Player></Player>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </section>

        </div>
    );
    
}

export default Quiz;
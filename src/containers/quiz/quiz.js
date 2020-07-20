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

    let [computerAnswer, setComputerAnswer] = useState('');
    let [playerAnswer, setPlayerAnswer] = useState('');

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
            setPlayerAnswer(answer);
            chooseComputerAnswer();
            checkAnswers();
            updateScores();

            //setQuestionCounter(questionCounter += 1);

    }

    function checkAnswers() {
        if (isAnswerCorrect(playerAnswer)) {
            console.log('Player correct Answer');
        };
    
        if(isAnswerCorrect(computerAnswer)) {
            console.log('computer correct Answer');
        }
    }


    function isAnswerCorrect(answer) {
        if(answer === questions[questionCounter].correctAnswer) {
            console.log('correct');
            return true;
        } else {
            console.log('wrong');
            return false
        }
    }

    function updateScores() {
        console.log('updating scores')
    }

    

    function chooseComputerAnswer() {
        const rnd = Math.floor(Math.random() * 2);

        switch (rnd) {
            case 0:
                setComputerAnswer('answer1');
            break;
            case 1:
                setComputerAnswer('answer2');
            break;
        
            default:
                break;
        }
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
                                        <Player score={quizScore.player}></Player>
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
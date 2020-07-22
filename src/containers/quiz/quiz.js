import React, {useState, useEffect, useReducer} from 'react';
import Question from '../../components/question/question';
import Player from '../../components/player/player';
import PlayerAnswer from '../../components/playerAnswer/playerAnswer';
import Loaderspinner from '../../components/loaderspinner/LoaderSpinner';
import AnswerBadge from '../../components/answerBadge/answerbadge';
import './quiz.css';
import { useParams } from "react-router";

function Quiz() {

    let { playerName } = useParams();

    const initialState = {
        score: {
         player: 0,
         computer: 0   
        },
        computerAnswer: null,
        playerAnswer: null,
        questionCounter: 0,
        playerAnswerState: null,
        computerAnswerState: null,
        canPlayerAnswer: null
    };

    const [state, dispatch] = useReducer(reducer,initialState, init);

    function init(initialState) {
        return {
            score: {
             player: 0,
             computer: 0   
            },
            computerAnswer: null,
            playerAnswer: null,
            questionCounter: 0,
            playerAnswerState: null,
            computerAnswerState: null,
            canPlayerAnswer: true
        }
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT_QUESTION_COUNTER':
                return {...state, questionCounter: state.questionCounter++}
            case 'UPDATE_SCORES':
                console.log('Updating scores');
                return {...state, score: action.payload}
            case 'COMPUTER_ANSWER':
                return {...state, computerAnswer: action.payload}
            case 'PLAYER_ANSWER':
                return {...state, playerAnswer: action.payload}
            case 'ANSWER_STATE':
                return {...state, 
                    playerAnswerState: action.payload.playerAnswerState,
                    computerAnswerState: action.payload.computerAnswerState    
                }
            case 'CAN_PLAYER_ANSWER':
                return {...state, canPlayerAnswer: action.payload}
            default:
                throw new Error();
        }
    }
    
    const [questions, setQuestions] = useState([{
        question: null,
        answer1: null,
        answer2: null,
        correctAnswer: null
    }]);

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const baseURL = 'https://marvelheroes-1d22.restdb.io/rest/simpsons-trivia';
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


    function handleAnswerQuestion(playerAnswer) {
            dispatch({type:'PLAYER_ANSWER', payload: playerAnswer});
            dispatch({type:'CAN_PLAYER_ANSWER', payload: false});
            const computerAnswer = chooseComputerAnswer();
            const answersResult = checkAnswers(playerAnswer, computerAnswer);
            showAnswerResults(answersResult);
            updateScores(answersResult);
            getReadyForNextQuestion();
    }

    function getReadyForNextQuestion() {
        setTimeout( () => { 
            resetPlayersState();
            nextQuestion();
         }, 3000);
    }

    function showAnswerResults(results) {
        dispatch({type:'ANSWER_STATE', payload: {
            computerAnswerState: results.computer,
            playerAnswerState: results.player
        }});
    }

    function checkAnswers(playerAnswer, computerAnswer) {
        return {player: isAnswerCorrect(playerAnswer), computer: isAnswerCorrect(computerAnswer)}
    }


    function isAnswerCorrect(answer) {
        if(answer === questions[state.questionCounter].correctAnswer) {
            console.log('correct');
            return true;
        } else {
            console.log('wrong');
            return false
        }
    }

    function updateScores(results) {
        const payload = {
            player: results.player ? (state.score.player += 1) : state.score.player,
            computer: results.computer ? (state.score.computer +=1) : state.score.computer,
        }
        dispatch({type:'UPDATE_SCORES', payload: payload});
    }

    function resetPlayersState() {
        dispatch({type:'CAN_PLAYER_ANSWER', payload: true});
        dispatch({type:'ANSWER_STATE', payload: {
            computerAnswerState: null,
            playerAnswerState: null
        }});
        dispatch({type:'COMPUTER_ANSWER', payload: null});
        dispatch({type:'PLAYER_ANSWER', payload: null});
    }

    function nextQuestion(){
        if ((state.questionCounter +1) === questions.length) {
            console.log('ir pro final page')
        } else {
            dispatch({type:'INCREMENT_QUESTION_COUNTER'});
        }
    }

    

    function chooseComputerAnswer() {
        const rnd = Math.floor(Math.random() * 2);

        switch (rnd) {
            case 0:
                dispatch({type: 'COMPUTER_ANSWER', payload: 'answer1'});
                return 'answer1';

            case 1:
                dispatch({type: 'COMPUTER_ANSWER', payload: 'answer2'});
                return 'answer2';

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
                                { loading ? null : <Question question={questions[state.questionCounter]}></Question> }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="playersBG">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="row">
                                    <AnswerBadge status={state.computerAnswerState}></AnswerBadge>
                                    <div className="col-md-6">
                                        <Player score={state.score.computer}></Player>
                                    </div>
                                    <div className="col-md-6">
                                        <PlayerAnswer selectedAnswer={state.computerAnswer} clickable={false}></PlayerAnswer>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="row">
                                    <AnswerBadge status={state.playerAnswerState}></AnswerBadge>
                                    <div className="col-md-6">
                                        <PlayerAnswer answerQuestion={handleAnswerQuestion} selectedAnswer={state.playerAnswer} clickable={state.canPlayerAnswer}></PlayerAnswer>
                                    </div>

                                    <div className="col-md-6">
                                        <Player score={state.score.player} playerName={playerName}></Player>
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
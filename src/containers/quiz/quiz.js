import React, {useState} from 'react';
import Question from '../../components/question/question';
import Player from '../../components/player/player';
import PlayerAnswer from '../../components/playerAnswer/playerAnswer';
import './quiz.css';

function Quiz() {

    let loading = true;

    const headers = {
        'x-apikey': '5c3f94b966292476821ca01e',
        'content-type': 'application/json',
      };
      const baseURL = 'https://marvelheroes-1d22.restdb.io/rest/simpsons-trivia';
    
      const [questions, setQuestions] = useState([{}]);
    
      async function fetchQuestions() {
          const apiRes = await fetch(baseURL, {headers: headers});
          return apiRes.json();
    
      }; 
    
      fetchQuestions().then(res => {
        setQuestions(res);
        console.log('terminou');
        loading = false;

      });


    
    return (
        <div className='Quiz'>
            
                <section className="bigQuestion">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Question question={questions[0]}></Question>
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
                                        <PlayerAnswer></PlayerAnswer>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <PlayerAnswer></PlayerAnswer>
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
import React, { useEffect, useState} from 'react';
import globalConstants from '../../constants/globalConstants';
import './highScores.scss';

function HighScores({winner}) {

    const [highScores, setHighScores] = useState([{
        name: null,
        score: null,
        isNew: false
    }]);

    useEffect(() => {

        const query = '?q=&sort=score&dir=-1&max=10';
        let highScores = [];
        let highScoreIndex;
        fetch(globalConstants.triviaHighScoresURL+query, {headers: globalConstants.headers})
        .then((res) => res.json())
        .then((data) => {
            console.log('HS', data);
            highScores = data;

            if(winner.type !== 'tie') {
                highScoreIndex = isHighScore(winner.score);
                if (highScoreIndex >= 0) {
                    highScores.splice(highScoreIndex,0,{player: winner.name, score: winner.score, isNew: true});
                };
                setHighScores(highScores);
                addHighScore();
            } else {
                setHighScores(data);
            }
            
        });

        function isHighScore(score) {
           return highScores.findIndex((hs) => hs.score < score );
            
        }

        function addHighScore() {
            const data = {player:winner.name, score: winner.score};
            fetch(globalConstants.triviaHighScoresURL, {
                method:'POST', 
                headers: globalConstants.headers,
                body: JSON.stringify(data)})
            .then((res) => res.json())
            .then((data) => {
                console.log('chegou: ',data)
            });
        }
        
    }, [winner]);

    

    return (
        <div className="highScoreContainer animate__animated animate__slideInUp">
            <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h4>Hall of Fame</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <table className="table mt-3">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {highScores.map((highScore, index) => {
                                     return <tr className={`${highScore.isNew ? 'new' : ''}`} key={index}>
                                                <td>{highScore.player}</td>
                                                <td>{highScore.score}</td>
                                            </tr>
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default HighScores;


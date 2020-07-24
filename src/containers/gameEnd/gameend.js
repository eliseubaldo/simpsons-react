import React from 'react';
import Player from '../../components/player/player';
import { useHistory } from "react-router-dom";
import './gameend.scss';

function GameEnd() {

    let history = useHistory();

    // delete after
    const papaer = {
        player: {
            score: 2,
            name: 'eli',
            avatar: {
                "charname":"Apu",
                "filename":"Apuicon.png"
             }
        },
        computer: {
            score: 4,
            avatar: {  
                "charname":"Hank",
                "filename":"Hankicon.png"
             }
        }
    }
    
    // const { data } = history.location || papaer;
    const data = papaer; // delete after
    

    let winner;

    if (data.player.score > data.computer.score) {
        winner = 'player';
    } else if (data.player.score < data.computer.score) {
        winner = 'computer';
    } else {
        winner = 'tie';
    }


    return (
        <section className="GameEnd">
            <div className="GameEnd-title">
                <div className="container">
                    <div className="row text-center mt-3">
                        <div className="col-md-12">
                            <h3>Quiz is OVER!</h3>
                        </div>
                    </div>
                </div>
            </div>

        <div className="GameEnd-resultsContainer">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h4>Results</h4>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-3">
                        { winner === 'player' || winner === 'tie' ? 
                            <Player score={data.computer.score} avatar={data.computer.avatar}></Player> : null
                        }
                        
                    </div>
                    <div className="col-md-6">
                        <div className="GameEnd-winnerBadge">
                            { winner === 'player' &&
                                <Player score={data.player.score} playerName={data.player.name} avatar={data.player.avatar}></Player> 
                            }
                            { winner === 'computer' &&
                                <div className="GameEnd-winnerBadge">
                                    winner
                                    <Player score={data.computer.score} avatar={data.computer.avatar}></Player>
                                </div> 
                            }

                            { winner === 'tie' &&
                                <div>TIE!</div> 
                            }
                        </div>
                        

                    </div>
                    <div className="col-md-3">
                        { winner === 'computer' || winner === 'tie' ? 
                            <Player score={data.player.score} playerName={data.player.name} avatar={data.player.avatar}></Player>  : null
                        }
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default GameEnd;
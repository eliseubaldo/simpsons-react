import React from 'react';
import Player from '../../components/player/player';
import WinnerLoserBagde from '../../components/winnerLoserBadge/winnerLoserBadge';
import { useHistory } from "react-router-dom";
import TieBadge from '../../components/tieBadge/tieBadge';
import HighScores from '../../components/highScores/highScores';
import './gameend.scss';

function GameEnd() {

    let history = useHistory();

    // // delete after
    const papaer = {
        player: {
            score: 6,
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
    
    //const { data } = history.location || papaer;
    const data = papaer; // delete after
    

    let winner = {
        type: null,
        score: null,
        name: null
    };

    if (data.player.score > data.computer.score) {
        winner = {
            type: 'player',
            score: data.player.score,
            name: data.player.name
        };
    } else if (data.player.score < data.computer.score) {
        winner = {
            type: 'computer',
            score: data.computer.score,
            name: data.computer.avatar.charname
        };
    } else {
        winner = {
            type: 'tie',
            score: null,
            name: null
        };
    }


    return (
        <section className="GameEnd">
            <div className="GameEnd-title animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row text-center mt-3">
                        <div className="col-md-12">
                            <h3>Quiz is OVER!</h3>
                        </div>
                    </div>
                </div>
            </div>

        <div className="GameEnd-resultsContainer animate__animated animate__slideInLeft">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h4>Results</h4>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-3">
                        { winner.type === 'player' || winner.type === 'tie' ? 
                            <Player score={data.computer.score} avatar={data.computer.avatar}></Player> : null
                        }
                        
                    </div>
                    <div className="col-md-6">
                        <div className="GameEnd-winnerBadge">
                            { winner.type === 'player' &&
                                <WinnerLoserBagde score={data.player.score} playerName={data.player.name} avatar={data.player.avatar}></WinnerLoserBagde> 
                            }
                            { winner.type === 'computer' &&
                                <div className="GameEnd-winnerBadge">
                                    <WinnerLoserBagde score={data.computer.score} avatar={data.computer.avatar}></WinnerLoserBagde>
                                </div> 
                            }

                            { winner.type === 'tie' &&
                                <TieBadge></TieBadge>
                            }
                        </div>
                        

                    </div>
                    <div className="col-md-3">
                        { winner.type === 'computer' || winner.type === 'tie' ? 
                            <Player score={data.player.score} playerName={data.player.name} avatar={data.player.avatar}></Player>  : null
                        }
                    </div>
                </div>
            </div>
        </div>

        <HighScores winner={winner}></HighScores>
        </section>
    );
}

export default GameEnd;
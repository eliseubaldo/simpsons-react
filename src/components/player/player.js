import React from 'react';


function Player({score, playerName}) {
    return (
        <div className="playerContainer">
            <div className="playerPicture"></div>
            <div className="playerName">{playerName}</div>
    <p className="score">Score: <span className="cPoints">{score}</span></p>
        </div>
    );
}

export default Player;
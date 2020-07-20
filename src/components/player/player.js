import React from 'react';


function Player({score}) {
    return (
        <div className="playerContainer">
            <div className="playerPicture"></div>
            <div className="playerName">Lovejoy</div>
    <p className="score">Score: <span className="cPoints">{score}</span></p>
        </div>
    );
}

export default Player;
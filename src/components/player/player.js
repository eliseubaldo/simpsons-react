import React from 'react';


function Player() {
    return (
        <div className="playerContainer">
            <div className="playerPicture"></div>
            <div className="playerName">Lovejoy</div>
            <p className="score">Score: <span className="cPoints">0</span></p>
        </div>
    );
}

export default Player;
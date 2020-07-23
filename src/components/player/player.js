import React from 'react';
import globalConstants from '../../constants/globalConstants';
import './player.scss';

function Player({score, playerName, avatar}) {
    return (
        <div className="playerContainer">
            <div className="playerPicture">
                {avatar ? <img src={`${globalConstants.iconsUrl}${avatar.filename}`} alt={avatar.charname}/> : null}
            </div>
            <div className="playerName">{playerName ? playerName : avatar ? avatar.charname : null}</div>
            <p className="score">Score: <span className="cPoints">{score}</span></p>
        </div>
    );
}

export default Player;
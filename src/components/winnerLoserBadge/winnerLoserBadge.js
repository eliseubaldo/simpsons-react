import React from 'react';
import globalConstants from '../../constants/globalConstants';
import './winnerLoserBadge.scss';

function WinnerLoserBadge({score, playerName, avatar}) {
    return (
        <div className="animate__animated animate__bounceIn animate__delay-2s">
        <div className="badgeContainer">
            <div className="badgeContainer_avatarPicture">
                {avatar ? <img src={`${globalConstants.iconsUrl}${avatar.filename}`} alt={avatar.charname}/> : null}
            </div>
        </div>
        <div className='badgeBottom'>
            <div className="badgeBottom_avatarNameContainer">
                <div className='badgeBottom_avatarNameContainer-name'>
                {playerName ? playerName : avatar ? avatar.charname : null}
                </div>
            </div>
            <p className="badgeBottom_score">Score <span className="badgeBottom_score-numbers">{score}</span></p>
        </div>
        </div>
    );
}

export default WinnerLoserBadge;
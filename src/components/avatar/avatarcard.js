import React from 'react';
import globalConstants from '../../constants/globalConstants';
import './avatarcard.scss';



function AvatarCard({avatar, onClick}) {

    function handleClick() {
        if(onClick) {
            onClick(avatar)
        }
    }

    
    return (
        <div className="avatar" onClick={handleClick}>
            <div className="avatar-picture">
                <img src={`${globalConstants.iconsUrl}${avatar.filename}`} alt={avatar.charname}/>
            </div>
            <div className="avatar-name">
                {avatar.charname}
            </div>
        </div>
        
    );
}

export default AvatarCard;
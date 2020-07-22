import React from 'react';
import './avatar.scss';

function Avatar({avatar, onClick}) {
    const iconsUrl = '/assets/images/icons/';
    return (
        <div className="avatar" onClick={onClick}>
            <div className="avatar-picture">
                <img src={`${iconsUrl}${avatar.filename}`} alt={avatar.charname}/>
            </div>
            <div className="avatar-name">
                {avatar.charname}
            </div>
        </div>
        
    );
}

export default Avatar;
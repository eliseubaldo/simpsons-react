import React from 'react';
import './tieBadge.scss';
import homer from '../../assets/images/homer-duh.png'

function TieBadge() {
    return (
        <div className="tieBadgeContainer animate__animated animate__bounceIn animate__delay-2s">
            <img src={homer} className="tieBadgeContainer_image" alt='homer duh'/>
        </div>
    );
}

export default TieBadge;
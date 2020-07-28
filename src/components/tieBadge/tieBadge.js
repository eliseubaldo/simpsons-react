import React from 'react';
import './tieBadge.scss';

function TieBadge() {
    return (
        <div className="tieBadgeContainer animate__animated animate__bounceIn animate__delay-2s">
            <img src='/assets/images/homer-duh.png' className="tieBadgeContainer_image" alt='homer duh'/>
        </div>
    );
}

export default TieBadge;
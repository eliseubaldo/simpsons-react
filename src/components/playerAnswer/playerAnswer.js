import React from 'react';
import './playerAnswer.scss';

function PlayerAnswer() {
    return (
        <div className="PlayerAnswer">
            <button type="button" className="btn btn-answer">1</button>
            <button type="button" className="btn btn-answer">2</button>
        </div>
    );
}

export default PlayerAnswer;
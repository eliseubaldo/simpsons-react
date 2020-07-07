import React from 'react';
import './loaderspinner.css';

function Loaderspinner() {
    return (
        <div className="loaderspinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>  
        </div>
    )
}

export default Loaderspinner
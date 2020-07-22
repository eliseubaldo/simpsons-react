import React from 'react';
import './header.scss';

function Header() {
    return (
        <header>
            <div className="row">
                <div className="col-12 header">
                    <img src="/assets/images/logo-simpsons.png" className="logo animate__animated  animate__zoomIn animate__slow " alt="" />
                    <h2 className="text-center animate__animated animate__zoomInDown animate__slow">Super Trivia battle</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;
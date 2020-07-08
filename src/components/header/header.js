import React from 'react';
import './header.scss';

function Header() {
    return (
        <header>
            <div className="row">
                <div className="col-12 header">
                    <img src="/assets/images/logo-simpsons.png" className="logo" alt="" />
                    <h2 className="text-center">Super Trivia battle</h2>
                </div>
            </div>
        </header>
    );
}

export default Header;
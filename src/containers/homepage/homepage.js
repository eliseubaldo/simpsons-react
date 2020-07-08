import React from 'react';
import { withRouter } from 'react-router-dom';
import './homepage.css';

function Homepage() {

    const Button = withRouter(({history}) => (
        <button className="btn btnStart btn-lg mt-3" onClick={() => {history.push('/trivia')}}>Start!</button>
    ));

    return (
        <section className="homepage">
            <div className="container">
                <div className="row text-center mt-3">
                <div className="col-md-12">
                    <h4>Enter your Name</h4>
                    <input type="text" className="form-control inputPlayer" />
                    <Button></Button>  
                </div>
                </div>
            </div>
        </section>
    );
}

export default Homepage;
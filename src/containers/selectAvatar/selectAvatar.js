import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import './selectAvatar.scss';
import avatars from '../../constants/avatars';
import Avatar from '../../components/avatar/avatar';

function SelectAvatar() {

    const Button = withRouter(({history}) => (
        <button className="btn btnStart btn-lg mt-3" onClick={() => {history.push(`/trivia/${playerName}`)}}>Start!</button>
    ));

    const [playerName, setPlayerName] = useState('');

    function handleAvatar(e) {
        console.log('hi')
    }

    return (
        <section className="selectAvatar">
            <div className="container">
            <div className="row text-center mt-3">
                <div className="col-md-12">
                    <h4>Select your avatar</h4>
                </div>
            </div>

            <div className="row text-center mt-3">
                <div className="col-md-12">
                    <div className="selectAvatar-Avatar_list">
                        {avatars.map((character, index) => {
                            return <div className="selectAvatar-Avatar_list-item" key={index}><Avatar avatar={character} onClick={handleAvatar}/></div>;
                        })}
                    </div>
                </div>
            </div>


            
                <div className="row text-center mt-3">
                <div className="col-md-12">
                    <h4>Enter your Name</h4>
                    <input type="text" className="form-control inputPlayer" onChange={event => setPlayerName(event.target.value)} />
                    <Button></Button>  
                </div>
                </div>
            </div>
        </section>
    );
}

export default SelectAvatar;
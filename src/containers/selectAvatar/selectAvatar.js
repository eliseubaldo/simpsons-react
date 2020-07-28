import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import './selectAvatar.scss';
import avatars from '../../constants/avatars';
import AvatarCard from '../../components/avatar/avatarcard';

function SelectAvatar() {

    const Button = withRouter(({history}) => (
        <button className="btn btnStart btn-lg mt-3" onClick={() => {history.push(`/trivia/${playerName}/${playerAvatar.charname}`)}}>Start!</button>
    ));

    const [playerName, setPlayerName] = useState('');
    const [playerAvatar, setPlayerAvatar] = useState({});

    useEffect(() => {
        handleAvatar(avatars[0])
    }, []);
      

    function handleAvatar(avatar) {
        console.log('vat:', avatar.charname)

        setPlayerName(avatar.charname);
        setPlayerAvatar(avatar);
        document.getElementById('avatarName').value = avatar.charname;
    }

    return (
        <section className="selectAvatar">
            <div className="container">
                <div className="row text-center mt-3 ">
                    <div className="col-md-12 ">
                        <h4 className="animate__animated animate__lightSpeedInLeft">Select your avatar</h4>
                    </div>
                </div>

                <div className="row text-center mt-3 ">
                    <div className="col-md-12">
                        <div className="selectAvatar-Avatar_list">
                            {avatars.map((character, index) => {
                                return <div className="selectAvatar-Avatar_list-item animate__animated animate__flipInY animate__delay-1s" key={index}><AvatarCard avatar={character} onClick={handleAvatar}/></div>;
                            })}
                        </div>
                    </div>
                </div>


                
                <div className="row text-center mt-4 justify-content-center animate__animated animate__slideInLeft animate__delay-2s">
                    <div className="col-md-8">
                        <div className="row selectAvatar-playerData">
                                <div className="col-md-4 selectAvatar-avatar-card">
                                <AvatarCard avatar={playerAvatar} />
                            </div>
                            <div className="col-md-6">
                                <h4>Enter your Name</h4>
                                <input type="text" className="form-control" maxLength="15" id="avatarName" onChange={event => setPlayerName(event.target.value)} />
                                <Button></Button>  
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default SelectAvatar;
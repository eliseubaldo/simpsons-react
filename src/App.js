import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './containers/homepage/homepage';
import Quiz from './containers/quiz/quiz';
import GameEnd from './containers/gameEnd/gameend';
import './App.scss';
import Loaderspinner from './components/loaderspinner/LoaderSpinner';
import SelectAvatar from './containers/selectAvatar/selectAvatar';

function App() {
  let isLoading = false;
  
  
  return (
    <Router>
    <div className="App container">
      { isLoading ? <Loaderspinner /> : null }
        <Header></Header>
    </div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/trivia/:playerName/:avatarId' component={Quiz} />
      <Route path='/selectAvatar' component={SelectAvatar} />
      <Route path='/GameEnd' component={GameEnd} />
    </Switch>
    </Router>
  );
}

export default App;

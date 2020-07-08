import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import Homepage from './containers/homepage/homepage';
import Quiz from './containers/quiz/quiz';
import './App.scss';
import Loaderspinner from './components/loaderspinner/LoaderSpinner';

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
      <Route path='/trivia' component={Quiz} />
    </Switch>
    </Router>
  );
}

export default App;

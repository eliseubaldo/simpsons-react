import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import './App.css';
import Loaderspinner from './components/loaderspinner/LoaderSpinner';
import Character from './components/character/character';

function App() {
  const isLoading = false;
  
  return (
    <Router>
    <div className="App container">
      { isLoading ? <Loaderspinner /> : null }
        <Header></Header>
        <div className='character-list'>
          <Character name="Lisa" />
          <Character name="Bart" />
          <Character name="Homer" />
        </div>
    </div>

    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import TopBar from './sections/top-bar/topBar.js';
import BaseText from './global-components/base-text/baseText.js';
import RequestButton from './global-components/request-button/requestButton.js';
import Subtitles from './global-components/subtitles/subtitles.js';
import Logo from './global-components/logo/logo.js';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <BaseText text={'Hola Mundo <3'}/>
      <RequestButton/>
      <Subtitles text={'Subtitulo de Why Choose :)'}/>
      <Logo/>
    </div>
  );
}

export default App;

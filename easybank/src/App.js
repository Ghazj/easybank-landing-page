import React from 'react';
import './App.css';
import TopBar from './sections/top-bar/topBar.js';
import BaseText from './global-components/base-text/baseText.js';
import RequestButton from './global-components/request-button/requestButton.js';
import Subtitles from './global-components/subtitles/subtitles.js';
import Logo from './global-components/logo/logo.js';
import Principal from './sections/principal/principal.js';
import WhyChoo from './sections/why-choose/whyChoo.js';
import LatestArt from './sections/latest-art/latestArt.js';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Principal />
      <WhyChoo />
      <LatestArt />
    </div>
  );
}

export default App;

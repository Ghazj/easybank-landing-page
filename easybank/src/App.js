import React from 'react';
import './App.css';
import phones from './assets/images/image-mockups.png';
import TopBar from './sections/top-bar/topBar.js';
import Principal from './sections/principal/principal.js';
import WhyChoo from './sections/why-choose/whyChoo.js';
import LatestArt from './sections/latest-art/latestArt.js';
import BotBar from './sections/bot-bar/botBar';

function App() {
  return (
    <div className="App">
      <img alt="Phones" src={phones} className="phones" />
      <TopBar />
      <Principal />
      <WhyChoo />
      <LatestArt />
      <BotBar />
    </div>
  );
}

export default App;

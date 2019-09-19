import React from 'react';
import './App.css';

import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import InformationArea from './components/InformationArea';
import Characters from './components/Characters';
import Jutsus from './components/Jutsus';
import Games from './components/Games';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <BackgroundImage />
      <InformationArea />
      <Characters />
      <Jutsus />
      <Games />
      <Footer />
    </>
  );
}

export default App;

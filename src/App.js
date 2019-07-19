import React from 'react';
import Lottie from 'react-lottie';

import './App.css';
import Logo from './assets/logo.png';

import useFetch from './hooks/fetch';
import Animation from './lottie/tick';

function App() {
  return (
    <div>
      {RenderHeader()}
      {RenderData()}
    </div>
  );
}

const RenderHeader = () => (
  <div className="Header-page">
    <span className="Title-page">Desafio Guia Bolso </span>
    <img className="Logo" src={Logo} width="320" height="70" alt="logo" />
    <div className="Line-divider" />
  </div>
);

const RenderData = () => {
  const [categories, loading] = useFetch('https://api.chucknorris.io/jokes/categories');

  const animation = {
    loop: true,
    autoplay: true,
    animationData: Animation
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading
          ? (
            <Lottie
              options={animation}
              height={300}
              width={450}
            />
          )
          : categories.map((valor, index) => (
            <div className={['Line-list', index % 2 === 0 ? 'even' : 'odd'].join(' ')}>
              <span>{`${index} - `}</span>
              <span>{valor}</span>
            </div>
          ))}
      </header>
    </div>
  );
};

export default App;

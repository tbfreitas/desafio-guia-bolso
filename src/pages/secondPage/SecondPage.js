import React from 'react';
import Lottie from 'react-lottie';

import './SecondPage.css';

import useFetch from '../../hooks/fetch';
import Animation from '../../lottie/tick';

import Header from '../../components/Header';

function SecondPage(props) {
  return (
    <div>
      {RenderHeader()}
      {RenderData(props)}
    </div>
  );
}

const RenderHeader = () => (
  <Header />
);

const RenderData = ({ match }) => {
  const { params } = match;
  const [data, loading] = useFetch(`https://api.chucknorris.io/jokes/random?category${params}`);
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
          : (
            <div className="container-data">
              <img src={data.icon_url} alt="new" width="100" height="100" />
              <br />
              <span className="data-style">{`Data: ${data.created_at.split(' ')[0]} `}</span>
              <br />
              <span className="descr-style">{`Value: ${data.value}`}</span>
              <br />
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <span className="link-style">Ir para o link</span>
              </a>
            </div>
          )}
      </header>
    </div>
  );
};

export default SecondPage;

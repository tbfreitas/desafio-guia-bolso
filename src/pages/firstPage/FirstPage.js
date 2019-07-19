import React from 'react';
import Lottie from 'react-lottie';

import './FirstPage.css';

import Header from '../../components/Header';
import useFetch from '../../hooks/fetch';
import Animation from '../../lottie/tick';

function FirstPage(props) {
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

const RenderData = (props) => {
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
            <div
              role="presentation"
              className={['Line-list', index % 2 === 0 ? 'even' : 'odd'].join(' ')}
              onClick={() => {
                const { history } = props;
                history.push(`/categorie=${valor}`);
              }}
            >
              <span>{`${index} - `}</span>
              <span>{valor}</span>
            </div>
          ))}
      </header>
    </div>
  );
};

export default FirstPage;

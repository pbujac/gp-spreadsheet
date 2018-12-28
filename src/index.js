import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading';

const HomePage = React.lazy(() => import('./components/App'));

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <HomePage />
  </React.Suspense>
  , document.getElementById('root')
);

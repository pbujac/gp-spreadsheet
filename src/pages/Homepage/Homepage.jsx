import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'components/Card/Card';
import style from './Homepage.scss';

const Homepage = () => {
  return (
    <div className={style.homepage}>
      <Link to="/create-spreadsheet">
        <Card
          title="Create spreadsheet"
          description="lorem ipsum dolores"
          theme="blue"
        />
      </Link>
      <Link to="/view-spreadsheets">
        <Card
          title="View spreadsheets"
          description="lorem psum dollorem"
          theme="black"
        />
      </Link>
    </div>
  );
};

export default Homepage;

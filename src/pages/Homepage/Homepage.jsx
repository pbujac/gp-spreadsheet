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
          description="Click here to create a new one"
          theme="blue"
        />
      </Link>
    </div>
  );
};

export default Homepage;

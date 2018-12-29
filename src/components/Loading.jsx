import React from 'react';

const Loading = props => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <div>Loadifdng.dddds..f</div>;
  }
};

export default Loading;
import React from 'react';

const Loading = props => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <div>Loading.dddds..</div>;
  }
};

export default Loading;
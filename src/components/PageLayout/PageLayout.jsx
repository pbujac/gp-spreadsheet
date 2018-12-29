import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = props => (
  <div>
    {props.children}
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
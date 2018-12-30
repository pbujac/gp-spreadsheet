import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = props => (
  <>
    {props.children}
  </>
);

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
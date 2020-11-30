import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubTitle = ({ title }) => {
  const Title = styled.p`
    color: white;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
  `;
  return <Title>{title}</Title>;
};

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SubTitle;

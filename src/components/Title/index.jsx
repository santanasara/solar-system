import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable */
const MainTitle = ({ color, title }) => {
  const Title = styled.p`
    color: ${({ color }) =>
      color === 'black' ? '#0000' : color === 'pink' ? '#FF6CD9' : '#fff'};
    font-size: 32px;
    font-weight: bold;
    margin: 0;
    padding: 0;
  `;
  return <Title color={color}>{title}</Title>;
};

MainTitle.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default MainTitle;

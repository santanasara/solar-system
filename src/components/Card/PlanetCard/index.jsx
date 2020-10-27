import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlanetCard = ({ title, icon }) => {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 109px;
    background-color: #151515;
    border-radius: 8px;
  `;
  const Icon = styled.img`
    width: 70px;
    height: auto;
  `;
  const SubTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.7em;
    color: white;
  `;
  return (
    <Card>
      <Icon src={icon} alt={title} />
      <SubTitle>{title}</SubTitle>
    </Card>
  );
};

PlanetCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default PlanetCard;

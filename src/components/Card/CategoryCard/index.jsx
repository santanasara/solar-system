import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CategoryCard = ({ color, title, icon }) => {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 73px;
    background-color: ${color};
    border-radius: 8px;
    margin: 8px;
    transition: 0.4s ease;
    &:first-of-type {
      margin-left: 0;
    }
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const Icon = styled.img`
    width: 30px;
    height: auto;
  `;
  const SubTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.8em;
    color: white;
  `;
  return (
    <Card>
      <Icon src={icon} alt={title} />
      <SubTitle>{title}</SubTitle>
    </Card>
  );
};

CategoryCard.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default CategoryCard;

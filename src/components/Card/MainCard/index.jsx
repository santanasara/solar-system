import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainCard = ({ title, icon, about }) => {
  const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 370px;
    min-width: 300px;
    height: 140px;
    background-color: #131313;
    border-radius: 8px;
    margin-bottom: 20px;
    margin-right: 5%;
    padding: 10px;
    transition: 0.4s ease;
    &:hover {
      transform: translateY(-10px);
    }
  `;
  const Icon = styled.img`
    width: 120px;
    height: auto;
  `;
  const Title = styled.h1`
    color: white;
    margin: 0;
    padding: 0;
    height: 40px;
  `;
  const Detail = styled.p`
    color: white;
    text-align: justify;
    margin: 0;
    padding: 0;
    font-size: 0.8em;
    text-overflow: ellipsis;
  `;
  return (
    <Card>
      <div>
        <Icon src={icon} alt={title} />
      </div>
      <div style={{ overflow: 'hidden', height: '100%', margin: '0 10px' }}>
        <Title>{title}</Title>
        <Detail>{about}</Detail>
      </div>
    </Card>
  );
};

MainCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
export default MainCard;

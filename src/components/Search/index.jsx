import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/icones/Search.png';

const Search = () => {
  const Input = styled.input`
    color: white;
    margin-left: 32px;
    width: 90%;
    border: none;
    background: none;
    height: 100%;
    font-size: 14px;
  `;

  const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 461px;
    height: 8.2em;
    max-height: 51px;
    background-color: #151515;
    padding-left: 15px;
    border-radius: 10px;
  `;

  const Icon = styled.img`
    position: absolute;
    width: calc(12px + 2vh);
    padding-top: 5px;
    height: auto;
    opacity: 50%;
  `;

  return (
    <div>
      <Container>
        <Icon src={searchIcon} />
        <Input placeholder="Procure planetas, asteroides, estrelas..." />
      </Container>
    </div>
  );
};

export default Search;

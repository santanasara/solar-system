import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  ContentWrapper,
  MainCardWrapper,
} from '../../components/Utils';
import CategoryCard from '../../components/Card/CategoryCard';
import MainTitle from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import searchIcon from '../../assets/icones/Search.png';
import MainCard from '../../components/Card/MainCard';
import PlanetCard from '../../components/Card/PlanetCard';
import planet from '../../assets/icones/Planets.png';
import asteroid from '../../assets/icones/Asteroids.png';
import star from '../../assets/icones/Stars.png';
import galaxy from '../../assets/icones/Galaxies.png';
import mercurio from '../../assets/astros/Mercury.png';
import venus from '../../assets/astros/Venus.png';
import terra from '../../assets/astros/Earth.png';
import marte from '../../assets/astros/Mars.png';
import uranus from '../../assets/astros/Uranus.png';
import pluto from '../../assets/astros/Pluto.png';
import neptune from '../../assets/astros/Neptune.png';
import jupiter from '../../assets/astros/Jupiter.png';
import sol from '../../assets/astros/Sun.png';
import { getDetail } from './services';
import { getImage } from '../Utils';

const categories = [
  { color: '#5935FF', title: 'Planetas', id: 'planet', icon: planet },
  { color: '#FF6CD9', title: 'Asteróides', id: 'asteroid', icon: asteroid },
  { color: '#01D4E4', title: 'Estrelas', id: 'star', icon: star },
  { color: '#F9C270', title: 'Galáxias', id: 'galaxy', icon: galaxy },
];

const planets = [
  { title: 'Mercúrio', icon: mercurio, id: 0 },
  { title: 'Vênus', icon: venus, id: 1 },
  { title: 'Terra', icon: terra, id: 2 },
  { title: 'Marte', icon: marte, id: 3 },
  { title: 'Júpiter', icon: jupiter, id: 4 },
  { title: 'Urano', icon: uranus, id: 6 },

  { title: 'Netuno', icon: neptune, id: 7 },
  { title: 'Plutão', icon: pluto, id: 8 },
  { title: 'Sol', icon: sol, id: 9 },
];
const Input = styled.input`
  color: white;
  margin-left: 32px;
  width: 90%;
  border: none;
  background: none;
  height: 100%;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 8.2em;
  max-height: 51px;
  background-color: #131313;
  padding-left: 15px;
  border-radius: 10px;
`;

const Icon = styled.img`
  position: absolute;
  width: 18px;
  padding-top: 5px;
  height: auto;
  opacity: 50%;
`;
/* eslint-disable */
const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResponse, setSearchResponse] = useState([]);

  useEffect(() => {
    if (searchInput === '') {
      setSearchResponse([]);
    } else {
      getDetail(searchInput, 'title').then((response) => {
        if (response.res) {
          setSearchResponse(response.msg);
        }
      });
    }
  }, [searchInput]);

  const handleClickCategory = (category) => {
    console.log('aqui');
    getDetail(category, 'category').then((response) => {
      if (response.res) {
        setSearchResponse(response.msg);
      }
    });
  };
  return (
    <Container>
      <div style={{ width: '60vw' }}>
        <Header>
          {(searchResponse.length === 0  && searchInput === '') ? (
            <>
              <MainTitle title="Olá!" color="pink" />
              <SubTitle title="O que você vai aprender hoje?" />
            </>
          ) : (
            <MainTitle title="Resultados da busca" />
          )}
        </Header>
        <ContentWrapper>
          <div>
            <SearchContainer>
              <Icon src={searchIcon} />
              <Input
                onChange={(event) => setSearchInput(event.target.value)}
                value={searchInput}
                placeholder="Procure planetas, asteroides, estrelas..."
              />
            </SearchContainer>
          </div>
        </ContentWrapper>
        {(searchResponse.length === 0  && searchInput === '') ? (
          <>
            <div style={{ marginBottom: '15px' }}>
              <SubTitle title="Categorias" />
              {categories.map((category, index) => {
                return (
                  <div style={{ display: 'inline-block' }} key={index} onClick={() => handleClickCategory(category.id)}>
                    <CategoryCard
                      color={category.color}
                      title={category.title}
                      icon={category.icon}
                      
                    />
                  </div>
                );
              })}
            </div>

            <SubTitle title="Principais" />
            {planets.map((planetCard, index) => {
              return (
                <Link to={`/detail/${planetCard.id}`} key={index}>
                  <div style={{ display: 'inline-block' }}>
                    <PlanetCard
                      title={planetCard.title}
                      icon={planetCard.icon}
                    />
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            {searchResponse.map((planetCard) => {
              return (
                <Link to={`/detail/${planetCard.id}`}>
                  <MainCardWrapper>
                    <MainCard
                      title={planetCard.title}
                      icon={getImage(planetCard.title)}
                      about={planetCard.about}
                    />
                  </MainCardWrapper>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;

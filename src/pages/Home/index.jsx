import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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

const categories = [
  { color: '#5935FF', title: 'Planetas', icon: planet },
  { color: '#FF6CD9', title: 'Asteróides', icon: asteroid },
  { color: '#01D4E4', title: 'Estrelas', icon: star },
  { color: '#F9C270', title: 'Galáxias', icon: galaxy },
];

const planets = [
  { title: 'Mercurio', icon: mercurio },
  { title: 'Vênus', icon: venus },
  { title: 'Terra', icon: terra },
  { title: 'Marte', icon: marte },
  { title: 'Sol', icon: sol },
  { title: 'Urano', icon: uranus },
  { title: 'Jupiter', icon: jupiter },
  { title: 'Netuno', icon: neptune },
  { title: 'Plutão', icon: pluto },
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
const Home = () => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return (
    <Container>
      <div style={{ width: '60vw' }}>
        <Header>
          {searchInput === '' ? (
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
        {searchInput === '' ? (
          <>
            <div style={{ marginBottom: '15px' }}>
              <SubTitle title="Categorias" />
              {categories.map((category) => {
                return (
                  <div style={{ display: 'inline-block' }}>
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
            {planets.map((planetCard) => {
              return (
                <div style={{ display: 'inline-block' }}>
                  <PlanetCard title={planetCard.title} icon={planetCard.icon} />
                </div>
              );
            })}
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            {planets.map((planetCard) => {
              return (
                <MainCardWrapper>
                  <MainCard title={planetCard.title} icon={planetCard.icon} />
                </MainCardWrapper>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;

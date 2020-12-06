import React from 'react';
import {
  Container,
  Header,
  ContentWrapper,
  MainCardWrapper,
} from '../../components/Utils';

import MainTitle from '../../components/Title';

import Search from '../../components/Search';
import MainCard from '../../components/Card/MainCard';

import mercurio from '../../assets/astros/Mercury.png';
import venus from '../../assets/astros/Venus.png';
import terra from '../../assets/astros/Earth.png';
import marte from '../../assets/astros/Mars.png';
import uranus from '../../assets/astros/Uranus.png';
import pluto from '../../assets/astros/Pluto.png';
import neptune from '../../assets/astros/Neptune.png';
import jupiter from '../../assets/astros/Jupiter.png';

const planets = [
  { title: 'Mercurio', icon: mercurio },
  { title: 'Vênus', icon: venus },
  { title: 'Terra', icon: terra },
  { title: 'Marte', icon: marte },
  { title: 'Urano', icon: uranus },
  { title: 'Jupiter', icon: jupiter },
  { title: 'Netuno', icon: neptune },
  { title: 'Plutão', icon: pluto },
];
const SearchResults = () => {
  return (
    <Container>
      <div style={{ maxWidth: '60vw' }}>
        <Header>
          <MainTitle title="Resultados da busca" />
        </Header>
        <ContentWrapper>
          <Search />
        </ContentWrapper>
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
      </div>
    </Container>
  );
};

export default SearchResults;

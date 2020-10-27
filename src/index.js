import React from 'react';
import ReactDOM from 'react-dom';
import CategoryCard from './components/Card/CategoryCard';
import planet from './assets/icones/Planets.png';
import asteroid from './assets/icones/Asteroids.png';
import star from './assets/icones/Stars.png';
import galaxy from './assets/icones/Galaxies.png';
import sol from './assets/astros/Sun.png';
import mercurio from './assets/astros/Mercury.png';
import venus from './assets/astros/Venus.png';
import terra from './assets/astros/Earth.png';
import marte from './assets/astros/Mars.png';

import PlanetCard from './components/Card/PlanetCard';
import Search from './components/Search';

const categories = [
  { color: '#5935FF', title: 'Planetas', icon: planet },
  { color: '#FF6CD9', title: 'Asteróides', icon: asteroid },
  { color: '#01D4E4', title: 'Estrelas', icon: star },
  { color: '#F9C270', title: 'Galáxias', icon: galaxy },
];

const planets = [
  { title: 'Sol', icon: sol },
  { title: 'Mercurio', icon: mercurio },
  { title: 'Vênus', icon: venus },
  { title: 'Terra', icon: terra },
  { title: 'Marte', icon: marte },
];
ReactDOM.render(
  <div>
    <div>
      <Search />
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {categories.map((category) => (
        <CategoryCard
          color={category.color}
          title={category.title}
          icon={category.icon}
        />
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {planets.map((planetCard) => (
        <PlanetCard title={planetCard.title} icon={planetCard.icon} />
      ))}
    </div>
  </div>,
  document.getElementById('root')
);

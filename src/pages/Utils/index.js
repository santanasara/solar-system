import mercurio from '../../assets/astros/Mercury.png';
import venus from '../../assets/astros/Venus.png';
import terra from '../../assets/astros/Earth.png';
import marte from '../../assets/astros/Mars.png';
import uranus from '../../assets/astros/Uranus.png';
import saturn from '../../assets/astros/Saturn.png';
import pluto from '../../assets/astros/Pluto.png';
import neptune from '../../assets/astros/Neptune.png';
import jupiter from '../../assets/astros/Jupiter.png';
import sol from '../../assets/astros/Sun.png';

export const getImage = (title) => {
  switch (title) {
    case 'Mercúrio':
      return mercurio;
    case 'Vênus':
      return venus;
    case 'Terra':
      return terra;
    case 'Marte':
      return marte;
    case 'Saturno':
      return saturn;
    case 'Júpiter':
      return jupiter;
    case 'Netuno':
      return neptune;
    case 'Plutão':
      return pluto;
    case 'Urano':
      return uranus;
    case 'Sol':
      return sol;
    default:
      break;
  }
  return '';
};

export const getImageById = (id) => {
  const newId = parseInt(id, 10);
  switch (newId) {
    case 0:
      return mercurio;
    case 1:
      return venus;
    case 2:
      return terra;
    case 3:
      return marte;
    case 4:
      return jupiter;
    case 5:
      return saturn;
    case 6:
      return uranus;
    case 7:
      return neptune;
    case 8:
      return pluto;
    case 9:
      return sol;
    default:
      break;
  }
  return '';
};

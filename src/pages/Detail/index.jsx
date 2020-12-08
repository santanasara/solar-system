import React, { useEffect, useState } from 'react';

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
import { getDetail } from './services';

const Detail = () => {
  const [data, setData] = useState(undefined);
  const [itemToSearch, setItemToSearch] = useState('');

  const getImage = (title) => {
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
      case 'Pluto':
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
  useEffect(() => {
    const searchItem = window.location.href.split('/')[4];
    setItemToSearch(searchItem);
    getDetail(searchItem).then((response) => {
      setData(response.msg[0]);
    });
  }, []);
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        maxWidth: '100%',
        maxHeight: '100%',
        background: 'white',
      }}>
      <div
        style={{
          backgroundColor: '#151515',
          width: '100%',
          height: '35%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          top: '10%',
        }}>
        <img src={getImage(itemToSearch)} style={{}} alt="planet" />
      </div>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '65%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        {data !== undefined && (
          <div style={{ padding: '60px 0', width: '40vw', minWidth: '400px' }}>
            <h1 style={{ marginBottom: 0 }}>{data.title}</h1>
            <p style={{ margin: 0, padding: 0, fontSize: '0.9em' }}>
              {data.about}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;

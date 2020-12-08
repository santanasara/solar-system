import React, { useEffect, useState } from 'react';

import { getDetail } from './services';
import { getImageById } from '../Utils';

const Detail = () => {
  const [data, setData] = useState(undefined);
  const [itemToSearch, setItemToSearch] = useState('');

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
        <img
          src={getImageById(itemToSearch)}
          alt="planet"
          style={{ maxWidth: 250, height: 'auto' }}
        />
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

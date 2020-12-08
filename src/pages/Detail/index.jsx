import React from 'react';

import uranus from '../../assets/astros/Uranus.png';

const Detail = () => {
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
        <img src={uranus} style={{}} alt="planet" />
      </div>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '65%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <div style={{ padding: '60px 0', width: '40vw', minWidth: '400px' }}>
          <h1 style={{ marginBottom: 0 }}>Urano</h1>
          <p style={{ margin: 0, padding: 0, fontSize: '0.9em' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            temporibus sapiente id fuga nam ipsa corporis, laudantium dolores
            modi nihil reprehenderit libero in quae maiores! A voluptates neque
            recusandae est?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

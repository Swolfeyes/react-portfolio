import React from 'react';

import LazyLoadedImage from './LazyLoadedImage';

import reactLogo from '../assets/logos/react-logo.png'; 
import reduxLogo from '../assets/logos/redux-logo.png';
import javascriptLogo from  '../assets/logos/javascript-logo.png'; 
import sassLogo from '../assets/logos/sass-logo.png'; 

import styles from '../styles/Logos.scss';

const Logos = () => (
  <div className={styles['logos']}>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
        type='logo' 
        imageUrl={reactLogo}
        alt='React logo'
      />
    </div>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
        type='logo' 
        imageUrl={reduxLogo}
        alt='Redux logo'
      />
    </div>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
      type='logo' 
      imageUrl={javascriptLogo}
      alt='Javascript logo' 
      />
    </div>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
      type='logo' 
      imageUrl={sassLogo}
      alt='Sass logo' 
      />
    </div>
  </div>
)

export default Logos;
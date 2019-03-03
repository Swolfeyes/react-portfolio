
import React from 'react';

import LazyLoadedImage from './LazyLoadedImage';

import styles from '../styles/Logos.scss';

const Logos = () => (
  <div className={styles['logos']}>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
        type='logo' 
        imageUrl='src/assets/logos/react-logo.png' 
        alt='React logo'
      />
    </div>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
        type='logo' 
        imageUrl='src/assets/logos/redux-logo.png' 
        alt='Redux logo'
      />
    </div>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
        type='logo' 
        imageUrl='src/assets/logos/sass-logo.png' 
        alt='Sass logo' 
      />
    </div>
    <div className={styles['logos__item']}>
      <LazyLoadedImage 
        type='logo' 
        imageUrl='src/assets/logos/javascript-logo.png' 
        alt='Javascript logo' 
      />
    </div>
  </div>
)

export default Logos;
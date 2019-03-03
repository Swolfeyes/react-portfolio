import React from 'react';

import styles from '../styles/Footer.scss';
import Contact from './Contact';

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <Contact />
    </div>
  )
}

Footer.displayName = 'Footer';

export default Footer;
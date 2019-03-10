import React from 'react';

import SocialIcons from './SocialIcons';

import mobileIcon from '../assets/icons/mobile.png';

import styles from '../styles/Contact.scss';

const Contact = () => (
  <div className={styles['contact']}>
    <div className={styles['contact__main']}>
      <div className={styles['contact__main__header']}>
        <h2>Get in touch</h2>
      </div>
      <div className={styles['contact__main__body']}>
        <div className={styles['contact__main__body__social-icons']}>
          <SocialIcons />
        </div>
        <div className={styles['contact__main__body__mobile']}>
          <div className={styles['contact__main__body__mobile__icon']}>
            <img src={mobileIcon} alt='Mobile' />
          </div>
          <div className={styles['contact__main__body__mobile__number']}>
            <p>+44 7448484071</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Contact;
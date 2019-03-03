import React from 'react';

import Icon from './Icon/Icon';

import styles from '../styles/SocialIcons.scss';

const SocialIcons = () => (
  <div className={styles['icons']}>
    <div className={styles['icons__item']}>
      <a href='https://github.com/Swolfeyes' target='_blank'>
        <Icon iconName='Github' />
      </a>
    </div>
    <div className={styles['icons__item']}>
      <a href='mailto:s.occhilupo87@gmail.com'>
        <Icon iconName='Mail' />
      </a>
    </div>
    <div className={styles['icons__item']}>
      <a href='https://www.linkedin.com/in/stefania-occhilupo' target='_blank'>
        <Icon iconName='Linkedin' />
      </a>           
    </div>        
  </div>
)

export default SocialIcons;
import React from 'react';

import SVGInline from 'react-svg-inline';

import Mail from './SVG/mail.svg';
import Linkedin from './SVG/linkedin.svg';
import Github from './SVG/github.svg';

import styles from '../../styles/Icon.scss';

const Icon = ({ iconName }) => {

  const icons = { Mail, Linkedin, Github };

  return (
    <div className={styles['icon']}>
      <SVGInline svg={icons[iconName]} />
    </div>
  );
}

Icon.displayName = 'Icon';

export default Icon;
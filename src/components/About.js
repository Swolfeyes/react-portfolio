import react from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Logos from './Logos';
import LazyLoadedImage from './LazyLoadedImage';

import styles from '../styles/About.scss';

const About = () => (
    <div id='sub' className={styles['about']}>
        <div className={styles['about__header']}>
            <h1>About</h1>
        </div>
        <div className={styles['about__image']}>
        </div>
        <div className={styles['about__main']}>
            <div className={styles['about__main__logos']}>
                <Logos />
            </div>
            <div className={styles['about__main__description']}>
                <ReactTypingEffect
                    eraseDelay={1500}
                    typingDelay={1000}
                    text={["Front End Developer,", "reader,", "traveller.", "Working with React,",  "Javascript,", "and Sass."]}
                />
            </div>
        </div>
   </div>
)

export default About;
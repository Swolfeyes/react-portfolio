import react from 'react';

import SocialIcons from './SocialIcons';

import styles from '../styles/Home.scss';

const Home = () => (
		<div id='home' className={styles['home']}>
			<div className={styles['home__main']}>
				<span className={styles['home__main__animated-border']}></span>
				<span className={styles['home__main__animated-border']}></span>
				<span className={styles['home__main__animated-border']}></span>
				<span className={styles['home__main__animated-border']}></span>
				<h1>Stefania Occhilupo</h1>
				<h3>Front End Developer</h3>
				<div className={styles['home__main__icons']}>
					<SocialIcons />
				</div>
      </div>
    </div>
)


export default Home;
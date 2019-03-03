import React from 'react';

import Hamburger from './Hamburger';

import styles from '../styles/Navbar.scss';

import classnames from 'classnames/bind';

import { HashLink as NavLink } from 'react-router-hash-link';

const cx = classnames.bind(styles);

const Navbar = ({ view, open, onNavItemClick, onIconClick }) => {

    const navbarClasses = cx({
        'navbar': true,
        'navbar--mobile': view === 'tablet&mobile',
        'navbar--mobile--open': !!open,
    });

    return (
        <div className={navbarClasses}>
            {
                view === 'tablet&mobile' && <Hamburger onIconClick={onIconClick} clicked={!!open} />
            }
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink smooth to='/#home'><span>Home</span></NavLink>
            </div>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink smooth to='/about#sub'><span>About</span></NavLink>
            </div>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink smooth to='/projects#projects'><span>Projects</span></NavLink>
            </div>
            {
            view === 'tablet&mobile' &&
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink smooth to='/contact'><span>Contact</span></NavLink>
            </div>
            }
        </div>
    )
}


export default Navbar;
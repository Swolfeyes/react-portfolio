import React from 'react';

import Hamburger from './Hamburger';

import styles from '../styles/Navbar.scss';

import classnames from 'classnames/bind';

import { Link, animateScroll as scroll } from "react-scroll";

import { HashLink as NavLink } from 'react-router-hash-link';

const cx = classnames.bind(styles);

const Navbar = ({ view, open, onNavItemClick, onIconClick }) => {

    const navbarClasses = cx({
        'navbar': true,
        'navbar--mobile': view === 'tablet&mobile',
        'navbar--mobile--open': !!open,
    });

    return (
        <div>
        {
        view === 'desktop' && 
        <div className={navbarClasses}>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <Link smooth to='home'><span>Home</span></Link>
            </div>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <Link smooth to='sub'><span>About</span></Link>
            </div>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <Link smooth to='projects'><span>Projects</span></Link>
            </div>
        </div>
        }
        {
        view === 'tablet&mobile' &&
        <div className={navbarClasses}>
            <Hamburger onIconClick={onIconClick} clicked={!!open} />
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink to='/'><span>Home</span></NavLink>
            </div>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink to='/about'><span>About</span></NavLink>
            </div>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink to='/projects'><span>Projects</span></NavLink>
            </div>
            <div onClick={onNavItemClick} className={styles['navbar__item']}>
                <NavLink to='/contact'><span>Contact</span></NavLink>
            </div>
        </div>
        }
        </div>
    )
}


export default Navbar;
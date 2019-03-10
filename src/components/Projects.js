import React from 'react';

import LazyLoad from 'react-lazy-load';

import { projects } from '../data/projects.js';

import classnames from 'classnames/bind';
import styles from '../styles/Projects.scss';

const cx = classnames.bind(styles);

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
        }
    }

    handleImageLoad() {
        this.setState({
            loaded: true,
        });
    }

    render() {
        const { loaded } = this.state;

        const containerClasses = cx({
            'projects__body__item__image': true,
            'projects__body__item__image--loading': !loaded,
            'projects__body__item__image--loaded': !!loaded,
        })

        return (
            <div id='projects' className={styles['projects']}>
                <div className={styles['projects__header']}>
                    <h1>Projects</h1>
                </div>
                <div className={styles['projects__body']}>
                {
                    projects.map((item, i) => {
                        return (
                            <div key={i} className={styles['projects__body__item']}>
                                <LazyLoad width='100%' debounce={false} throttle={250} offsetVertical={-50}> 
                                    <div className={containerClasses}>
                                        <img 
                                            src={item.image.url} 
                                            alt={item.image.alt} 
                                            onLoad={() => this.handleImageLoad()} 
                                        />  
                                    </div> 
                                </LazyLoad>
                                <div className={styles['projects__body__item__details']}>
                                    <h3>{item.projectName}</h3>
                                    <p className={styles["text"]}>{item.tech.join(', ')}</p>
                                    <div className={styles['projects__body__item__details__link']}>
                                        <a target="_blank" href={item.projectUrl}><span>View Project</span></a>
                                    </div>
                                </div>
                            </div>            
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Projects;

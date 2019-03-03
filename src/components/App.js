import React from 'react';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

import styles from '../styles/App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            view: 'desktop',
        }

        this.handleViewportChange = this.handleViewportChange.bind(this);
    }
    
    componentDidMount() {
        this.handleViewportChange();

        window.addEventListener('resize', this.handleViewportChange);
    }

    
    handleViewportChange() {
        if(window.matchMedia("(max-width: 1024px)").matches) {
            this.setState({
                view: 'tablet&mobile'
            });
        } else {
            this.setState({
                view: 'desktop'
            });
        }
    }
    

    handleIconClick() {
        this.setState(prevState => ({
            mobileNavbarOpen: !prevState.mobileNavbarOpen,
        }));
    }

    handleNavItemClick() {
        this.setState({
            mobileNavbarOpen: false,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleViewportChange);
    }

    render() {
        
        const { view, mobileNavbarOpen } = this.state;

        return (
            <div className={styles['app']}>
                <Navbar 
                    view={view} 
                    open={mobileNavbarOpen} 
                    onNavItemClick={() => this.handleNavItemClick()}
                    onIconClick={() => this.handleIconClick()}
                 />
                <Main view={view} />
                {
                    view === 'desktop' && <Footer />
                }
            </div>
        )
    }
}

App.displayName = 'App';

export default App;
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

const Main = ({ view }) => {

    return (
        <div>
        {
            view === 'tablet&mobile' &&
            (
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/contact' component={Contact} />
                </Switch>
            )
        }   
        {
            view === 'desktop' &&
            (
                <div>
                    <Home />
                    <About />
                    <Projects />
                </div>
            )
        }    
        </div>
    )
}

export default Main;
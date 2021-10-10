import React from 'react';
import './style.css';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';
import { Redirect, Route, Switch } from 'react-router';


const NavAnimate = () => {
    return (
        <>
        <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/service' component={Service}/>
                <Route exact path='/contact' component={Contact}/>
                <Redirect to='/'/>
            </Switch>
            <Footer/>
        </>
    )
}

export default NavAnimate;

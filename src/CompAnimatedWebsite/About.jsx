import React from 'react';
import web from '../CompAnimatedWebsite/images/about.png';
import Commmon from './Common';

const About = () => {
    return (
        <>
              <Commmon 
              name="Welcome to About Page" 
              imgsrc={web} 
              visit='/contact'
              btname="Contact Now" />
        </>
    )
}

export default About;

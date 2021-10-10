import React from 'react';
import web from '../CompAnimatedWebsite/images/home.svg';
import Commmon from './Common';

const Home = () => {
    return (
        <>
       <Commmon
         name="Grow Your Business With" 
         imgsrc={web} 
         visit='/service'
         btname="Get Started"
         />            
        </>
    )
}

export default Home;

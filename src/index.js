import React from 'react';
import Reactdom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';      
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import NavAnimate from './CompAnimatedWebsite/NavAnimate';
import {BrowserRouter} from 'react-router-dom';


Reactdom.render(<BrowserRouter>
                     <NavAnimate/>
               </BrowserRouter>
    ,document.getElementById("root"));
import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink exact className="navbar-brand" to="/">
                         <span> EduCreators </span></NavLink>

                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                  <ul className="navbar-nav mb-2 mb-lg-0">
                                  <li className="nav-item">
                                   <NavLink activeClassName='menu' exact  className="nav-link active"  to="/">
                                    <span>home</span> </NavLink>
                                  </li>
                                  <li className="nav-item">
                                  <NavLink  activeClassName="menu"  exact className="nav-link active" to="/service">
                                      <span>Services</span></NavLink>
                                  </li>

                                  <li className="nav-item">
                                  <NavLink activeClassName="menu" exact  className="nav-link active" to="/about">
                                     <span>About</span> </NavLink>
                                  </li>

                                  <li className="nav-item">
                                  <NavLink  activeClassName="menu" exact className="nav-link active" to="/contact">
                                    <span> Contact</span></NavLink>
                                  </li>
                                 </ul>
                                 </div>
                            </div>
                        </div>
                </nav>

                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;

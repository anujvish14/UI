import React from 'react';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import HomeLink from '../Links/HomeLink';
import AboutLink from '../Links/AboutLink';
import PortfolioLink from '../Links/PortfolioLink';
import ContactLink from '../Links/ContactLink';
function Header() 
{

    const handleOpen = ()=>
    {
        $(".body-tag").addClass("box-collapse-open")
    }
    return (
        <>
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed show" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link className="navbar-brand text-brand" to="index.html">SB<span className="color-b"><small>V</small></span></Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">

                            <li className="nav-item home-link">
                                <HomeLink />
                            </li>

                            <li className="nav-item about-link">
                                <AboutLink />
                            </li>

                            <li className="nav-item">
                                <PortfolioLink/>
                            </li>
{/* 
                            <li className="nav-item">
                                <Link className="nav-link " to="blog-grid.html">Blog</Link>
                            </li> */}

                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item " to="property-single.html">Property Single</Link>
                                    <Link className="dropdown-item " to="blog-single.html">Blog Single</Link>
                                    <Link className="dropdown-item " to="agents-grid.html">Agents Grid</Link>
                                    <Link className="dropdown-item " to="agent-single.html">Agent Single</Link>
                                </div>
                            </li> */}
                            <li className="nav-item">
                                <ContactLink/>
                            </li>
                        </ul>
                    </div>

                    <button onClick={handleOpen} type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
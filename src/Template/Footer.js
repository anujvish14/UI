import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="nav-footer">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">About</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">Property</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">Blog</Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="#">
                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    &copy; Copyright &nbsp;
                                    <span className="color-a">SB Vishwakarma</span> All Rights Reserved.
                                </p>
                            </div>
                            <div className="credits">
                                Designed by <Link to="#">Anuj</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
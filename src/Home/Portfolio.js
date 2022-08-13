import React from 'react'
import Footer from '../Template/Footer'
import Header from '../Template/Header'
import SearchSection from '../Template/SearchSection'
import { Link } from 'react-router-dom';
import FooterSection from '../Template/FooterSection'
import PortfolioList from './PortfolioList';

function Portfolio() 
{
    return (
        <>
            <Header link="portfolio"/>
            <SearchSection />
            <div id='main'>
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">Some of our Amazing Works</h1>
                                    <span className="color-text-a">Below are the few samples of work done by our super team.</span>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="../">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Portfolio
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="property-grid grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="grid-option">
                                    <form>
                                        <select className="custom-select">
                                            <option defaultChecked={true}>All</option>
                                            <option value="1">New to Old</option>
                                            <option value="2">For Rent</option>
                                            <option value="3">For Sale</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            {
                                <PortfolioList/>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex="-1">
                                            <span className="bi bi-chevron-left"></span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item next">
                                        <a className="page-link" href="#">
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
            <FooterSection/>
            <Footer />
        </>
    )
}

export default Portfolio
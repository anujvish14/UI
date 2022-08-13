import React from 'react'
import Footer from '../Template/Footer'
import Header from '../Template/Header'
import SearchSection from '../Template/SearchSection'
import imageFirst from '../assets/img/portfolio/IMAGE_8.jpg';
import imageTwo from '../assets/img/portfolio/IMAGE_9.jpg';
import HomeLink from '../Links/HomeLink';
import FooterSection from '../Template/FooterSection';
function About() {
    return (
        <>
            <Header link="about" />
            <SearchSection />
            <div id="main">
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">We Do Great Design For Creative Folks</h1>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <HomeLink/>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            About
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 position-relative">
                                <div className="about-img-box">
                                    <img src={imageFirst} alt="bedroom" className="img-fluid" />
                                </div>
                                <div className="sinse-box">
                                    <h3 className="sinse-title">SB Vishwakarma
                                    </h3>
                                    <p>Bedroom Design</p>
                                </div>
                            </div>
                            <div className="col-md-12 section-t8 position-relative">
                                <div className="row">
                                    <div className="col-md-6 col-lg-5">
                                        <img src={imageTwo} alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-lg-2  d-none d-lg-block position-relative">
                                        <div className="title-vertical d-flex justify-content-start">
                                            <span>SB Vishwakarma Exclusive Desings</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-5 section-md-t3">
                                        <div className="title-box-d">
                                            <h3 className="title-d">Sed
                                                <span className="color-d">porttitor</span> lectus
                                                <br /> nibh.
                                            </h3>
                                        </div>
                                        <p className="color-text-a">
                                        We have a team of professional designers who work hard to make sure your space looks gorgeous.
                                        You can shop at the comfort of your home with online appliance store, having thousands of products for your kitchen. Enjoy the convenience of home delivery, 24*7 service and one to one personal customer care.
                                        </p>
                                        <p className="color-text-a">
                                        As we are the known brand in the industry with a huge inventory of modular kitchen furniture from renowned brands such as Bougainvillea, Golden Fleet, Interflora, Little Designs. We are also in stock with faucets and other accessories. We have 5 store locations across Delhi NCR, Gurgaon, Noida, Mumbai and Bangalore.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-agents section-t8">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-wrap d-flex justify-content-between">
                                    <div className="title-box">
                                        <h2 className="title-a">Meet Our Team</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-7.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Margaret Sotillo
                                                        <br /> Escala</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-6.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Stiven Spilver
                                                        <br /> Darw</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-dribbble" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-box-d">
                                    <div className="card-img-d">
                                        <img src="assets/img/agent-5.jpg" alt="" className="img-d img-fluid" />
                                    </div>
                                    <div className="card-overlay card-overlay-hover">
                                        <div className="card-header-d">
                                            <div className="card-title-d align-self-center">
                                                <h3 className="title-d">
                                                    <a href="agent-single.html" className="link-two">Emma Toledo
                                                        <br /> Cascada</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="card-body-d">
                                            <p className="content-d color-text-a">
                                                Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                                            </p>
                                            <div className="info-agents color-a">
                                                <p>
                                                    <strong>Phone: </strong> +54 356 945234
                                                </p>
                                                <p>
                                                    <strong>Email: </strong> agents@example.com
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card-footer-d">
                                            <div className="socials-footer d-flex justify-content-center">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-facebook" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-twitter" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-instagram" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#" className="link-one">
                                                            <i className="bi bi-dribbble" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <FooterSection/>
            <Footer />
        </>
    )
}

export default About
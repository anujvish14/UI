import React from 'react'
import Footer from '../Template/Footer'
import Header from '../Template/Header'
import SearchSection from '../Template/SearchSection'
import './main.css';
import '../../node_modules/swiper/swiper-bundle.js';
import Property from './Property';
import FooterSection from '../Template/FooterSection';
import PortfolioList from './PortfolioList';
import Services from './Services';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
function Main() {
    return (<>
        <div className="click-closed"></div>
        <SearchSection />
        <Header />
        <div className="intro intro-carousel swiper position-relative">
            <Carousel autoPlay={true} interval={2500} emulateTouch={true} infiniteLoop={true} transitionTime={1500} showThumbs={false} swipeable={true}>
                <div className="swiper-slide carousel-item-a intro-item bg-image bg-image-1">
                    <div className="overlay overlay-a"></div>
                    <div className="intro-content display-table">
                        <div className="table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="intro-body">
                                            {/* <p className="intro-title-top">Mumbai,
                                                <br /> Maharashtra
                                            </p> */}
                                            <h1 className="intro-title mb-4 ">
                                                {/* <span className="text-danger">S<span className='text-primary'>B</span> </span> <span className='text-success'>V</span><span style={{ textTransform: "lowercase" }}>ishwakarma</span> */}
                                                <br /> Interior Designer
                                            </h1>
                                            <p className="intro-subtitle intro-price">
                                                <a href="#"><span className="price-a">Consult Now</span></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide carousel-item-a intro-item bg-image bg-image-2" >
                    <div className="overlay overlay-a"></div>
                    <div className="intro-content display-table">
                        <div className="table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="intro-body">
                                            <p className="intro-title-top">Doral, Florida
                                                <br /> 78345
                                            </p>
                                            <h1 className="intro-title mb-4">
                                                {/* <span className="color-b">204 </span> Rino */}
                                                <br /> Consultancy Service
                                            </h1>
                                            <p className="intro-subtitle intro-price">
                                                <a href="#"><span className="price-a">Consult Now</span></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide carousel-item-a intro-item bg-image bg-image-3">
                    <div className="overlay overlay-a"></div>
                    <div className="intro-content display-table">
                        <div className="table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="intro-body">
                                            <p className="intro-title-top">Doral, Florida
                                                <br /> 78345
                                            </p>
                                            <h1 className="intro-title mb-4">
                                                <span className="color-b">204 </span> Alira
                                                <br /> Roan Road One
                                            </h1>
                                            <p className="intro-subtitle intro-price">
                                                <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            
        </div>

        <main id="main">
            <section className="section-services section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Our Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Services />
                    </div>
                </div>
            </section>
            <section className="section-property section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Latest Projects</h2>
                                </div>
                                <div className="title-link">
                                    <Link to="../Portfolio">All Projects
                                        <span className="bi bi-chevron-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="property-carousel" className="swiper">
                        <div className="swiper-wrapper">

                            <PortfolioList />

                            <div className="carousel-item-b swiper-slide">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src="" alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="property-single.html">157 West
                                                        <br /> Central Park</a>
                                                </h2>
                                            </div>
                                            <div className="card-body-a">
                                                <div className="price-box d-flex">
                                                    <span className="price-a">rent | $ 12.000</span>
                                                </div>
                                                <a href="property-single.html" className="link-a">Click here to view
                                                    <span className="bi bi-chevron-right"></span>
                                                </a>
                                            </div>
                                            <div className="card-footer-a">
                                                <ul className="card-info d-flex justify-content-around">
                                                    <li>
                                                        <h4 className="card-info-title">Area</h4>
                                                        <span>340m
                                                            <sup>2</sup>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Beds</h4>
                                                        <span>2</span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Baths</h4>
                                                        <span>4</span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Garages</h4>
                                                        <span>1</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item-b swiper-slide">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src="assets/img/property-7.jpg" alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="property-single.html">245 Azabu
                                                        <br /> Nishi Park let</a>
                                                </h2>
                                            </div>
                                            <div className="card-body-a">
                                                <div className="price-box d-flex">
                                                    <span className="price-a">rent | $ 12.000</span>
                                                </div>
                                                <a href="property-single.html" className="link-a">Click here to view
                                                    <span className="bi bi-chevron-right"></span>
                                                </a>
                                            </div>
                                            <div className="card-footer-a">
                                                <ul className="card-info d-flex justify-content-around">
                                                    <li>
                                                        <h4 className="card-info-title">Area</h4>
                                                        <span>340m
                                                            <sup>2</sup>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Beds</h4>
                                                        <span>2</span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Baths</h4>
                                                        <span>4</span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Garages</h4>
                                                        <span>1</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item-b swiper-slide">
                                <div className="card-box-a card-shadow">
                                    <div className="img-box-a">
                                        <img src="assets/img/property-10.jpg" alt="" className="img-a img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-overlay-a-content">
                                            <div className="card-header-a">
                                                <h2 className="card-title-a">
                                                    <a href="property-single.html"> SB
                                                        <br /> Vishwakarma</a>
                                                </h2>
                                            </div>
                                            <div className="card-body-a">
                                                <div className="price-box d-flex">
                                                    <span className="price-a">rent | $ 12.000</span>
                                                </div>
                                                <a href="property-single.html" className="link-a">Click here to view
                                                    <span className="bi bi-chevron-right"></span>
                                                </a>
                                            </div>
                                            <div className="card-footer-a">
                                                <ul className="card-info d-flex justify-content-around">
                                                    <li>
                                                        <h4 className="card-info-title">Area</h4>
                                                        <span>340m
                                                            <sup>2</sup>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Beds</h4>
                                                        <span>2</span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Baths</h4>
                                                        <span>4</span>
                                                    </li>
                                                    <li>
                                                        <h4 className="card-info-title">Garages</h4>
                                                        <span>1</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="propery-carousel-pagination carousel-pagination"></div>

                </div>
            </section>
            {/* <section className="section-agents section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Best Agents</h2>
                                </div>
                                <div className="title-link">
                                    <a href="agents-grid.html">All Agents
                                        <span className="bi bi-chevron-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-box-d">
                                <div className="card-img-d">
                                    <img src="assets/img/agent-4.jpg" alt="" className="img-d img-fluid" />
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
                                    <img src="assets/img/agent-1.jpg" alt="" className="img-d img-fluid" />
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-news section-t8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Latest News</h2>
                                </div>
                                <div className="title-link">
                                    <a href="blog-grid.html">All News
                                        <span className="bi bi-chevron-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="news-carousel" className="swiper">
                        <div className="swiper-wrapper">

                            <div className="carousel-item-c swiper-slide">
                                <div className="card-box-b card-shadow news-box">
                                    <div className="img-box-b">
                                        <img src="assets/img/post-2.jpg" alt="" className="img-b img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-header-b">
                                            <div className="card-category-b">
                                                <a href="#" className="category-b">House</a>
                                            </div>
                                            <div className="card-title-b">
                                                <h2 className="title-2">
                                                    <a href="blog-single.html">House is comming
                                                        <br /> new</a>
                                                </h2>
                                            </div>
                                            <div className="card-date">
                                                <span className="date-b">18 Sep. 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item-c swiper-slide">
                                <div className="card-box-b card-shadow news-box">
                                    <div className="img-box-b">
                                        <img src="assets/img/post-5.jpg" alt="" className="img-b img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-header-b">
                                            <div className="card-category-b">
                                                <a href="#" className="category-b">Travel</a>
                                            </div>
                                            <div className="card-title-b">
                                                <h2 className="title-2">
                                                    <a href="blog-single.html">Travel is comming
                                                        <br /> new</a>
                                                </h2>
                                            </div>
                                            <div className="card-date">
                                                <span className="date-b">18 Sep. 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item-c swiper-slide">
                                <div className="card-box-b card-shadow news-box">
                                    <div className="img-box-b">
                                        <img src="assets/img/post-7.jpg" alt="" className="img-b img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-header-b">
                                            <div className="card-category-b">
                                                <a href="#" className="category-b">Park</a>
                                            </div>
                                            <div className="card-title-b">
                                                <h2 className="title-2">
                                                    <a href="blog-single.html">Park is comming
                                                        <br /> new</a>
                                                </h2>
                                            </div>
                                            <div className="card-date">
                                                <span className="date-b">18 Sep. 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item-c swiper-slide">
                                <div className="card-box-b card-shadow news-box">
                                    <div className="img-box-b">
                                        <img src="assets/img/post-3.jpg" alt="" className="img-b img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-header-b">
                                            <div className="card-category-b">
                                                <a href="#" className="category-b">Travel</a>
                                            </div>
                                            <div className="card-title-b">
                                                <h2 className="title-2">
                                                    <a href="#">Travel is comming
                                                        <br /> new</a>
                                                </h2>
                                            </div>
                                            <div className="card-date">
                                                <span className="date-b">18 Sep. 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="news-carousel-pagination carousel-pagination"></div>
                </div>
            </section>
            <section className="section-testimonials section-t8 nav-arrow-a">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Testimonials</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="testimonial-carousel" className="swiper">
                        <div className="swiper-wrapper">

                            <div className="carousel-item-a swiper-slide">
                                <div className="testimonials-box">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="testimonial-img">
                                                <img src="assets/img/testimonial-1.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="testimonial-ico">
                                                <i className="bi bi-chat-quote-fill"></i>
                                            </div>
                                            <div className="testimonials-content">
                                                <p className="testimonial-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                    debitis hic ber quibusdam
                                                    voluptatibus officia expedita corpori.
                                                </p>
                                            </div>
                                            <div className="testimonial-author-box">
                                                <img src="assets/img/mini-testimonial-1.jpg" alt="" className="testimonial-avatar" />
                                                <h5 className="testimonial-author">Albert & Erika</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item-a swiper-slide">
                                <div className="testimonials-box">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="testimonial-img">
                                                <img src="assets/img/testimonial-2.jpg" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="testimonial-ico">
                                                <i className="bi bi-chat-quote-fill"></i>
                                            </div>
                                            <div className="testimonials-content">
                                                <p className="testimonial-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                    debitis hic ber quibusdam
                                                    voluptatibus officia expedita corpori.
                                                </p>
                                            </div>
                                            <div className="testimonial-author-box">
                                                <img src="assets/img/mini-testimonial-2.jpg" alt="" className="testimonial-avatar" />
                                                <h5 className="testimonial-author">Pablo & Emma</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="testimonial-carousel-pagination carousel-pagination"></div>

                </div>
            </section> */}
            
        </main>


        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        <FooterSection />
        <Footer />
    </>
    )
}

export default Main
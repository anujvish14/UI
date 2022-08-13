import React from 'react'
import Footer from '../Template/Footer'
import Header from '../Template/Header'
import SearchSection from '../Template/SearchSection'
import { Link } from 'react-router-dom'
import HomeLink from '../Links/HomeLink';
import FooterSection from '../Template/FooterSection'
function Contact() {
  return (
    <>
    <SearchSection />
    <Header link="contact" />
    <main id="main">
    <section className="intro-single">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">Contact US</h1>
              <span className="color-text-a">
                For any type of queries or concern, Please reach out to us.
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <HomeLink />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-map box">
              <div id="map" className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120629.44742098305!2d72.81564905894788!3d19.122117500189756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7276902be65%3A0xe6d9f3e05c1b8326!2sSB%20Vishwakarna%20Interior%20Designer!5e0!3m2!1sen!2sin!4v1660309573582!5m2!1sen!2sin" width={"100%"} height="450" style={{border:"0"}} allowFullScreen={true} loading="lazy" title='company location' referrerPolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </div>
          </div>
          <div className="col-sm-12 section-t8">
            <div className="row">
              <div className="col-md-7">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input type="text" name="name" className="form-control form-control-lg form-control-a" autoComplete='off' placeholder="Your Name" required/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input name="email" type="email" className="form-control form-control-lg form-control-a"  autoComplete='off' placeholder="Your Email" required/>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input type="text" name="subject" className="form-control form-control-lg form-control-a"  autoComplete='off' placeholder="Subject" required/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" cols="45" rows="8" placeholder="Message" autoComplete='off' required></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 my-3">
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-a">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              <br/>
              <div className="col-md-5 section-md-t3">
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-envelope"></span>
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Say Hello</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">Email.
                        <span className="color-a">
                            <a href="mailto:asbvishwakarma@gmail.com">sbvishwakarma@gmail.com</a>
                        </span>
                      </p>
                      <p className="mb-1">Phone.
                        <span className="color-a">
                        <a href="tel:+91 8108364637">
                            +91 8108364637
                        </a>    
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-geo-alt"></span>
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Find us in</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        20 B Shangharsh Nagar
                        <br/> Maharashtra, India (400072)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box-icon">
                    <span className="bi bi-share"></span>
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title">Social networks</h4>
                    </div>
                    <div className="icon-box-content">
                      <div className="socials-footer">
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
        </div>
      </div>
    </section>
    </main>
    <FooterSection/>
    <Footer/>
    </>
  )
}

export default Contact
import React from 'react'
import imagePath from '../assets/img/property-1.jpg';
import ServiceItem from './ServiceItem';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ServiceImages } from './Images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GetDescriptionByTag } from './Images';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Services() {
    let serviceData =
        [
            {
                imagePath: "../assets/img/property-2.jpg",
                description: "My Super duper description"
            },
            {
                imagePath: "../assets/img/property-3.jpg",
                description: "My Super duper description"
            }
        ]
    return (
        <>
            {/* <div className="col-md-4">
                <div className="card-box-c foo">
                    <div className="card-header-c d-flex">
                        <div className="card-box-ico">
                            <span className="bi bi-house"></span>
                        </div>
                        <div className="card-title-c align-self-center">
                            <h2 className="title-c">Home</h2>
                        </div>
                    </div>
                    <div className="card-body-c">
                        <p className="content-c">
                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                            convallis a pellentesque
                            nec, egestas non nisi.
                        </p>
                    </div>
                    <div className="card-footer-c">
                        <a href="#" className="link-c link-icon">Read more
                            <span className="bi bi-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-box-c foo">
                    <div className="card-header-c d-flex">
                        <div className="card-box-ico">
                            <span className="bi bi-calendar4-week"></span>
                        </div>
                        <div className="card-title-c align-self-center">
                            <h2 className="title-c">Shop</h2>
                        </div>
                    </div>
                    <div className="card-body-c">
                        <p className="content-c">
                            Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit
                            aliquet elit, eget tincidunt
                            nibh pulvinar a.
                        </p>
                    </div>
                    <div className="card-footer-c">
                        <a href="#" className="link-c link-icon">Read more
                            <span className="bi bi-calendar4-week"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card-box-c foo">
                    <div className="card-header-c d-flex">
                        <div className="card-box-ico">
                            <span className="bi bi-card-checklist"></span>
                        </div>
                        <div className="card-title-c align-self-center">
                            <h2 className="title-c">Sell</h2>
                        </div>
                    </div>
                    <div className="card-body-c">
                        <p className="content-c">
                            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                            convallis a pellentesque
                            nec, egestas non nisi.
                        </p>
                    </div>
                    <div className="card-footer-c">
                        <a href="#" className="link-c link-icon">Read more
                            <span className="bi bi-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div> */}
            <section className="news-grid grid">
                <div className="container">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={10}
                                slidesPerView={1.5}
                                centeredSlides={true}
                                freeMode={true}
                                grabCursor={true}
                                loop={true}

                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true
                                }}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false
                                }}
                                navigation={true}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 1.5
                                    },
                                    700: {
                                        slidesPerView: 1.5
                                    }
                                }}
                                height={400}
                                enabled={true}
                                draggable={true}

                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>

                                    {ServiceImages().map((element, index)=>{
                                        return (<>
                                        <SwiperSlide>
                                            <ServiceItem imagePath={element} title="Modular Kitchen" tag={"Kitchen"} description={GetDescriptionByTag(element.split('_')[0])} />
                                        </SwiperSlide>
                                        </>)
                                    })
                                    }
                                
                            </Swiper>

                        </div></div>
                </div>
            </section>
        </>
    )
}

export default Services
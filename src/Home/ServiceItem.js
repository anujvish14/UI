import React from 'react'
import { Link } from 'react-router-dom'
function ServiceItem({imagePath, key, title ,description, tag}) {
    return (
        
        <>
            <div className="col-md " key={key}>
                <div className="card-box-b card-success">
                    <div className="img-box-b">
                        <img src={imagePath} alt="service" className="img-b img-fluid" style={{maxHeight: "600px"}} width="100%"/>
                    </div>
                    <div className="card-overlay">
                        <div className="card-header-b">
                            <div className="card-category-b">
                                <Link to="#" className="category-b text-white">{tag}</Link>
                            </div>
                            <div className="card-title-b">
                                <div className="title-2">
                                    <Link to="blog-single.html">{title}</Link>
                                </div>
                            </div>
                            <div className='card-body'>
                                {description}
                            </div>
                            <div className="card-date">
                                <span className="date-b">{key}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceItem
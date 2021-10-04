import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-light">
                        <div className="intro">
                            <h1>Welcome our Music Center!</h1>
                            <p>Music Tech Works Helps Creators License Popular Music For TV, Film, Video Games, And More. Contact Us And Discover How We Can Make Your Music Licensing Process Simpler!</p>
                            <button className="btn btn-danger">Read More</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
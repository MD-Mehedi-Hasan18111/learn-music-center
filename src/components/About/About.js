import React from 'react';
import aboutSideImg from '../../images/about-img2.jpg';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="container p-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <img className="w-100" src={aboutSideImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>About Us</h3>
                        <p>Never worry about licensing again. With Soundstripe, your membership covers the cost for every song license. Just find the right track, download the file, and get a custom license. That’s it. No channel or media-specific fees, no recurring royalties, ever. Here’s more good news: you have unlimited licenses. Go ahead, download as many songs as you want.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
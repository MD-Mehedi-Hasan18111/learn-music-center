import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Teachers from '../Teachers/Teachers';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <TopServices></TopServices>
            <Teachers></Teachers>
            <Footer></Footer>
        </div>
    );
};

export default Home;
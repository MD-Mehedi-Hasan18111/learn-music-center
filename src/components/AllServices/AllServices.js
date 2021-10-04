import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';

const AllServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./music.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    console.log(services);

    return (
        <div>
            <NavBar />
            <div className="container p-4">
                <h2 className="text-center my-3">All Services</h2>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    {
                        services.map(service => <Card
                            key={service.id}
                            service={service}
                        ></Card>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;
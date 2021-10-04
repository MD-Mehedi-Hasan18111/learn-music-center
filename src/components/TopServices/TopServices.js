import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const TopServices = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./music.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const topService = service.slice(0, 4);

    return (
        <div className="p-5">
            <h2 className="text-center mb-4">Our top Services</h2>
            <div className="container">
                <div className="row row-cols-lg-4">
                    {
                        topService?.map(service => <Card service={service}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopServices;
import React from 'react';

const Card = (props) => {

    console.log(props.service);

    const { img, capacity, price, intrument } = props.service;

    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg border-1">
                    <img height="200px" src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{intrument}</h5>
                        <p>Monthly Cost: $ {price}</p>
                        <p>Capacity on Class: {capacity} students.</p>
                        <button className="btn btn-danger">Apply Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
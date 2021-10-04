import React from 'react';
import img1 from '../../images/teacher-1.jpg';
import img2 from '../../images/teacher-2.jpg';
import img3 from '../../images/teacher-3.jpg';

const Teachers = () => {
    return (
        <div className="p-5">
            <div className="container">
                <h2 className="text-center mb-4">Our Music Teachers</h2>
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                    <div className="col">
                        <div className="card h-100 shadow-lg border-1">
                            <img height="200px" src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Alen Marken</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg border-1">
                            <img height="200px" src={img2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jign Postine</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-lg border-1">
                            <img height="200px" src={img3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Samira Sans</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
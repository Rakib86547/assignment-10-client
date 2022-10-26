import React from 'react';
import { Link } from 'react-router-dom';

const Summary = ({ tutorial }) => {
    // console.log(tutorial)
    const { title, image_url, _id } = tutorial;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-52' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-start">
                        <Link to={`/tutorials/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
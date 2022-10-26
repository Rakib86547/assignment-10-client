import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const details_tutorials = useLoaderData();
    const {title, details, image_url, category_id} = details_tutorials;
    // console.log(details_tutorials)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <img src={image_url} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/category/${category_id}`}>
                        <button className="btn btn-primary">Back to Category</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;
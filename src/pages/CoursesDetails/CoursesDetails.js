import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const details_tutorials = useLoaderData();
    const { title, details, image_url, category_id } = details_tutorials;
    // console.log(details_tutorials)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className='flex justify-between'>
                    <h2 className="card-title">{title}</h2>
                    <FaFileDownload></FaFileDownload>
                </div>

                <div className="card-body">
                    <img src={image_url} alt="Shoes" />
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
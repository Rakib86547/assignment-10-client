import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const details_tutorials = useLoaderData();
    const { title, details, image_url, category_id, _id } = details_tutorials;
    // console.log(details_tutorials)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">


                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{title}</h2>
                        <FaFileDownload className='cursor-pointer'></FaFileDownload>
                    </div>
                    <img className='rounded-md' src={image_url} alt="Shoes" />
                    <p>{details}</p>
                    <div className="card-actions justify-start">
                        <Link to='/check_page'>
                            <button className="btn btn-primary">Get Premium Access</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails;
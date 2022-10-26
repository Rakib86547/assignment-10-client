import React from 'react';

const CoursesTutorials = ({ tutorials }) => {
    const { img, name } = tutorials;
    console.log(tutorials)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-52' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default CoursesTutorials;
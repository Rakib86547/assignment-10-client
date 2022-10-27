import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesTutorials from '../CoursesTutorials/CoursesTutorials';

const Courses = () => {
    const allTutorials = useLoaderData();
    // console.log(allTutorials)
    return (
        <div>
            <h3>All Courses</h3>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    allTutorials.map(tutorials => <CoursesTutorials
                    key={tutorials._id}
                    tutorials={tutorials}
                        ></CoursesTutorials>)
                }
            </div>
        </div>
    );
};

export default Courses;
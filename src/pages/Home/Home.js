import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesTutorials from '../CoursesTutorials/CoursesTutorials';

const Home = () => {
    const programing_courses = useLoaderData();
    // console.log(programign_courses)
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                programing_courses.map(tutorials => <CoursesTutorials
                key={tutorials.id}
                tutorials={tutorials}
                ></CoursesTutorials>)
            }
        </div>
    );
};

export default Home;
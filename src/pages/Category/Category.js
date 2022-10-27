import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Summary from '../Summary/Summary';

const Category = () => {
    const tutorials = useLoaderData();
    // console.log(tutorials)
    return (
        <div>
            
            <div className='grid md:grid-cols-3 gap-4 mb-4'>
                {
                    tutorials.map(tutorial => <Summary
                    key={tutorial._id}
                    tutorial={tutorial}
                    ></Summary>)
                }
            </div>
        </div>
    );
};

export default Category;
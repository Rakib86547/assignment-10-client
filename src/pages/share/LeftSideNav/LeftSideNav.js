import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-side-chi.vercel.app/programing-category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.map(category => <p key={category.id}>
                    <Link className='border' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;
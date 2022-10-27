import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckMePages = () => {
	const checkTutorials = useLoaderData();
	console.log(checkTutorials)
	const {title, details, _id} = checkTutorials;
    return (
        <div>
            <h1>{title}</h1>
			<p>{details}</p>
			<Link to={`/tutorials/${_id}`}><button>Back</button></Link>
        </div>
    );
};

export default CheckMePages;
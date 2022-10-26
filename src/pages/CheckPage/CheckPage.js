import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutDetails from '../CheckOutDetails/CheckOutDetails';

const CheckPage = () => {
    const checks = useLoaderData();

    return (
        <div>
            {
                checks.map(check => <CheckOutDetails
                key={check.catetory_id}
                check={check}
                ></CheckOutDetails>)
            }
        </div>
    );
};

export default CheckPage;
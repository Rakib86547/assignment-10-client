import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div>
            <section className=" text-gray-100">
                <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
                    
                    <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <div className="flex flex-col w-full divide-y divide-gray-700">
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Billing</Link>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Support</Link>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Account</Link>
                        </div>
                        <div className="flex flex-col w-full divide-y divide-gray-700">
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Features</Link>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact us</Link>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">My orders</Link>
                        </div>
                        <div className="hidden w-full divide-y sm:flex-col sm:flex divide-gray-700">
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Enterprise</Link>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Privacy</Link>
                            <Link rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Developers</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
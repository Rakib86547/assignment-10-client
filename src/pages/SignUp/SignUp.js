import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="name" className="block dark:text-gray-400">Name</label>
                        <input type="text" name="name" id="username" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label for="username" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
                    <Link rel="noopener noreferrer" to="/login" className="underline text-gray-100">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
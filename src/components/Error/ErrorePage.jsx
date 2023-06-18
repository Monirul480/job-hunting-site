import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
const ErrorePage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='flex h-full justify-center items-center'>
           <div>
           <h1 className='font-extrabold text-9xl  mt-56 mb-6'>!404</h1>
            
            <Link
            to='/'
            className='px-8 py-3 ml-10 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
           </div>
        </div>
    );
};

export default ErrorePage;
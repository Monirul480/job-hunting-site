import React from 'react';

const Blog = () => {
    return (
        <div className='md:mx-20 mx-4 my-20 lg:mx-36'>
            <h1 className='text-xl font-semibold mt-6'>1. when should you context API?</h1>
            <h1><span className='text-xl font-semibold mt-3'>Ans :</span> Context is primarily used when when data send data a components to be accessible by many components at different nesting levels then i use context api</h1>
            <h1 className='text-xl font-semibold mt-6'>2. what is custom hook in react?</h1>
            <h1><span className='text-xl font-semibold mt-3'>Ans :</span> A custom hook in React is a reusable function that uses built-in hooks and other functions</h1>
            <h1 className='text-xl font-semibold mt-6'>3. what is use ref react?</h1>
            <h1><span className='text-xl font-semibold mt-3'>Ans :</span>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</h1>
            <h1 className='text-xl font-semibold mt-6'>4. what is useMemo react?</h1>
            <h1><span className='text-xl font-semibold mt-3'>Ans :</span>useMemo is a React hook used to optimize the performance of a component by memoizing the result of a function call.</h1>
            
        </div>
    );
};

export default Blog;
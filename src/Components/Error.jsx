import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center flex-col gap-3 w-full h-[100vh]'>
            <p className='text-5xl font-bold'>Route Not Found </p>
            <button onClick={()=>{navigate('/')}} className='btn btn-accent rounded-lg'>Home</button>
        </div>
    );
};

export default Error;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex-col-sm flex justify-between  px-24 shadow-lg p-5 items-center'>
            <div className='text-4xl font-bold'>
                <h1>Often Question</h1>
            </div>
            <div className='navbar '>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;
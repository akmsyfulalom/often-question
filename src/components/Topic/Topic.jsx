import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {

    const { id, name, logo, total } = topic;
    console.log(id)
    return (
        <div>
            <div className='border ml-5	rounded flex m-5 justify-between'>
                <img className='w-40 border ' src={logo} alt="" />

                <div className='flex p-3 justify-between items-center'>
                    <h2 className='font-bold'>{name}</h2>
                    <p className='font-bold mx-5 flex'>Q: {total}</p>
                    <Link to={`/quiz/${id}`}>
                        <button className='bg-indigo-600 text-white font-bold py-2 px-3 rounded'>Start Quiz</button>
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default Topic;
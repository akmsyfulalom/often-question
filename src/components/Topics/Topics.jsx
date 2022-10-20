import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const data = useLoaderData()
    const topics = data.data
    return (
        <div className='flex justify-center  '>
            <div >
                <div className=' text-center my-16 '>
                    <h1 className='text-4xl font-bold   '>Learn by testing yourself</h1>
                    <p className='font-bold'>We have created quizzes here on four topics. You can proceed by clicking on Start Quiz. </p>
                </div>
                <div className=' topics'>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;
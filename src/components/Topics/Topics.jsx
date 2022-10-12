import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const data = useLoaderData()
    const topics = data.data
    return (
        <div className='flex justify-center'>
            <div >
                <div className='text-4xl font-bold my-16 '>
                    <h1>This is my header</h1>
                </div>
                <div className='flex topics '>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;
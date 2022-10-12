import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const data = useLoaderData()
    const quizes = data.data.questions
    console.log(quizes)
    return (
        <div >
            {
                quizes.map(quiz => {
                    <p>{quiz.question
                    }</p>
                })
            }

        </div>
    );
};

export default Quiz;
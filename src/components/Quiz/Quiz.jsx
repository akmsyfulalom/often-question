import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const data = useLoaderData()
    const quizzes = data.data.questions
    console.log(quizzes);
    return (
        <div className='grid md-grid-cols-2' >
            {
                quizzes.map(quiz => <Questions key={quiz.id} quiz={quiz}></Questions>)
            }

        </div>
    );
};

export default Quiz;
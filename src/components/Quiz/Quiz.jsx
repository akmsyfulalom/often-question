import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const data = useLoaderData()
    const quizes = data.data.questions
    console.log(quizes)
    return (
        <div >
            {
                quizes.map((quiz, idx) => <Questions key={idx} quiz={quiz}></Questions>)
            }

        </div>
    );
};

export default Quiz;
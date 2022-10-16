import React from 'react';
import ChoseAns from '../ChoseAns/ChoseAns';

const Questions = ({ quiz }) => {


    const { question, options, correctAnswer } = quiz

    return (
        <div className='bg-emerald-200 m-5 justify-center mx-48 p-8 rounded'>
            <h2 className='text-2xl font-bold'>{question.slice(3, -4)}</h2>
            {
                options.map((option, index) => <ChoseAns key={index} option={option} correctAnswer={correctAnswer} ></ChoseAns>)
            }
        </div>
    );
};

export default Questions;
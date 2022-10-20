import React from 'react';
import ChoseAns from '../ChoseAns/ChoseAns';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ quiz }) => {


    const { question, options, correctAnswer } = quiz
    const eyeAns = () => {
        toast.success(correctAnswer)
    }

    return (
        <div className='bg-emerald-200 m-5 justify-center mx-48 p-8 rounded'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>{question.slice(3, -4)}</h2>
                <button onClick={eyeAns}>
                    <EyeIcon className="h-6 w-6 text-blue-600" />
                </button>
            </div>
            {
                options.map((option, index) => <ChoseAns key={index} option={option} correctAnswer={correctAnswer} ></ChoseAns>)
            }
        </div>
    );
};

export default Questions;
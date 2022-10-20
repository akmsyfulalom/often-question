import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChoseAns = ({ option, correctAnswer }) => {



    const result = () => {
        if (option === correctAnswer) {
            toast.success('Right answer')
        }
        else {
            toast.error('Wrong answer')
        }

    }


    return (
        <div>

            <div onClick={result} className=' cursor-pointer flex m-5 bg-white py-3 px-2 rounded-lg font-bold hover:bg-slate-400 hover:text-white'>
                <input onClick={result} className='cursor-pointer mr-1' type="radio" name="option" id="" />
                <ToastContainer />
                <p>{option}</p>
            </div>


        </div>
    );
};

export default ChoseAns;
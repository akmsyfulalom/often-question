import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,

} from "recharts";

const Statistics = () => {
    const [quizes, setQuizes] = useState([]);
    console.log(quizes);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const quizesLoaded = data.data.data;
                const displayQuizes = quizesLoaded.map(quiz => {
                    const eachData = {
                        name: quiz.name,
                        total: quiz.total
                    };
                    return eachData;
                })
                setQuizes(displayQuizes)

            })
    }, [])

    return (

        <div>
            <div className='flex justify-center items-center mt-10 font-bold text-3xl'>
                <h1>Quiz Alalytics Chart</h1>
            </div>
            <div className='flex items-center justify-around mt-10'>
                <AreaChart

                    width={500}
                    height={400}
                    data={quizes}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </div>

    );
};

export default Statistics;
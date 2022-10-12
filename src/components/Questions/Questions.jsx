import React from 'react';

const Questions = ({ topic }) => {
    console.log(topic);
    const { question, options } = topic

    return (
        <div>
            <h2>{question}</h2>

        </div>
    );
};

export default Questions;
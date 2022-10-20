import React from 'react';

const Blog = () => {
    return (
        <div>
            <div >
                <h1 className='flex text-4xl  justify-center mt-10 font-bold'>Learn more some topic</h1>
                <div className='mx-10 my-10'>
                    <div className='my-5'>
                        <p><span className='font-bold'>Q: 1.</span> What is the purpose of react router?</p>
                        <p><span className='font-bold'>Ans:</span> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                    </div>
                    <div className='my-5'>
                        <p><span className='font-bold'>Q: 2.</span> How does context API work?</p>
                        <p><span className='font-bold'>Ans:</span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    </div>
                    <div className='my-5'>
                        <p><span className='font-bold'>Q: 3.</span> What is use ref?</p>
                        <p><span className='font-bold'>Ans:</span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Blog;
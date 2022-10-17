import React from 'react';

const Blog = () => {
    return (
        <div>
            <div >
                <h1 className='flex text-4xl  justify-center mt-10 font-bold'>Learn more some topic</h1>
                <p>1. What is the purpose of react router?</p>
                <p>Ans: ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                <p>2. How does context API work?</p>
                <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>

            </div>
        </div>
    );
};

export default Blog;
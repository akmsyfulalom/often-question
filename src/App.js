
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Statstics from './components/Statistics/Statistics';
import Quiz from './components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [


        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/topics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        { path: '/statistics', element: <Statstics></Statstics> },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        }

      ]
    },
    { path: '*', element: <div>404 error</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import ProtectedLayout from '../layouts/protected';
import User from '../pages/user';
import Overview from '../pages/overview';
import Setting from '../pages/setting';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: '/overview',
                element: <Overview />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'setting',
                element: <Setting />
            },
        ],
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'login',
        element: <SignIn />
    },
    {
        path: 'sign-up',
        element: <SignUp />
    },
]);

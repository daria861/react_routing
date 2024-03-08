import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import StateHook from './Pages/StateHookPage/StateHook'
import Community from './Pages/Community/Community'
import Resources from './Pages/Resources/Resources'
import About from './Pages/About/About'
import Error from './Pages/Error/Error';
import {Users} from './Pages/Users/Users'
import {UserPage} from "./Pages/Users/UserPage";
import loader from './Pages/Users/Users';
import userLoader from './Pages/Users/UserPage';
// import usersData from './data/users.json'
import NewPage from './Pages/NewPage/New';
import './global.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';



const Root = () => {
    return (
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route element={<Welcome />}/>
            <Route path='/statehooks' element={<StateHook />} />
            <Route path='/community' element={<Community />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' loader={loader} element={<Users />} />
            <Route path='/users/:id' loader={userLoader} element={<UserPage />} errorElement={<Error />} />
            <Route path='*' element={<Error />} />
            <Route path='/new-page' element={<NewPage />} />

        </Route>
    )
)
root.render(
    <RouterProvider router={router} />
);

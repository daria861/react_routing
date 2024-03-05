import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import StateHook from './Pages/StateHookPage/StateHook'
import Community from './Pages/Community/Community'
import Resources from './Pages/Resources/Resources'
import About from './Pages/About/About'
import Users from './Pages/Users/Users'
import Error from './Pages/Error/Error';
import UserPage from "./Pages/Users/UserPage";
import usersData from './data/users.json'
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
            <Route path='/users' element={<Users />} />
            <Route path='/users/:userId' loader={loader} element={<UserPage />} errorElement={<Error />} />
            <Route path='*' element={<Error />} />

        </Route>
    )
)
root.render(
    <RouterProvider router={router} />
);


function loader({params}){

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(data => {
    //         const user = data.filter(obj => obj.id === params.userId)
    //     })



    const user = usersData.filter(e => e.id === params.userId);
 
    return user[0];
}

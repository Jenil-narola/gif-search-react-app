/** 
* @author: Jenil Narola
**/

import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './pages/GifExpertApp';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import GifExpertSavedApp from './pages/GifExpertSavedApp';

const router = createBrowserRouter([
    {
        path: "/",
        element: <GifExpertApp />,
    },
    {
        path: "/saved",
        element: <GifExpertSavedApp />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);



import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import React from 'react';
import Home from "../pages/Home";
import Character from "../pages/Character";

const AppRoutes = () => {
    const router = createBrowserRouter([{
        path: "/:numberPage",
        element: <Home />
    },
    {
        path: "/character/:id",
        element: <Character />
    },
    {
        path: "*",
        element: <Navigate to="/1" />
    }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes;

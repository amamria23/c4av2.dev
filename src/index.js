import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Javascript from './pages/javascript';
import ErrorPage from './errorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
  path: "/css",
  element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
    },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
serviceWorkerRegistration.register();


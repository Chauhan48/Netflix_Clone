import React from 'react';
import Login from './Login';
import Browse from './Browse';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TvShows from './TvShows';
import Movies from './Movies';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/tvshows',
      element: <TvShows />,
    },
    {
      path: '/movies',
      element: <Movies />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

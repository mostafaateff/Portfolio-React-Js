import React from 'react'
import './App.css';
import Layout from './Layout/Layout';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Start from './Start/Start';

export default function App() {

  const routes = createHashRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { path: 'portfolio', element: <Portfolio /> },
        { index:true , element:<Start/>},
        { path: 'about', element: <About /> },
        { path: 'contact' , element: <Contact/>}
      ]
    }
])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}


import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import AddUser from './pages/add-user'
import NotFound from './pages/not-found'

const App = () => {
  return (
    <div>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        {
          path: '/add',
          element: <AddUser />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ])}
    </div>
  )
}

export default React.memo(App)

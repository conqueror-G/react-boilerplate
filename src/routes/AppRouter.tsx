import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const P_Home = lazy(() => import('src/pages/Home'))
const P_Error = lazy(() => import('src/pages/Error'))

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <P_Home />,
    errorElement: <P_Error />,
  },
])

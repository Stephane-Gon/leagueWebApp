import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import AppRoutes from './routes'

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
          {
            AppRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))
          }
      </Route>
    </Routes>
  )
}

export default App


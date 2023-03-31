import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        {/* ADICIONAR AQUI AS NOVAS ROUTES */}
      </Route>
    </Routes>
  )
}

export default App


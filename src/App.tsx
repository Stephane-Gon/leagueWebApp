import { Routes, Route } from 'react-router-dom';

import AllChampions from './features/champions/AllChampions';
import Layout from './components/Layout';

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<AllChampions />}/>
        {/* ADICIONAR AQUI AS NOVAS ROUTES */}
      </Route>
    </Routes>
  )
}

export default App


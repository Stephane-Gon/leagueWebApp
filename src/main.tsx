import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './store/store';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}> {/* REDUX TOOLKIT STORE SETUP */}
      <Router>
        <Routes>
          <Route path="/*" element={<App/>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)

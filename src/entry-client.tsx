import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Auth'
import App from './App'


ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)

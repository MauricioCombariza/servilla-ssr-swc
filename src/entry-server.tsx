import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router-dom/server' 
import { AuthProvider } from './Auth'

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
      <StaticRouter location={url}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StaticRouter>
  )
  
  return { html }
}

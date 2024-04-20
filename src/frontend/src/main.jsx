import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VisionProvider } from './contexts/VisionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisionProvider>
      <App />
    </VisionProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VisionProvider } from './contexts/VisionContext.jsx'
import { LocationProvider } from './contexts/LocationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VisionProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </VisionProvider>
  </React.StrictMode>,
)

import { useContext } from 'react';
import { VisionContext } from './contexts/VisionContext';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'
import Analysis from './pages/Analysis'

function App() {
  const { submitted } = useContext(VisionContext);
  return (
    <div className='h-screen max-h-screen p-4 overflow-x-hidden max-w-screen bg-base-100'>
      <Router>
        <Routes>
          {submitted ? (
            <Route path="/" element={<Analysis></Analysis>} />
          ) : (
            <Route path="/" element={<Landing></Landing>} />
          )}
        </Routes>
      </Router>
    </div>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppShell from './pages/AppShell'
import Analysis from './pages/Analysis'

function App() {

  return (
    <div className='h-screen max-h-screen p-4 overflow-x-hidden max-w-screen bg-base-100'>
      <Router>
        <Routes>
        {/* Landing */}
          <Route path="/" element={<AppShell></AppShell>} />
          <Route path="/teste" element={<Analysis></Analysis>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

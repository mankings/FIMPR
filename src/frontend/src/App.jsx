import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth'
import Register from './pages/Register'
import AppShell from './pages/AppShell'
import Analysis from './pages/Analysis'

function App() {

  return (
    <div className='p-4 max-w-screen overflow-x-hidden bg-base-100 max-h-screen h-screen'>
      <Router>
        <Routes>
        {/* AUTH */}
          <Route path="/login" element={<Auth></Auth>} />
          <Route path="/register" element={<Register></Register>} />
        {/* Landing */}
          <Route path="/" element={<AppShell></AppShell>} />
          <Route path="/teste" element={<Analysis></Analysis>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

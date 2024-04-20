import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth'
import Register from './pages/Register'
import Context from './pages/Context'

function App() {

  return (
    <div className='p-4 max-w-screen overflow-x-hidden bg-base-100 max-h-screen h-screen'>
      <Router>
        <Routes>
        {/* AUTH */}
          <Route path="/" element={<Auth></Auth>} />
          <Route path="/register" element={<Register></Register>} />
        {/* Landing */}
          <Route path="/landing" element={<Context></Context>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

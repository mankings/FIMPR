import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
function App() {

  return (
    <div className='p-4 max-w-screen overflow-x-hidden'>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<h2>a</h2>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

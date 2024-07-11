import './App.css'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

    </div >
  )
}

export default App

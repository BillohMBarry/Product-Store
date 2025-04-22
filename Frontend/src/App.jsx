
import './App.css'
import HomePage from './Pages/HomePage'
import CreatePages from './Pages/CreatePages'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {


  return (
    <section class='bg-sky-950'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/creates' element={<CreatePages />}/>
      </Routes>
    
    </section>
  )
}

export default App

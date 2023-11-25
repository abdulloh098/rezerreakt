import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Console from './pages/Console'
import PC from './pages/PC'
import Mobile from './pages/Mobile'
import Admin from './pages/Admin'
import Store from './pages/Store'
import Lifestyle from './pages/Lifestyle'
import Pradukt from './pages/Pradukt'
import Cart from './pages/Cart'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/console' element={<Console />} />
        <Route path='/pc' element={<PC />} />
        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/lifestyle' element={<Lifestyle/>}/>
        <Route path='/pradukt' element={<Pradukt/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>

    </div>
  )
}

export default App
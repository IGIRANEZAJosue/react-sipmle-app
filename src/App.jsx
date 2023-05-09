import { useState } from 'react'
import './App.css'
import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'

function App() {
   return (
      <div className="app font-poppins text-gray-900">
         <BrowserRouter>
            <Search />
            <Category />
            <Pages />
         </BrowserRouter>
      </div>
   )
}

export default App

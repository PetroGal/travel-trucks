import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.module.css"
import HomePage from "../../pages/HomePage/HomePage.jsx"
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx"
import CamperDetailPage from "../../pages/CamperDetailPage/CamperDetailPage.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:id' element={<CamperDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App

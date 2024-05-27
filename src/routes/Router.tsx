import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Structor } from '../layouts/Structor'
import { Index } from '@/pages/Index'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Structor />}>
          <Route path='/' element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

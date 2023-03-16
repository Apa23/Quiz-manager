import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainMenu } from '../pages/MainMenu'

export const MainMenuRouter = () => {
  return (
    
        <Routes>
            <Route path='/' element={<MainMenu />}/>
            <Route path='/*' element={<Navigate to='/' />}/>
        </Routes>
    
  )
}

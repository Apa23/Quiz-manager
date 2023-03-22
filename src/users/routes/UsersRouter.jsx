import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainMenu } from '../pages/MainMenu'

export const UsersRouter = () => {
  return (
    
        <Routes>
            <Route path='/' element={<MainMenu />}/>
            <Route path='/*' element={<Navigate to='/users' />}/>
        </Routes>
    
  )
}

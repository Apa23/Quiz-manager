import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UsersManagement } from '../../users/pages/UsersManagement'
import { MainMenu } from '../pages/MainMenu'

export const MainMenuRouter = () => {
  return (
    
        <Routes>
            <Route path='/' element={<MainMenu />}/>
            <Route path='/users' element={<UsersManagement />}/>
            <Route path='/*' element={<Navigate to='/' />}/>
        </Routes>
    
  )
}

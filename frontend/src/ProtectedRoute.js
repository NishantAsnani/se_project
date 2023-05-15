import {Navigate, Outlet} from 'react-router-dom'
import React from 'react'
import { useAuth } from './Pages/auth'

 const ProtectedRoute = ({children}) => {
   const auth=useAuth()
   if(!auth.user)
   {
    return <Navigate to='/Login'></Navigate>
   }
   return children
}
export default ProtectedRoute


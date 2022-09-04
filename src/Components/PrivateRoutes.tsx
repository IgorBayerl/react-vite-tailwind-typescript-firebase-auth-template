import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import DashNavbar from './DashNavbar'

export default function PrivateRoutes() {
  const { currentUser } = useAuth()

  return currentUser ? (
    <>
      <DashNavbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}

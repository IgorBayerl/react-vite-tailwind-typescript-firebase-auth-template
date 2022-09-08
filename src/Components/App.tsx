import Signup from './Signup'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoutes from './PrivateRoutes'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Projects from './Projects'
import { ToastProvider } from '../contexts/ToastContext'
import { ApiProvider } from '../contexts/ApiContext'
import 'react-toastify/dist/ReactToastify.min.css'
import AppContextProviders from '../contexts/AppContextProvider'

function App() {
  const providers = [ToastProvider, AuthProvider, ApiProvider]
  return (
    <Router>
      <AppContextProviders components={providers}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/" />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AppContextProviders>
    </Router>
  )
}

export default App
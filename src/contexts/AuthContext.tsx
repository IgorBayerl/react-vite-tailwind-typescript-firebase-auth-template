import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from 'firebase/auth'

interface IAuthProviderProps {
  children: JSX.Element
}

const AuthContext = React.createContext({})

export function useAuth(): any {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<any>()
  const [loading, setLoading] = useState(true)

  function signup(email: string, password: string): Promise<any> {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function googleSignin(): Promise<any> {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function githubSignin(): Promise<any> {
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth, provider)
  }

  function login(email: string, password: string): Promise<any> {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout(): Promise<any> {
    return auth.signOut()
  }

  function resetPassword(email: string): Promise<any> {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email: string): Promise<any> {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password: string): Promise<any> {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    googleSignin,
    githubSignin,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

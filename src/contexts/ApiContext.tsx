import React, { useContext } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import { useAuth } from '../contexts/AuthContext'

interface IApiProviderProps {
  children: JSX.Element
}

const ApiContext = React.createContext({})

export function useApi(): any {
  return useContext(ApiContext)
}

export function ApiProvider({ children }: IApiProviderProps): JSX.Element {
  const { getCurrentUserToken } = useAuth()

  const axiosConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL,
  }
  const api = axios.create(axiosConfig)

  api.interceptors.request.use(async (config: any) => {
    if (config.url != '/users/login') {
      const token = await getCurrentUserToken()
      if (config?.headers && token) {
        config.headers.Authorization = `${token}`
      }
    }

    return config
  })

  const value = {
    api,
  }

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
}

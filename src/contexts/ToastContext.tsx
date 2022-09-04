import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

interface IToastProviderProps {
  children: JSX.Element
}

const ToastContext = React.createContext({})

export function useToast(): any {
  return useContext(ToastContext)
}

export enum EToastTypes {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export function ToastProvider({ children }: IToastProviderProps): JSX.Element {
  function showTypedToast(
    type: EToastTypes,
    message: string = '',
    autoClose = 5000,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnHover = true,
    draggable = true,
    progress = undefined
  ): void {
    toast[type](message, {
      position: 'bottom-right',
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
    })
  }

  function showToast(
    message: string = '',
    autoClose = 5000,
    hideProgressBar = false,
    closeOnClick = true,
    pauseOnHover = true,
    draggable = true,
    progress = undefined
  ) {
    toast(message, {
      position: 'bottom-right',
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress,
    })
  }

  function showError(message: string, code?: string) {
    toast.error(!!code ? `${code} - ${message}` : message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  const value = {
    showError,
    showTypedToast,
    showToast,
  }

  return (
    <ToastContext.Provider value={value}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </ToastContext.Provider>
  )
}

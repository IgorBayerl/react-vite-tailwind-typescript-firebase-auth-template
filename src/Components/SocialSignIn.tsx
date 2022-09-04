import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export interface ISocialSignInProps {
  enabled?: boolean
  setError: (error: string) => void
}

export function SocialSignIn({ enabled = true, setError }: ISocialSignInProps) {
  const { googleSignin, githubSignin } = useAuth()
  const navigate = useNavigate()

  async function handleGoogleLogin(): Promise<void> {
    try {
      setError('')
      await googleSignin()
      navigate('/')
    } catch {
      setError('Failed to log in with Google')
    }
  }

  async function handleGithubLogin(): Promise<void> {
    try {
      setError('')
      await githubSignin()
      navigate('/')
    } catch (err) {
      console.log(err)
      setError('Failed to log in with GitHub')
    }
  }
  return (
    <div className=" gap-2 flex justify-between flex-wrap">
      <button
        onClick={handleGoogleLogin}
        disabled={!enabled}
        className=" min-w-fit relative flex flex-grow  justify-center rounded-md border border-transparent bg-gray-200 py-2  px-9 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="inset-y-0 left-0 flex items-center ">
          <FaGoogle className="h-7 w-7  text-gray-500 group-hover:text-gray-600" />
        </span>
      </button>
      <button
        onClick={handleGithubLogin}
        disabled={!enabled}
        className=" min-w-fit relative flex flex-grow  justify-center rounded-md border border-transparent bg-gray-200 py-2  px-9 text-sm font-medium transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="inset-y-0 left-0 flex items-center ">
          <FaGithub className="h-7 w-7  text-gray-500 group-hover:text-gray-600" />
        </span>
      </button>
    </div>
  )
}

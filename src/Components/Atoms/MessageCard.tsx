import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { useMemo } from 'react'

export interface IMessageCardProps {
  title?: string
  message: string
  type: ETypes
  visible: boolean
}

export enum ETypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  MESSAGE = 'message',
  IMPORTANT = 'important',
}

const colorSchemeObj = {
  danger: {
    primary: 'bg-red-100',
    secondary: 'bg-red-300',
    text500: 'text-red-500',
    text700: 'text-red-700',
    text900: 'text-red-900',
  },
  success: {
    primary: 'bg-green-100',
    secondary: 'bg-green-300',
    text500: 'text-green-500',
    text700: 'text-green-700',
    text900: 'text-green-900',
  },
  message: {
    primary: 'bg-blue-100',
    secondary: 'bg-blue-300',
    text500: 'text-blue-500',
    text700: 'text-blue-700',
    text900: 'text-blue-900',
  },
  important: {
    primary: 'bg-yellow-100',
    secondary: 'bg-yellow-300',
    text500: 'text-yellow-500',
    text700: 'text-yellow-700',
    text900: 'text-yellow-900',
  },
}

export function MessageCard(props: IMessageCardProps) {
  if (!props.visible) return <></>

  const getColor = useMemo(() => {
    return colorSchemeObj[props.type]
  }, [props.type])
  return (
    <div className="m-auto space-y-6">
      <div className={`flex gap-4 p-4 rounded-md ${getColor.primary}`}>
        <div className="w-max flex items-center">
          <div className="h-10 w-10 flex align-middle ">
            <span className="material-icons material-icons-outlined m-auto">
              <ExclamationCircleIcon
                className={`h-10 w-10 ${getColor.text500} `}
              />
            </span>
          </div>
        </div>
        <div className=" flex space-y-1 text-sm flex-col justify-center">
          <h6 className={`font-medium ${getColor.text900}`}>{props.title}</h6>
          <p className={`${getColor.text700} leading-tight`}>{props.message}</p>
        </div>
      </div>
    </div>
  )
}

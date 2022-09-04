/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export interface IDropdownProps {
  dropDownButtonComponent: JSX.Element
  options: Array<IMenuOption>
}

export interface IMenuOption {
  label: string
  icon?: JSX.Element
  onClick: (e: any | void) => void
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props: IDropdownProps): JSX.Element {
  const listItems = props.options.map((option, index) => (
    <Menu.Item key={index}>
      {({ active }) => (
        <button
          onClick={option.onClick}
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'flex w-full px-4 py-2 gap-2 text-sm items-center'
          )}
        >
          {option.icon}
          {option.label}
        </button>
      )}
    </Menu.Item>
  ))

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>{props.dropDownButtonComponent}</div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 ">{listItems}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

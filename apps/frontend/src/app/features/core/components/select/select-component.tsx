import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export interface SelectProps {
  options: string[]
  handleChange: (value: string) => void
  value: string
}

export default function SelectComponent({
  options,
  handleChange,
  value,
}: SelectProps) {
  const [query, setQuery] = useState('')

  return (
    <div className='w-44'>
      <Combobox  value={value} onChange={handleChange}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-full bg-white text-left shadow-md focus:outline-none focus-visible:none sm:text-sm border-none">
          <Combobox.Label
              className="w-full border-none text-sm font-bold leading-5 text-gray-900 rounded-full"
            >
              <span className="block truncate p-3">{value}</span>
            </Combobox.Label>
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 bg-gray-50">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options?.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                options?.map((option) => (
                  <Combobox.Option
                    key={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-header text-white' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                      <>
                        <span
                          className={'block truncate font-bold'}
                        >
                          {option}
                        </span>
                      </>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

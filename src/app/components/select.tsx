'use client'
import { SelectHTMLAttributes, useState } from 'react'
import { ArrowDown, Check } from './icons'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  placeholder: string
  name: string
  iconLeft?: React.ReactNode
  options: SelectOption[]
  fill?: boolean
}

export default function Select({
  label,
  placeholder,
  name,
  iconLeft,
  options,
  fill = false,
  ...props
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null,
  )

  const handleOptionClick = (option: SelectOption) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className={`flex flex-col relative ${fill ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={name} className="text-gray-300 text-xs uppercase">
          {label}
        </label>
      )}
      <div
        className="flex items-center border-b border-gray-200 py-[.875rem] gap-2 cursor-pointer"
        onClick={() => (props.disabled ? {} : setIsOpen(!isOpen))}
      >
        {iconLeft}
        <input
          type="hidden"
          id={name}
          name={name}
          value={selectedOption ? selectedOption.value : ''}
        />
        <div
          className={`flex-1 ${selectedOption ? 'text-gray-400' : 'text-gray-200'}`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </div>
        {!props.disabled && (
          <ArrowDown
            size={24}
            styles={`fill-gray-200 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </div>
      <div
        className={`absolute left-0 right-0 top-full mt-1 bg-white rounded-lg shadow-shape z-10 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col">
          {options.map((option) => (
            <li
              key={option.value}
              className={`flex items-center justify-between text-sm cursor-pointer h-12 px-4 gap-2 rounded transition-colors duration-300 ${
                selectedOption?.value === option.value
                  ? 'text-orange-base'
                  : 'text-gray-300 hover:text-orange-base'
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
              {selectedOption?.value === option.value && <Check />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

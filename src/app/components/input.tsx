import { InputHTMLAttributes } from 'react'

interface InputProps {
  label?: string
  placeholder?: string
  name: string
  type?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  fill?: boolean
  mask?: 'currency'
}
export default function Input({
  label,
  placeholder = '',
  name,
  type = 'text',
  iconLeft,
  iconRight,
  mask,
  fill = false,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`flex flex-col ${fill ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={name} className="text-gray-300 text-xs uppercase">
          {label}
        </label>
      )}
      <div className="flex items-center border-b border-gray-200 py-[.875rem] gap-2 disabled:bg-transparent">
        {iconLeft}
        {mask === 'currency' && <span className="text-orange-base">R$</span>}

        <input
          {...props}
          type={type}
          id={name}
          className="flex-1 placeholder-gray-200 disabled:bg-transparent"
          placeholder={placeholder}
        />
        {iconRight}
      </div>
    </div>
  )
}

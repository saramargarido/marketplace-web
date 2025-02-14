import { TextareaHTMLAttributes } from 'react'

interface InputProps {
  label?: string
  placeholder?: string
  name: string
  fill?: boolean
}
export default function Textarea({
  label,
  placeholder = '',
  name,
  fill = false,
  ...props
}: InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={`flex flex-col ${fill ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={name} className="text-gray-300 text-xs uppercase">
          {label}
        </label>
      )}
      <div className="flex items-center border-b border-gray-200 py-[.875rem] gap-2 disabled:bg-transparent">
        <textarea
          {...props}
          id={name}
          rows={4}
          className="flex-1 placeholder-gray-200 disabled:bg-transparent"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

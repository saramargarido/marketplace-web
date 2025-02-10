interface InputProps {
  label?: string
  placeholder: string
  name: string
  type?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}
export default function Input({
  label,
  placeholder,
  name,
  type = 'text',
  iconLeft,
  iconRight,
}: InputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="text-gray-300 text-xs uppercase">
          {label}
        </label>
      )}
      <div className="flex items-center border-b border-gray-200 py-[.875rem] gap-2">
        {iconLeft}
        <input
          type={type}
          id={name}
          className="flex-1 placeholder-gray-200"
          placeholder={placeholder}
        />
        {iconRight}
      </div>
    </div>
  )
}

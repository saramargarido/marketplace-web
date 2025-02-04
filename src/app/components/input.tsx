import Image from 'next/image'

interface InputProps {
  label: string
  placeholder: string
  name: string
  type?: string
  iconLeft?: string
  iconRight?: string
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
      <label htmlFor={name} className="text-gray-300 text-sm uppercase">
        {label}
      </label>
      <div className="flex items-center border-b border-gray-200 py-[.875rem] gap-2">
        {iconLeft && (
          <Image src={iconLeft} alt="Left Icon" width={24} height={24} />
        )}
        <input
          type={type}
          id={name}
          className="flex-1 placeholder-gray-200"
          placeholder={placeholder}
        />
        {iconRight && (
          <Image src={iconRight} alt="Right Icon" width={24} height={24} />
        )}
      </div>
    </div>
  )
}

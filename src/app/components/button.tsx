import { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  variant?: 'filled' | 'link' | 'outlined'
  isActive?: boolean
  fullWidth?: boolean
  styles?: string
}

export default function Button({
  text,
  type,
  iconRight,
  iconLeft,
  variant = 'filled',
  fullWidth = false,
  isActive = false,
  styles = '',
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const filledStyles = (() => {
    switch (variant) {
      case 'link':
        if (isActive) {
          return 'border-none text-orange-base bg-shape hover:text-orange-dark'
        } else {
          return 'border-none text-gray-300 hover:bg-shape'
        }
      case 'outlined':
        return 'border-orange-base bg-white text-orange-base hover:bg-orange-base hover:text-white'
      case 'filled':
      default:
        return 'border-white bg-orange-base text-white hover:bg-white hover:text-orange-base hover:border hover:border-orange-base'
    }
  })()

  return (
    <button
      type={type ?? 'button'}
      className={`py-4 px-5 flex items-center justify-between rounded-[10px] border ${filledStyles} ${fullWidth ? 'w-full' : 'w-auto'} transition-colors duration-300 gap-2 ${styles}`}
      {...props}
    >
      {iconLeft}
      <p>{text}</p>
      {iconRight}
    </button>
  )
}

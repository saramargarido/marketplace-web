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
  textAlign?: 'text-left' | 'text-center' | 'text-right'
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
  textAlign = 'text-left',
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
      className={`flex items-center justify-between rounded-[10px] border ${filledStyles} ${fullWidth ? 'w-full' : 'w-auto'} transition-colors duration-300 gap-2 ${styles.length ? styles : 'py-4 px-5'}`}
      {...props}
    >
      {iconLeft}
      <p className={`flex-1 ${textAlign}`}>{text}</p>
      {iconRight}
    </button>
  )
}

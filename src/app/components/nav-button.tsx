'use client'
import { redirect, usePathname } from 'next/navigation'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  isActive?: boolean
  fullWidth?: boolean
  textAlign?: 'text-left' | 'text-center' | 'text-right'
  href?: string
}

export default function NavButton({
  text,
  type,
  iconRight,
  iconLeft,
  fullWidth = false,
  textAlign = 'text-left',
  href = '/',
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const pathname = usePathname()
  const isActive = href === pathname
  const isActiveStyles = isActive
    ? 'text-orange-base bg-shape hover:text-orange-dark'
    : 'text-gray-300 hover:bg-shape'

  return (
    <button
      type={type ?? 'button'}
      className={`flex items-center justify-between rounded-[10px] border-none ${isActiveStyles} ${fullWidth ? 'w-full' : 'w-auto'} transition-colors duration-300 gap-2 text-sm px-4 py-2`}
      onClick={() => redirect(href)}
      {...props}
    >
      {iconLeft}
      <p className={`flex-1 ${textAlign}`}>{text}</p>
      {iconRight}
    </button>
  )
}

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  iconRight?: React.ReactNode
  iconLeft?: React.ReactNode
  filled?: boolean
  fullWidth?: boolean
  onClick?: () => void
}

export default function Button({
  text,
  type,
  iconRight,
  iconLeft,
  filled = false,
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const filledStyles = filled
    ? `border-orange-base bg-white text-orange-base hover:bg-orange-base hover:text-white`
    : `border-white bg-orange-base text-white hover:bg-white hover:text-orange-base hover:border hover:border-orange-base`

  return (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      className={`py-4 px-5 flex items-center justify-between rounded-[10px] border ${filledStyles} ${fullWidth ? 'w-full' : 'w-auto'} transition-colors duration-300`}
    >
      {iconLeft}
      <span>{text}</span>
      {iconRight}
    </button>
  )
}

interface TagCardProps {
  text: string
  value: number
  icon: React.ReactNode
}
export default function TagCard({ text, value, icon }: TagCardProps) {
  return (
    <div className="flex p-3 bg-white rounded-[1.25rem] gap-4">
      <span className="flex justify-center items-center gap-4 w-[5rem] h-[5.375rem] bg-blue-light rounded-xl">
        {icon}
      </span>
      <div className="flex flex-col min-w-[100px] w-[100px] justify-center p-2">
        <p className="font-dmsans text-gray-400 text-[1.75rem] font-bold">
          {value.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="text-gray-300 text-xs">{text}</p>
      </div>
    </div>
  )
}

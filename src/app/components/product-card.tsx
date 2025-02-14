import Image from 'next/image'

interface ProductCardProps {
  id: string
  title: string
  description: string
  priceInCents: number
  ownerId?: number
  status?: string
  categoryId?: string
  views?: {
    data?: {
      id?: number
      viewerId?: number
      createdAt?: Date
    }
  }
  attachments: {
    create: {
      id: string
      path: string
    }
  }
}

export default function ProductCard({
  title,
  description,
  priceInCents,
  attachments,
}: ProductCardProps) {
  return (
    <div className="p-1 bg-white rounded-[1.25rem] md:w-[330px] w-full">
      <div className="relative h-[144px]">
        <Image
          src={attachments.create.path}
          fill
          alt="Imagem do produto"
          className="rounded-2xl border border-shape"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 px-3 pt-3 pb-4 gap-2">
        <div className="flex justify-between">
          <h2 className="text-gray-400 font-bold">{title}</h2>
          <p className="text-gray-500 font-bold text-lg">
            <span className="text-xs font-normal"> R$ </span>
            {priceInCents.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

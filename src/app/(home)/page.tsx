import { Store, Tag, Users } from '../components/icons'
import TagCard from '../components/tag-card'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-dmsans text-gray-500 text-[1.5rem] font-bold">
          Últimos 30 dias
        </h1>
        <p className="text-gray-300 text-sm">
          Confira as estatísticas da sua loja no último mês
        </p>
      </div>
      <div className="flex gap-6 flex-wrap">
        <div className="flex flex-col gap-4 flex-1">
          <TagCard
            text="Produtos vendidos"
            value={24}
            icon={<Tag styles="fill-blue-dark" />}
          />
          <TagCard
            text="Produtos anunciados"
            value={56}
            icon={<Store styles="fill-blue-dark" />}
          />
          <TagCard
            text="Pessoas visitantes"
            value={1238}
            icon={<Users styles="fill-blue-dark" />}
          />
        </div>
        <div className="flex min-w-[70%] flex-1 border border-blue"></div>
      </div>
    </div>
  )
}

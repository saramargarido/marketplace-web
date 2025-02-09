import Chart from '../components/chart'
import { Calendar, Store, Tag, Users } from '../components/icons'
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
        <div className="flex flex-1 gap-4 flex-wrap">
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
        <div className="flex flex-col gap-7 min-w-[75%] min-h-[360px] flex-1 bg-white p-6 rounded-[1.25rem]">
          <div className="flex justify-between w-full">
            <p className="font-dmsans text-gray-500 text-lg font-bold">
              Visitantes
            </p>
            <div className="flex gap-2">
              <Calendar styles="fill-blue-dark" />
              <p className="uppercase text-gray-300 text-xs">
                26 de junho - 26 de julho
              </p>
            </div>
          </div>
          <Chart />
        </div>
      </div>
    </div>
  )
}

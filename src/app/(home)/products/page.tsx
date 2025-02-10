import Button from '@/app/components/button'
import { Loupe, Tag } from '@/app/components/icons'
import Input from '@/app/components/input'
import Select from '@/app/components/select'

export default function Products() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-dmsans text-gray-500 text-[1.5rem] font-bold">
          Seus produtos
        </h1>
        <p className="text-gray-300 text-sm">
          Acesse gerencie a sua lista de produtos à venda
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col p-6 bg-white rounded-[1.25rem] gap-6">
          <p className="text-gray-300 text-lg">Filtrar</p>
          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-5 min-w-[280px]">
              <Input
                name="search"
                placeholder="Pesquisar"
                iconLeft={<Loupe size={24} styles="fill-gray-200" />}
              />
              <Select
                name="status"
                placeholder="Status"
                iconLeft={<Tag size={24} styles="fill-gray-200" />}
                options={[
                  { value: 'announced', label: 'Anunciado' },
                  { value: 'sold', label: 'Vendido' },
                  { value: 'calceled', label: 'Cancelado' },
                ]}
              />
            </div>
            <Button
              text="Aplicar filtro"
              type="submit"
              textAlign="text-center"
              fullWidth
            />
          </form>
        </div>
      </div>
    </div>
  )
}

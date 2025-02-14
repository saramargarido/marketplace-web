import Button from '@/app/components/button'
import { ArrowLeft } from '@/app/components/icons'
import Input from '@/app/components/input'
import Select from '@/app/components/select'
import Textarea from '@/app/components/textarea'
import Image from 'next/image'
import Link from 'next/link'

export default function Product() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 relative">
        <Link
          href={'/products'}
          className="flex gap-2 text-orange-base text-sm absolute top-[-28px] left-0"
        >
          <ArrowLeft />
          Voltar
        </Link>
        <h1 className="font-dmsans text-gray-500 text-[1.5rem] font-bold">
          Editar produto
        </h1>
        <p className="text-gray-300 text-sm">
          Gerencie as informações do produto cadastrado
        </p>
      </div>
      <div className="flex gap-6 items-start lg:flex-row flex-col">
        <div className="relative min-w-[415px] max-w-full w-full">
          <Image
            src={'https://placehold.co/600x400.png'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
            alt="Imagem do produto"
            className="rounded-2xl border border-shape"
          />
        </div>
        <div className="flex flex-col p-6 bg-white rounded-[1.25rem] lg:min-w-[590px] max-w-full w-full gap-6">
          <div className="flex justify-between items-center">
            <h2 className="font-dmsans text-gray-300 text-lg font-bold">
              Dados do produto
            </h2>
            <small className="uppercase text-[0.625] bg-blue-dark text-white py-1 px-2 rounded-full">
              Anunciado
            </small>
          </div>
          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-[2fr_1fr] gap-5">
                <Input label="Título" name="title" value="Sofá" disabled />
                <Input
                  label="Título"
                  name="title"
                  value="772.99"
                  mask="currency"
                  type="number"
                  disabled
                />
              </div>
              <div className="flex">
                <Textarea
                  name="description"
                  label="Descrição"
                  value={
                    'Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.'
                  }
                  disabled
                  fill
                />
              </div>
              <div className="flex">
                <Select
                  label="Categoria"
                  name="category"
                  placeholder="Categoria"
                  fill
                  disabled
                  options={[
                    { value: 'mobile', label: 'Móvel' },
                    { value: 'mobile2', label: 'Móvel2' },
                  ]}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                fullWidth
                text="Cancelar"
                variant="outlined"
                textAlign="text-center"
              />
              <Button
                fullWidth
                text="Salvar e publicar"
                textAlign="text-center"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

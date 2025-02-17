import { ArrowLeft, UploadImage } from '@/app/components/icons'
import ProductForm from '@/app/components/product-form'
import Link from 'next/link'

export default function CreateProduct() {
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
          Novo produto
        </h1>
        <p className="text-gray-300 text-sm">
          Cadastre um produto para venda no marketplace
        </p>
      </div>
      <div className="flex gap-6 items-start lg:flex-row flex-col">
        <div className="flex justify-center items-center flex-col gap-4 min-w-[415px] max-w-full w-full h-[360px] bg-shape rounded-[1.25rem]">
          <UploadImage styles="fill-orange-base" />
          <span className="text-sm block text-gray-300 max-w-[160px] text-center">
            Selecione a imagem do produto
          </span>
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
          <ProductForm editable />
        </div>
      </div>
    </div>
  )
}
